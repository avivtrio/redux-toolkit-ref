import React, {
	useState,
	useContext,
	PropsWithChildren,
	FormEvent,
} from "react";

import { IntlProvider } from "react-intl";

import {
	localeLanguage,
	language,
	languageOption,
	languageMessages,
} from "../i18n/config";

type ContainerContext = {
	local: string;
	setLanguage: (e: any) => void;
};

const LanguageContext = React.createContext<ContainerContext | null>(null);

export const LanguageProvider: React.FC = ({
	children,
}: PropsWithChildren<any>) => {
	const [local, setLocal] = useState<string>("");

	const [contentLanguage, setContentLanguage] = useState<any>(
		languageMessages.en
	);

	const setLanguage = (value: string) => {
		const newLocal = value;
		setLocal(newLocal);

		switch (newLocal) {
			case languageOption.en:
				setContentLanguage(languageMessages.en);
				break;

			case languageOption.he:
				setContentLanguage(languageMessages.he);
				break;

			default:
				console.log(`${newLocal} not defined in languageOptions`);
				break;
		}
	};

	return (
		<LanguageContext.Provider
			value={{
				local,
				setLanguage,
			}}
		>
			<IntlProvider messages={contentLanguage} locale={local}>
				{children}
			</IntlProvider>
		</LanguageContext.Provider>
	);
};

export const useLanguage = () =>
	useContext(LanguageContext) as ContainerContext;
