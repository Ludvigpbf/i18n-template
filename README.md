# i18n Template for React and React Native

This is a template for setting up internationalization (i18n) in React and React Native projects using `i18next` and `react-i18next` with typescript.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/). You can verify whether Node.js and npm are installed by running the following commands in your terminal:

```bash
node --version && npm --version
```

## Setup

1. Clone this repository into the root of your project:

```bash
git clone https://github.com/Ludvigpbf/i18n-template.git
```

2. Install the dependencies and delete the unnecessary files from the template by runing this command from the root of your project:

```bash
node i18n-template/install.js
```
3. Import the `i18n.tsx` file into your `main.tsx` like this:

```bash
import "../locales/i18n.tsx";
```
#### Modify the path to match your structure!

### React

If you are using the template in a React project you can delete the following commented lines in the `i18n.tsx` file.

```
4. // Uncomment the following line for React Native projects
5. // import * as RNLocalize from "react-native-localize";
```

and

```
28. // Uncomment the following line for React Native projects and use the device's locale as default
29. // lng: RNLocalize.getLocales()[0]?.languageCode || 'en',
```

### React Native

For React Native projects, uncomment the import statement for ***react-native-localize*** and the ***lng*** line in the `i18n.tsx` file.

```
4. // Uncomment the following line for React Native projects
5. // import * as RNLocalize from "react-native-localize";
```

and

```
28. // Uncomment the following line for React Native projects and use the device's locale as default
29. // lng: RNLocalize.getLocales()[0]?.languageCode || 'en',
```

Then you can delete this line:

```
27.   lng: "sv",
```

### Typescript

If you want to type-check the translations and use the percs of typescript you can delete the .json files and use the .ts files for translations.

1.  Delete the .json files
2.  Remove the imports of the .json files in index.ts and use the .ts imports instead
3.  Use the `...commonEn,` and `...commonSv,` instead of the `...common,`

## Usage

Now use the translation like this:

```bash
import { useTranslation } from 'react-i18next';

const YourComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('common.hello')}</p>
      <p>{t('common.world')}</p>
    </div>
  );
};

export default YourComponent;
```

## License

MIT
