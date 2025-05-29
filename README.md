NewsBox
“Innovation isn’t always about creating something new — sometimes it’s about making what’s already there work better, faster, and cleaner.”

What is NewsBox?
NewsBox is a lightweight browser extension that curates your entire news universe right in your browser popup. It’s designed to give you clean, crisp, and real-time news updates with a sleek UI inspired by modern minimalism and a pinch of anime aesthetic flair.

No more endless tab hopping — just quick access to the headlines, tech updates, movie buzz, and your nerd corner — all in one place.

Features
Compact browser extension UI optimized for Chrome (640x480 px popup)

Multiple categorized tabs: Headlines, Tech, Movies, Nerd Corner

Real-time news fetched using the GNews API

Clean light/dark mode with smooth transitions using Framer Motion

Built with modern web stack: React + Vite + TailwindCSS

Responsive and accessible design with subtle anime-inspired fonts and styles

Tech Stack
Technology	Purpose
React	Component-based UI
Vite	Lightning-fast build tool
TailwindCSS	Utility-first CSS framework
Framer Motion	Animation and smooth UI transitions
GNews API	Real-time news data source

Installation & Setup
Clone the repo

bash
Copy
Edit
git clone https://github.com/yourusername/newsbox.git
cd newsbox
Install dependencies

bash
Copy
Edit
npm install
Configure your API key

Replace the API_KEY variable in src/App.tsx with your own GNews API key.

Run the dev server

bash
Copy
Edit
npm run dev
Load the extension in Chrome

Go to chrome://extensions/

Enable Developer mode

Click Load unpacked and select your project’s dist folder after building (npm run build)

Usage
Open the browser extension popup and browse news categories instantly. Switch between tabs to get curated updates on:

General Headlines

Technology

Entertainment (Movies)

Nerd Corner (Anime, Gaming, Comics)

Toggle dark mode for comfortable reading anytime.

Contribution
Feel free to open issues or submit pull requests. Suggestions to improve UI, add features, or optimize performance are always welcome!

License
MIT License © 2025 [Your Name]

Acknowledgments
Inspired by the clean, focused UX of startups and a love for anime aesthetics. Special thanks to the GNews API for powering real-time news updates.

Ready to cut the noise and catch only the news that matters?
Give NewsBox a spin — your daily news, reimagined.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
