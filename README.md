# GitHub Repositories Explorer

A simple React + TypeScript application that allows users to search for GitHub users and explore their public repositories.

## ✨ Features

- 🔍 Search for up to 5 GitHub users by username
- 📂 View public repositories for each user
- 🌐 URL-based search parameters (sharable/searchable URLs)
- 🧩 Accordion-style UI for browsing users and their repos
- 🎨 Responsive design with TailwindCSS + shadcn/ui
- ⚙️ Proper error handling and loading states
- ✅ Unit testing with Jest & Testing Library

## 🚀 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.dev/)
- [React Router](https://reactrouter.com/)
- [MSW](https://mswjs.io/) for mock APIs in tests
- [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/) for testing

## 📦 Installation
To run this project on your local machine:

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/github-repo-explorer.git
cd github-repo-explorer
```

### 2. Install Dependencies
From the root of the project, run:
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Run the test
```bash
npm run test
```

## 🧪 Testing
Unit and integration tests are located in the __tests__ folder. MSW is used to mock API requests to GitHub during tests, but there is still issue when using this mock fetch.

## 🌐 Live Demo
Hosted on GitHub Pages :
👉 [Live App URL](https://aryomuhammad1.github.io/github-repositories-explorer)

## 📁 Project Structure
src/
├── api/            # API functions for GitHub
├── components/     # UI and feature components
├── mocks/          # Mock handlers and data for MSW
├── types/          # TypeScript types/interfaces
├── __tests__/      # Test files
├── App.tsx         # Root component
└── main.tsx        # Entry point
