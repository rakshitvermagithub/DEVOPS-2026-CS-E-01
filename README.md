# DEVOPS-2026-CS-E-01

## Run with Docker Compose

The production-style Compose setup serves the React frontend through Nginx and
routes API requests and short-link redirects to the Node.js backend. MongoDB is
provided through the connection string in `backend/.env`, so use MongoDB Atlas
for a hosted deployment.

1. Create `backend/.env` with a reachable MongoDB URI and application settings:

   ```env
   NODE_ENV=production
   DATABASE_URI=mongodb+srv://<user>:<password>@<cluster>/<database>
   PORT=3500
   APP_URL=http://localhost/
   JWT_SECRET=<long-random-secret>
   ```

2. Copy `.env.example` to `.env` and set the public frontend URL:

   ```env
   FRONTEND_URL=http://localhost
   APP_URL=http://localhost/
   FRONTEND_PORT=80
   ```

3. Build and start the stack:

   ```bash
   docker compose up -d --build
   ```

4. Verify the backend through the frontend proxy:

   ```bash
   curl http://localhost/health
   ```

Open `http://localhost` in a browser. For a VPS deployment, point the domain
to the server, set `FRONTEND_URL` and `APP_URL` to the HTTPS domain, then place
TLS termination in front of the frontend container.

Stop the stack with:

```bash
docker compose down
```

## Deploy for free on Render

This repository includes a Render Blueprint in `render.yaml` that creates
separate backend and frontend services. It uses MongoDB Atlas for the database.

1. Push the repository to GitHub.
2. Create a MongoDB Atlas free-tier cluster and copy its connection string.
3. In Render, choose **New → Blueprint** and select this repository.
4. Review the two services and deploy them.
5. When prompted, set these secret environment variables for the backend:
   - `DATABASE_URI`: your MongoDB Atlas connection string
   - `JWT_SECRET`: a long random secret
6. Confirm the backend health check at:
   `https://devops-url-shortener-backend.onrender.com/health`
7. Open the frontend at:
   `https://devops-url-shortener-frontend.onrender.com`

If Render assigns different service URLs, update `FRONTEND_URL`, `APP_URL`,
and `VITE_API_URL` in the corresponding service settings, then redeploy the
frontend. `VITE_API_URL` is embedded during the frontend build.
