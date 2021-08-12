import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

import { useLanguage } from "../../context/LanguageContext";

import { FormattedMessage } from "react-intl";

const Header = () => {
	const { setLanguage } = useLanguage();

	const handleSelect = (eventKey: any) => {
		console.log("handleSelect");
		console.log(eventKey);

		setLanguage(eventKey);
	};

	return (
		<div className="w-100 border">
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">SHL</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto"></Nav>
						<Nav onSelect={handleSelect}>
							<NavDropdown
								title={
									<FormattedMessage
										id="Header.ChangeLanguage"
										defaultMessage="Change Language"
									/>
								}
								id="collasible-nav-dropdown"
							>
								<NavDropdown.Item eventKey="en">EN</NavDropdown.Item>
								<NavDropdown.Item eventKey="he">HE</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

/*	title={title}
                  // OPT 1
                  <Trans key="login.title"/>  
                  // OPT2
                  text('changeLanguage')
                  // OPT 3
									<FormattedMessage
										id="changeLanguage"
										defaultMessage="Change Language"
									/>*/
export default Header;
