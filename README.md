This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Project Documentation

## Project Overview

This project is a React-based web application designed to serve as a dashboard. It includes several components such as "Dashboard," "Sidebar," "MainContent," and "Subsection" to create a dynamic and interactive user interface.

## Components

### 1. Dashboard

- **Description:** The main container component that orchestrates the rendering of the dashboard.
  
- **Props:**
  - `selectedMenuItem`: Keeps track of the currently selected menu item.
  - `setSelectedMenuItem`: A function to update the `selectedMenuItem` state.
  
- **Responsibilities:**
  - Manages the state of the selected menu item.
  - Renders the "Sidebar" and "MainContent" components.

### 2. Sidebar

- **Description:** A component responsible for rendering the sidebar with menu items.

- **Props:**
  - `selectedMenuItem`: The currently selected menu item.
  - `setSelectedMenuItem`: A function to update the `selectedMenuItem` state.

- **Responsibilities:**
  - Displays a list of menu items.
  - Allows users to select a menu item, updating the `selectedMenuItem` state.

### 3. MainContent

- **Description:** A component responsible for rendering the main content area based on the selected menu item.

- **Props:**
  - `selectedMenuItem`: The currently selected menu item.
  - `subsectionStates`: State of subsections for each menu item.
  - `toggleSubsection`: A function to toggle the state of a subsection.

- **Responsibilities:**
  - Renders the content based on the selected menu item.
  - Passes the subsection state to the "Subsection" component.

### 4. Subsection

- **Description:** Represents individual subsections within the main content area.

- **Props:**
  - `data`: Title or content of the subsection.
  - `selectedMenuItem`: The currently selected menu item.

- **Responsibilities:**
  - Manages its own open/closed state.
  - Provides a toggle mechanism to open or close the subsection.
  - Renders content conditionally based on its open/closed state.

## Usage

To use this project, follow these steps:

1. Install dependencies: Run `npm install` to install the required packages.
2. Start the development server: Run `npm run dev` to start the development server.
3. Open your browser: Visit `http://localhost:3000` to view the dashboard.
