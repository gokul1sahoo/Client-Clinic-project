## MongoDB Atlas Setup (Production)

1. Create a MongoDB Atlas cluster.
2. In Atlas, create a database user with read/write permissions.
3. In **Network Access**, allow your deployment platform IPs (or `0.0.0.0/0` temporarily).
4. Copy the Atlas connection string and set backend environment variables:

- `MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/?retryWrites=true&w=majority&appName=sakthi-dental`
- `MONGODB_DB_NAME=sakthi_dental_clinic`
- `PORT=5000` (or platform-provided port)

## Local test with Atlas

1. Create `server/.env` using `server/.env.example`.
2. Fill in real Atlas credentials.
3. Run from root:

- `npm run dev`

If backend starts successfully, contact form submissions are stored in Atlas collection `contacts`.

## Deploy notes

- Set the same env vars in your hosting provider for the backend service.
- Ensure frontend API points to deployed backend URL by setting `VITE_API_URL` in frontend environment (only needed when not using same-domain proxy).
