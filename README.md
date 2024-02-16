# i18n Template for React and React Native

This is a template for setting up internationalization (i18n) in React and React Native projects using `i18next` and `react-i18next` with typescript.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/). You can verify whether Node.js and npm are installed by running the following commands in your terminal:

```bash
node --version
npm --version
```

## Setup

1. Clone this repository into the root of your project:

```
git clone https://github.com/Ludvigpbf/i18n-template.git
```

2. Run `node install.js` to install the dependencies and delete the unnecessary files from the template.


## Usage

### React

If you are using the template in a React project you can delete the following commented lines in the i18n.tsx file.
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
For React Native projects, uncomment the import statement for react-native-localize and the lng line in the i18n.tsx file.
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

If you want to type-check the translations and us the percs of typescript you can delete the .json files and use the .ts files for translations.

1.  Delete the .json files
2.  Remove the imports of the .json files in index.ts and use the .ts imports instead
3.  Use the `...commonEn,` and `...commonSv,` instead of the `...common,`  

## License

MIT