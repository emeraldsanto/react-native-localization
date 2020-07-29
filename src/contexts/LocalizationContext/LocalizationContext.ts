import { createContext, useContext } from "react";

export interface LocalizationContextValue {
	/**
	 * The current language of the application.
	 */
	language: string;

	/**
	 * An array of supported languages, the provider will throw when attempting
	 * to switch to an unsupported language.
	 */
	supportedLanguages: string[];

	/**
	 * Retrieves the value associated with the provided key, in the current language.
	 * @param key 
	 */
	translate(key: string): string;

	/**
	 * Changes the current language to the provided one, if supported.
	 * Otherwise throws.
	 * @param {string} to The new language to use
	 */
	changeLanguage(to: string): void;
}

export const LocalizationContext = createContext<LocalizationContextValue>({
	language: "en",
	supportedLanguages: ["en"],
	translate: function () {
		throw new Error("Not implemented");
	},
	changeLanguage: function () {
		throw new Error("Not implemented");
	}
});

LocalizationContext.displayName = "LocalizationContext";

export function useLocalization() {
	return useContext(LocalizationContext);
}