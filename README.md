# InStock - Inventory Management System

InStock is a comprehensive Inventory Management System developed for a Fortune 500 client. This repository contains the frontend application, which provides users with a seamless interface to manage warehouses and inventory items. The system allows users to view, add, edit, and delete warehouses and their associated inventory, ensuring accurate and up-to-date tracking of stock across multiple locations.

URL: https://github.com/alperzini/instock-client
Backend Repository: https://github.com/alperzini/instock-server

Built with React.js, Vite, SCSS, Axios, MySQL.

## Features
- **Warehouse Management**: Browse a list of all warehouses, add a new warehouse, and edit or delete existing ones.
- **Inventory Tracking**: View all inventory items across warehouses, add new items, and edit or delete existing stock.
- **Detailed Views**: In-depth individual pages for specific warehouses and inventory items.
- **Interactive Modals**: Secure deletion workflows using interactive modals for both warehouses and inventory.
- **Search & Filtering**: Quickly find specific warehouses or inventory items using integrated search fields.
- **Responsive Navigation**: Includes a global header/navigation and a 404 error page for unmatched routes.

## Tech Stack
- **React**: Component-based UI rendering and state management.
- **Vite**: Ultra-fast frontend build tool and development server.
- **React Router DOM**: Client-side routing for seamless page navigation.
- **SCSS**: Advanced styling, variables, and component-level structure.
- **Axios**: HTTP client for robust backend API requests.
- **MySQL**: Database for storing warehouse and inventory data.

## Project Structure
```text
src/
├── assets/       # Images, logos, icons
├── components/   # Reusable UI components (Modals, Forms, Lists, Navigation, etc.)
├── pages/        # Application views (Warehouses, Inventory, Add/Edit pages)
├── styles/       # Global styling and SCSS utilities
└── utils/        # API configuration and helper functions
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (v18 or newer recommended)
- npm or yarn

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/alperzini/instock-client.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd instock-client
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Environment Configuration**
   Ensure you configure any required environment variables by duplicating `.example.env` into a `.env` file.
   ```bash
   cp .example.env .env
   ```
   *Note: Update `VITE_PORT` and `VITE_BACKEND_URL` in the `.env` file to match your backend setup.*

5. **Start the local development server**
   ```bash
   npm run dev
   ```

Open the local link (e.g., `http://localhost:5173` or as specified in your terminal) in your browser to view the project!