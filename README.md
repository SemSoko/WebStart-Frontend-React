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
│    │    └─── auth.ts                                    # Typdefinitionen fuer Auth-Endpunkte
│    ├─── App.css                                         # Globale App-spezifische CSS-Stile
│    ├─── App.tsx                                         # Einstiegskomponente – enthält Router & grundlegende Layoutstruktur
│    ├─── index.css                                       # Globale Styles (Tailwind oder andere Basisdefinitionen)
│    ├─── main.tsx                                        # Einstiegspunkt der React-App – ReactDOM.render bzw. createRoot()
│    └─── vite-env.d.ts                                   # Vite-generierte Umgebungsdefinitionen für TypeScript
├── .gitignore                                            # Dateien & Ordner, die Git ignorieren soll
├── .prettierignore                                       # Dateien/Ordner, die Prettier beim Formatieren ignorieren soll
├── .prettierrc                                           # Projektweite Prettier-Formatierungsregeln
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

# ESLint + Prettier Setup

Dieses Projekt nutzt ESLint (Codeanalyse) und Prettier (Codeformatierung), um
sauberen, konsistenten und fehlerfreien Code sicherzustellen.\
Das Setup ist minimal gehalten, aber deckt TypeScript + React + Hooks vollständig ab.

## Installation

```
npm install -D eslint typescript-eslint eslint-plugin-react eslint-plugin-react-hooks prettier eslint-config-prettier
```

Warum -D (Dev-Dependencies)?\
- Diese Tools werden nur während der Entwicklung gebraucht, nicht im finalen Build.
- Verringert die Größe des ausgelieferten Bundles.
- Standardpraxis für Linter, Formatter, Build- und Testtools.

## Pakete & Zweck

Paket\
Zweck

`eslint`\
Kern-Linter für JavaScript/TypeScript

`typescript-eslint`\
TypeScript-Parser + ESLint-Regeln für TS

`eslint-plugin-react`\
React-spezifische Regeln

`eslint-plugin-react-hooks`\
Best Practices für Hooks (z. B. useEffect-Dependencies)

`prettier`\
Codeformatter (Stilregeln)

`eslint-config-prettier`\
Deaktiviert ESLint-Regeln, die mit Prettier kollidieren

## Konfigurationsdateien

`eslint.config.js` - Definiert Linting-Regeln, Plugins und Ignorierlisten für TypeScript + React + Hooks, inklusive Prettier-Integration.
`.prettierrc` - Legt Formatierungsstil fest (z. B. Anführungszeichen, Semikolons, Zeilenlänge).
`.prettierignore` - Schließt bestimmte Verzeichnisse/Dateien vom Formatieren aus
`package.json` → Scripts - Enthält NPM-Befehle zum Ausführen von Linting (lint, lint:fix) und Prettier (format, format:check).

Scripts:\
- npm run lint → Code auf Probleme prüfen
- npm run lint:fix → Probleme automatisch beheben (soweit möglich)
- npm run format → gesamten Code mit Prettier formatieren
- npm run format:check → prüfen, ob Code Prettier-Regeln entspricht

Ergebnis:\
- Einheitlicher Code-Stil
- Sofortige Fehlererkennung
- Sichere, automatisierte Korrekturen
- Minimaler Overhead, aber Best Practices für React + TypeScript sind gewährleistet

### Pfad-Aliases (TypeScript + Vite)

- In `tsconfig.app.json` → `baseUrl` und `paths` definiert.
- In `vite.config.ts` → `resolve.alias` ergänzt, damit die Aliases auch im Build/Dev-Server funktionieren.
- Beispiel:
```
import { login } from '@api/auth';
statt
import { login } from '../../api/auth';
```

# UI-Stack (Tailwind + shadcn/ui + Utilities)

Dieses Projekt nutzt ein modernes UI-Setup aus:

- **Tailwind CSS v4** → Utility-first CSS Framework für Layout, Farben, Abstände und Responsiveness.
- **shadcn/ui** → vorgefertigte, barrierefreie React-Komponenten
- **Utilities** (`clsx`, `tailwind-merge`, `tailwind-variants`) → saubere und erweiterbare Klassenverwaltung.

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