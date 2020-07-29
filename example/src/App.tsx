import React, { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { LocalizationProvider, useLocalization } from "react-native-localization";
import translations from "./localization/translations.json";

export const App: FC = () => {
	return (
		<LocalizationProvider initialLanguage="en" supportedLanguages={["fr", "en"]} translations={translations}>
			<Child />
		</LocalizationProvider>
	);
}

const Child: FC = () => {
	const { language, supportedLanguages, translate, changeLanguage } = useLocalization();

	function toggleLanguage() {
		const nextLanguage = supportedLanguages.find(l => l !== language);

		if (!nextLanguage) {
			return;
		}

		changeLanguage(nextLanguage);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.welcome}>
				{translate("welcome")}
			</Text>

			<Text style={styles.current}>
				{translate("currentLanguageIs")} {language.toUpperCase()}
			</Text>

			<Button
				onPress={toggleLanguage}
				title={translate("changeLanguage")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 25,
		alignItems: "center",
		justifyContent: "center"
	},
	welcome: {
		fontSize: 20,
		paddingBottom: 15,
		fontWeight: "bold"
	},
	current: {
		fontSize: 18,
		paddingBottom: 9,
	}
});
