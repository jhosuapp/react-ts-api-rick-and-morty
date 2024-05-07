# Welcome to my Rick and Morty app! 👋

I have created an exact replica of the current page at https://rickandmortyapi.com/ using React and TypeScript. This replica offers all the functionalities and data available on the original page, but implemented with the efficiency and robustness provided by React and TypeScript. From character search to episode exploration, each element has been carefully developed to provide a smooth and dynamic experience for Rick and Morty fans.

## The challenge

This app has been developed for the purpose of practicing typing events, elements, references, promises, etc...

Your users should be able to:

- Search characters
- List characters
- Change color theme

### Links

- Solution URL: [Github](https://github.com/jhosuapp/react-ts-api-rick-and-morty)

- Live Site URL: [Github Pages](https://jhosuapp.github.io/react-ts-api-rick-and-morty)
- Live Site URL: [Netlify](https://glittering-seahorse-e15f69.netlify.app)

## Installation

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/jhosuapp/react-ts-api-rick-and-morty.git

2. **Install Dependencies (Node version greater than 1.20.0 required):**: 
   ```bash
   npm install 

3. **Run Project:**: 
   ```bash
   npm run dev

## Deploy

1. **Build Project:**: 
   ```bash
   npm run build

2. **Build Project:**: 
   ```bash
   npm run deploy

## View the Application

Open your browser and visit  `http://localhost:3000` when server are started;

## Technologies Used

- React.js
- Typescript
- Sass

## Contribution

If you want to contribute to this project, you are welcome! You can open an issue or send a pull request.

## License

This project is under the MIT License.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
