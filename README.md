# Projektstruktur

```
WebStart-Frontend-React/                                 
├── node_modules/                                         # Abhängigkeiten (automatisch durch npm install generiert)
├── public/                                               # Statische öffentliche Dateien (z. B. favicon, robots.txt)
├── src/                                                  # Haupt-Quellcode des React-Frontends
│    ├─── api/                                            # API-Wrapper (z. B. auth.ts, todo.ts) – zentrale Stelle für HTTP-Requests
│    ├─── assets/                                         # Statische Assets wie Bilder, SVGs oder Logos
│    ├─── components/                                     # Wiederverwendbare UI-Komponenten (z. B. Buttons, Modals, Inputs)
│    ├─── features/                                       # Feature-spezifische Komponenten & Logik (z. B. Auth, Todo, Booking)
│    ├─── hooks/                                          # Custom Hooks (z. B. useAuth, useApiErrorHandler)
│    ├─── pages/                                          # Seitenkomponenten für Routing-Ziele (z. B. LoginPage, DashboardPage)
│    ├─── types/                                          # Globale TypeScript-Typdefinitionen & Interfaces
│    ├─── App.css                                         # Globale App-spezifische CSS-Stile
│    ├─── App.tsx                                         # Einstiegskomponente – enthält Router & grundlegende Layoutstruktur
│    ├─── index.css                                       # Globale Styles (Tailwind oder andere Basisdefinitionen)
│    ├─── main.tsx                                        # Einstiegspunkt der React-App – ReactDOM.render bzw. createRoot()
│    └─── vite-env.d.ts                                   # Vite-generierte Umgebungsdefinitionen für TypeScript
├── .gitignore                                            # Dateien & Ordner, die Git ignorieren soll
├── eslint.config.js                                      # Konfiguration für ESLint – Codequalität & Linting-Regeln
├── index.html                                            # HTML-Einstiegspunkt für das SPA – wird von Vite benutzt
├── package.json                                          # Projektdefinition, Abhängigkeiten & Skripte
├── package-lock.json                                     # Lockfile zur genauen Auflösung von Abhängigkeiten
├── README.md                                             # Projektdokumentation
├── tsconfig.app.json                                     # TypeScript-Konfiguration für das Anwendungsprojekt
├── tsconfig.json                                         # Basis-Konfiguration für TypeScript (wird von anderen tsconfigs erweitert)
├── tsconfig.node.json                                    # TypeScript-Konfiguration für node-spezifische Tools (z. B. ESLint, Scripts)
└── vite.config.ts                                        # Konfiguration für Vite (z. B. Aliases, Plugins, Dev-Server)
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```