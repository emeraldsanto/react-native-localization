import React, { FC, useState } from "react";
import { LocalizationContext } from "./LocalizationContext";

export interface LocalizationProviderProps {
	/**
	 * The default language to use when first rendering the provider.
	 */
	initialLanguage: string;

	/**
	 * An array of supported languages, the provider will throw when attempting
	 * to switch to an unsupported language.
	 */
	supportedLanguages: string[];

	/**
	 * An object or JSON file containing all translations.
	 */
	translations: Record<string, Record<string, string>>;
}

export const LocalizationProvider: FC<LocalizationProviderProps> = props => {
	const { initialLanguage, supportedLanguages, translations, children } = props;
	const [language, setLanguage] = useState<string>(initialLanguage);

	function translate(key: string) {
		try {
			return translations[key][language];
		}

		catch (error) {
			return `[${key}]`;
		}
	}

	function changeLanguage(to: string) {
		if (!supportedLanguages.includes(to)) {
			throw new Error(`Unsupported language: ${to}. Expected ${supportedLanguages.join(",")}`);
		}

		setLanguage(to);
	}

	return (
		<LocalizationContext.Provider value={{ language, supportedLanguages, translate, changeLanguage }}>
			{children}
		</LocalizationContext.Provider>
	);
}