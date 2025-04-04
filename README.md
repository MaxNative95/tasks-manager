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
git clone git@github.com:MaxNative95/tasks-manager.git
 cd task-manager-frontend

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

## Recommendations and Future Improvements

- Add user registration directly from the app.
- Validate forms and inputs on both frontend and backend.
- Implement better error handling and user feedback on the mobile app.
- Add loading spinners or skeletons for API calls.
- Improve token expiration handling and auto-logout.
- Use refresh tokens for better session management.
- Integrate push notifications for task reminders.
- Add due dates and priorities for tasks.
- Implement offline mode or optimistic UI for better UX.
- Improve UI/UX with design systems like Tailwind (web) or styled-components (mobile).
- Add unit and integration tests on both frontend and backend.
- Use environment-based configuration for production and development builds.
- Restrict CORS properly in the backend.
- Add user profile management (update email/password).
- Paginate or lazy-load task lists for scalability.
- Improve API error messages with standard error codes.
- Add Swagger/OpenAPI documentation to the FastAPI backend.
- Use role-based access control if supporting multiple user roles in the future.
- Deploy backend and frontend with CI/CD pipelines.
- Add analytics or logging tools for monitoring the app.
