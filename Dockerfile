# ===============================
# 1. Build Stage
# ===============================
FROM node:18-alpine AS builder

# Set work directory
WORKDIR /app

# Copy package.json & lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend source code
COPY . .

# Build production assets
RUN npm run build


# ===============================
# 2. NGINX Runtime Stage
# ===============================
FROM nginx:stable-alpine

# Remove default NGINX static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html
# For React the directory might be /app/build
# COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom NGINX config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Cloud Run listens on port 8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
