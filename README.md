# Workspace Admin (MFE Remote)

A high-performance Micro Front End built with **React 19**, **TypeScript**, and **Vite**.

## Tech Stack
- **Framework**: React 19
- **Routing**: React Router 7
- **UI**: Material UI (MUI) v6 & Tailwind CSS
- **Build Tool**: Vite 5
- **Federation**: `@originjs/vite-plugin-federation`

## Micro Front End Configuration
This application acts as a **Remote**. 
- **Name**: `workspace`
- **Exposed Module**: `./App`
- **Default Port**: `3000`

## Getting Started

### Development
```bash
npm run dev
```

### Build and Preview (Federation Testing)
To test the module federation entry point (`remoteEntry.js`), you must build the project:
```bash
npm run serve
```

## License
ISC