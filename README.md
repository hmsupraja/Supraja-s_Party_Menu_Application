# Party Menu Application

A responsive React-based Party Menu Application that allows users to browse, search, filter, save, and manage party recipes. The application uses API-based authentication and local storage to provide a seamless user experience.

## Live Demo

**Live URL:** https://your-vercel-link.vercel.app

## GitHub Repository

**Repository:** https://github.com/hmsupraja/Supraja-s_Party_Menu_Application

---

## Features

- User Authentication using API
- Protected Home Route
- Browse Party Menu
- Search Recipes
- Filter by Category
- Filter by Diet (All / Veg / Non-Veg)
- View Recipe Details
- Save / Remove Recipes
- Saved Recipes Page
- Local Storage Persistence
- Logout Functionality
- 404 Not Found Page
- Responsive Design

---

## Tech Stack

- React 19
- React Router DOM
- Vite
- JavaScript (ES6)
- HTML5
- CSS3
- Local Storage
- Fetch API

---

## Folder Structure

```text
src/
│
├── components/
│   ├── FilterButtons.jsx
│   ├── Header.jsx
│   ├── ProtectedRoute.jsx
│   ├── RecipeCard.jsx
│   ├── SearchBar.jsx
│   └── VegToggle.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── RecipeDetails.jsx
│   ├── SavedRecipes.jsx
│   └── NotFound.jsx
│
├── data/
│   └── recipes.js
│
├── styles/
│   ├── App.css
│   ├── Card.css
│   ├── Details.css
│   ├── FilterButtons.css
│   ├── Header.css
│   ├── Home.css
│   ├── Login.css
│   ├── NotFound.css
│   ├── SavedRecipes.css
│   ├── SearchBar.css
│   └── VegToggle.css
│
├── App.jsx
└── main.jsx
```

---

## Test Credentials

**Email**

```
admin@example.com
```

**Password**

```
admin123
```

---

## Authentication API

**POST**

```
https://serverless-api-teal.vercel.app/api/auth/signin
```

---

## Local Storage Keys

| Key | Description |
|------|-------------|
| party_menu_token | Authentication Token |
| party_menu_user | Logged-in User |
| party_menu_saved_recipes | Saved Recipes |

---

## Installation

Clone the repository

```bash
git clone https://github.com/hmsupraja/Supraja-s_Party_Menu_Application.git
```

Go to the project directory

```bash
cd Supraja-s_Party_Menu_Application
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

---

## Application Pages

- Sign In
- Home/Menu
- Recipe Details
- Saved Recipes
- 404 Page

---

## Functionality

- User Login
- Protected Routes
- Search Recipes
- Category Filtering
- Diet Filtering
- Save Recipes
- Remove Recipes
- Local Storage Persistence
- Responsive Layout

---

## Author

**Hasthalamangali Supraja**

GitHub: https://github.com/hmsupraja

---

## License

This project was developed as part of a React Frontend Assessment for learning and educational purposes.
