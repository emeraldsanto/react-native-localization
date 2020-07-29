import React, { Children, FC } from "react";
import { Text, TextProps } from "react-native";
import { useLocalization } from "../../contexts/LocalizationContext/LocalizationContext";

export const LocalizedText: FC<TextProps> = props => {
	const { children, ...rest } = props;

	const { translate } = useLocalization();

	return (
		<Text {...rest}>
			{Children.map(children, child => {
				if (typeof child === "string") {
					return translate(child);
				}

				return child;
			})}
		</Text>
	);
}