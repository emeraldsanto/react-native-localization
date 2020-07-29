# React Native Localization

A lightweight, no dependency React Native localization utility.

## Installation

This package has not yet been published to `npm`, you must install the dependency using this Github repository.

```sh
npm install emeraldsanto/react-native-localization
```

## Usage

You must first render a `LocalizationProvider` at the root of your application and supply it with default values.

```tsx
import { LocalizationProvider } from "react-native-localization";
import translations from "./localization/translations.json"

export const App: FC = () => {
  return (
    <LocalizationProvider initialLanguage="en" supportedLanguages={["fr", "en"]} translations={translations}>
      {/* The rest of your application */}
    </LocalizationProvider>
  );
}
```

You may have noticed the `translations` prop, this is a where all your translations should be. This can be either a JSON file or a plain old JavaScript object. It must have the following structure.

```typescript
{
  [key: string]: {
    [language: string]: string;
  }
}
```

The provider gives access to the current language, the supported languages and functions to translate and change the current language through the `useLocalization` hook.

```typescript
import { useLocalization } from "react-native-localization";

export const SomeScreen: FC = () => {
  const { language, supportedLanguages, translate, changeLanguage } = useLocalization();
  
  // ...
}
```

You can then translate any key that is inside your translations object or file.

```typescript
import { Text } from "react-native";
import { useLocalization, LocalizedText } from "react-native-localization";

export const SomeScreen: FC = () => {
	const { translate } = useLocalization();
  
	return (
		<Text>
			{translate("some_key")}
		</Text>
	);
}
```

Or using the `LocalizedText` component which wraps React Native's `Text` component and uses the `useLocalization` hook internally.

```typescript
import { LocalizedText } from "react-native-localization";

export const SomeScreen: FC = () => {  
	return (
		<LocalizedText>
			{translate("some_key")}
		</LocalizedText>
	);
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
