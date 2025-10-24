# Project Overview

This project is a high-fidelity recreation of a Figma design for a "Team Library" usage guide. It's a single-page application built with Vite, React, and TypeScript, and styled with Tailwind CSS. The primary goal is to visually replicate the Figma design with pixel-perfect accuracy. The application is designed for Android devices and does not have responsive behavior for other screen sizes.

# Building and Running

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Development Server

To start the development server, run:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or a different port if 5173 is in use).

## Production Build

To create a production build, run:

```bash
npm run build
```

The output will be in the `dist/` directory.

## Previewing the Production Build

To preview the production build locally, run:

```bash
npm run preview
```

# Development Conventions

*   **Styling:** The project uses a combination of Tailwind CSS and inline styles. Inline styles are used for precise positioning and sizing to match the Figma design.
*   **Component Structure:** The entire page is contained within a single component, `src/pages/TeamLibraryPage.tsx`.
*   **IDs:** All significant elements have semantic IDs for easy identification and debugging.
*   **Static Content:** The application is entirely static, with no data fetching or complex state management.
