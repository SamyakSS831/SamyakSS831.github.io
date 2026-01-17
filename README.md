# Vite React TypeScript Starter
 
A modern web application built with React, TypeScript, Vite, and Tailwind CSS.

## Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

## Installation

1. Clone or navigate to the project directory:
   ```bash
   cd project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- **`npm run dev`** - Start the development server with hot reload
- **`npm run build`** - Build the project for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run typecheck`** - Run TypeScript type checking

## Project Structure

```
src/
├── components/       # Reusable React components
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles
└── vite-env.d.ts    # Vite environment types

public/              # Static assets
```

## Technology Stack

- **React** 18 - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Supabase** - Backend services
- **Lucide React** - Icon library

## Troubleshooting

- **Port already in use**: If port 5173 is busy, Vite will automatically use the next available port
- **Dependencies not installing**: Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
- **Hot reload not working**: Restart the dev server with `npm run dev`

## License

MIT
