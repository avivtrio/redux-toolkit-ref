import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import style from "./Dashboard.module.css";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const setCollapse = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Container fluid className="w-100 h-100">
      <Row className="h-100">
        <Col className={`${isOpen ? style.open : style.close}`} xs={1}>
          <div>Tree</div>
          <li className={style.collapse} onClick={setCollapse}></li>
        </Col>
        <Col className="flex-grow-1">
          <div className="d-flex flex-column h-100">
            <header className="border w-100"> header Ecgs</header>

            <main className="flex-grow-1">
              <Row className="h-100">
                <Col xs={2}>
                  <div>Data&Time</div>
                </Col>
                <Col className="border">
                  <Row className="d-flex flex-column h-100">
                    <div className="border">tool-bar</div>
                    <div className="border flex-grow-1">ECG Graph</div>
                  </Row>
                </Col>
                <Col xs={3} className="border">
                  <div>Meta Data</div>
                </Col>
              </Row>
            </main>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
