# Titans Tours & Travels

A modern web application for managing tours and travels, built with React, TypeScript, and Vite.

## Overview

This project provides a comprehensive platform for managing tours and travels, including features for administrators to manage bookings, users, and tours. The application is built using React, TypeScript, and Vite, with a focus on scalability, maintainability, and user experience.

## Key Features

* User authentication and authorization
* Tour management (create, read, update, delete)
* Booking management (create, read, update, delete)
* User management (create, read, update, delete)
* Responsive design for desktop and mobile devices
* Modern UI components using React and Vite

## Getting Started

To get started with the project, please follow these steps:

1. Clone the repository to your local machine
2. Install dependencies using `npm install` or `yarn install`
3. Start the development server using `npm run dev` or `yarn dev`
4. Open your web browser and navigate to `http://localhost:5173`

## Project Structure

The project is organized into the following directories:

* `src`: contains the source code for the application
* `public`: contains static assets and index.html
* `components`: contains reusable UI components
* `contexts`: contains context API implementations
* `hooks`: contains custom React hooks
* `pages`: contains page-level components
* `services`: contains API client implementations
* `utils`: contains utility functions

## Technologies Used

* React: for building the user interface
* TypeScript: for type checking and code quality
* Vite: for building and serving the application
* Radix UI: for UI components
* Lucide: for icons
* Tailwind CSS: for styling

## Contributing

We welcome contributions to the project! If you're interested in contributing, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## API Client Configuration

The API client is configured to use the `VITE_API_BASE_URL` environment variable. If this variable is not set, the client will default to `http://localhost:3001/api`.

## Environment Variables

The following environment variables are used in the project:

* `VITE_API_BASE_URL`: the base URL for the API client

## Dependencies

The project depends on the following packages:

* `react`: for building the user interface
* `react-dom`: for rendering the application
* `react-router-dom`: for client-side routing
* `radix-ui/react`: for UI components
* `lucide-react`: for icons
* `tailwindcss`: for styling
* `vite`: for building and serving the application
* `typescript`: for type checking and code quality

## Dev Dependencies

The project depends on the following dev dependencies:

* `@types/react`: for type checking
* `@types/react-dom`: for type checking
* `@types/react-router-dom`: for type checking
* `@vitejs/plugin-react`: for building and serving the application
* `autoprefixer`: for CSS prefixing
* `eslint`: for code quality
* `eslint-plugin-react`: for code quality
* `postcss`: for CSS processing
* `tailwindcss`: for styling