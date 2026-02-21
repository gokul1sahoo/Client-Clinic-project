# Sakthi Dental Clinic (MERN)

Beginner-friendly guide to run this project on your local machine.

## Project structure

- `client/` → React + Vite frontend
- `server/` → Node.js + Express + MongoDB backend

## Prerequisites

Install these first:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- `npm` (comes with Node.js)
- MongoDB connection (MongoDB Atlas recommended)

To check installation:

```bash
node -v
npm -v
```

## 1) Install dependencies

From project root (`CLIENT`):

```bash
npm install
npm install --prefix client
npm install --prefix server
```

## 2) Configure environment variables (Backend)

Create a file at `server/.env` and add:

```env
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB_NAME=sakthi_dental_clinic
PORT=5000
```

Example MongoDB URI format:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
```

## 3) (Optional) Configure frontend API URL

The frontend sends requests to `/api/contact`.

- For local full-stack run (`npm run dev:full` from root), you usually **do not need** to set anything.
- If frontend and backend run on different domains/ports in your setup, create `client/.env`:

```env
VITE_API_URL=http://localhost:5000
```

## 4) Run the project

From project root (`CLIENT`):

```bash
npm run dev:full
```

This starts both:

- Frontend (Vite)
- Backend (Express API)

Other useful commands:

```bash
npm run dev      # backend only (Render-safe)
npm run client   # only frontend
npm run server   # only backend
npm run build    # build frontend
npm run start    # start backend in production mode
```

## 5) Verify it works

- Open the frontend URL shown in terminal (usually `http://localhost:5173`)
- Test backend health:

```bash
http://localhost:5000/api/health
```

Expected response:

```json
{ "status": "ok" }
```

- Submit the contact form in the website and check MongoDB collection `contacts`.

## Common issues

- **`MONGODB_URI is not set`**
  - Make sure `server/.env` exists and has `MONGODB_URI`.
- **Cannot connect to MongoDB Atlas**
  - Verify username/password in URI.
  - In Atlas Network Access, allow your IP (or `0.0.0.0/0` temporarily for testing).
- **Port already in use**
  - Change `PORT` in `server/.env`.

## Tech stack

- Frontend: React, Vite, Axios, React Router
- Backend: Node.js, Express, Mongoose, Dotenv
- Database: MongoDB Atlas / MongoDB
