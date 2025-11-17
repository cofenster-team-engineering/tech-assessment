# cofenster Tech Assessment

A monorepo project with React frontend and Apollo GraphQL backend.

## Project Structure

```
tech-assessment/
├── packages/
│   ├── frontend/          # React application
│   └── backend/           # Apollo GraphQL server
```

## Prerequisites

- Node.js 22
- Yarn 4.11.0

## Getting Started

### Install Dependencies

```bash
yarn && yarn postinstall
```

### Development

Run both frontend and backend in development mode:

```bash
yarn dev
```

This will start:
- Frontend dev server on http://localhost:3000
- Backend GraphQL server on http://localhost:4000

### Build

Build all packages:

```bash
yarn build
```

### Linting

Run linters for all packages:

```bash
yarn lint
```

Auto-fix linting issues:

```bash
yarn lint:fix
```

### Testing

Run unit tests:

```bash
yarn test:unit
```

### GraphQL Code Generation

Generate TypeScript types from GraphQL schema:

```bash
yarn generate:graphql
```

This runs GraphQL Code Generator for both frontend and backend packages.

## Tech Stack

### Frontend
- React 19
- Apollo Client (GraphQL)
- Emotion (CSS-in-JS)

### Backend
- Apollo Server 5

### Build Tools
- Babel (transpilation)
  - `@babel/preset-env` for modern JavaScript
  - `@babel/preset-typescript` for TypeScript
  - `@babel/preset-react` for JSX (frontend)
  - `babel-plugin-import-graphql` for GraphQL imports (backend)
- Webpack 5 (frontend bundling)
- GraphQL Code Generator (type generation)

### Development Tools
- Nx (monorepo task orchestration with caching)
- Biome (fast linting & formatting)
- Jest (unit testing)

## API Proxy

The frontend webpack dev server proxies `/api` requests to the backend GraphQL server at `http://localhost:4000`.