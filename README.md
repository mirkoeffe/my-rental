# myRental

myRental is a web application designed to help users find rental apartments in Berlin, Madrid, and Paris. The application provides a curated selection of the finest properties in these vibrant cities, making the apartment search effortless and efficient.

## Table of Contents

- [myRental](#myrental)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Backlogs](#backlogs)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Components](#components)
    - [Button](#button)
    - [Navbar](#navbar)
    - [Footer](#footer)
  - [Context](#context)
  - [Routes](#routes)
  - [Styling](#styling)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Browse rental properties in Berlin, Madrid, and Paris.
- Add new rental properties.
- Edit existing rental properties.
- Filter properties by city.
- View detailed information about each property.
- Responsive design.

## Backlogs

- Add advanced filtering options (price range, number of bedrooms, etc.).
- Implement a mobile-friendly layout.
- Navbar to be fixed
- Sidebar must be taken out of the Navbar

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/myRental.git
   cd myRental
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

- Use the navigation bar to explore different pages and functionalities.

## Components

### Button

A reusable button component used throughout the application.

### Navbar

The navigation bar component for the application.

### Footer

The footer component for the application.

## Context

The `ElementsContext` provides state management for rental properties. It includes functions to add and update properties in the state.

## Routes

The application routes are defined in `App.jsx` and include the following pages:

- Home
- Team
- About
- Rentals
- Filtered Elements by City
- Detailed Page for each property
- Edit Form for properties
- Add Form for new properties
- Not Found page for undefined routes

## Styling

The application uses `App.css` for global styles and `index.css` for base styles.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
