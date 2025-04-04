# Task Manager - Frontend

Task Manager is a frontend application built with React and Vite. It allows users to authenticate, create, edit, delete, and view their personal tasks by interacting with a secure API using JWT tokens.

## Technologies
- React
- Vite
- TypeScript
- Context API
- Material UI
- JWT Authentication

## Getting Started

1. Clone the repository:
git clone <repo-url> cd task-manager-frontend

2. Install dependencies:
npm install

3. Create a `.env` file in the root with:
VITE_API_URL=http://localhost:8000

4. Run the development server:
npm run dev


# How It Works

- On login, the JWT token is stored in `localStorage`.
- The Context API provides global state for tasks.
- All API requests automatically include the `Authorization: Bearer <token>` header.
- Users can manage their tasks securely via the protected backend API.