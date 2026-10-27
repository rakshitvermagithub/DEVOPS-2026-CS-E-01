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
