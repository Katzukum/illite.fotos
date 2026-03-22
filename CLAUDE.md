# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Tasks

The project uses **npm** for dependency management and script execution. Typical workflows are:

- **Install dependencies**:
  ```bash
  npm install
  ```

- **Build the project**:
  ```bash
  npm run build
  ```
  Builds the production bundle into the `dist/` directory.

- **Lint the code**:
  ```bash
  npm run lint
  ```
  Runs ESLint across the source tree.

- **Run tests**:
  ```bash
  npm test
  ```
  Executes all Jest tests.

- **Run a single test file**:
  ```bash
  npm test -- path/to/__tests__/example.test.js
  ```
  Or use `npm test -- -t "test description"` to run a test by name.

- **Start the development server**:
  ```bash
  npm run dev
  ```
  Runs the Vite/webpack dev server (depending on configuration).

## Project Structure (High‑Level Overview)

```
└── src
    ├── components   # Reusable UI components
    ├── hooks        # Custom React hooks
    ├── pages        # Page‑level components
    ├── services     # API clients and utilities
    ├── store        # Global state (e.g., Redux, Zustand)
    └── App.tsx      # Root component
└── public
    └── index.html
└── tests
    └── integration   # End‑to‑end or integration tests
└── package.json
└── tsconfig.json
└── jest.config.js
└── .eslintrc.js
└── .prettierrc
```

- **`src/components`** contains small, reusable UI elements.
- **`src/pages`** holds page‑level components that compose the UI.
- **`src/services`** provides wrappers around external APIs.
- **`src/store`** manages global state.
- **`tests`** holds non‑unit tests; unit tests live next to components in `__tests__` folders.

The entry point is `src/App.tsx`, which is rendered by `index.tsx`.

## Cursor / Copilot Rules

There are no custom Cursor or Copilot rules in this repository.

## Readme Highlights

The `README.md` should include:
- Project description
- Installation steps
- Quick start
- Scripts reference
- Testing guide
- Contribution guidelines

If any of these sections are missing, consider adding them to aid future contributors.

---

*This CLAUDE.md was generated based on the current repository layout. Update it as the codebase evolves.*