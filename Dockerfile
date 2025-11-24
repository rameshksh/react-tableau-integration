# =======================================
# 1) BUILD STAGE
# =======================================
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build React for production
RUN npm run build


# =======================================
# 2) NGINX RUNTIME STAGE
# =======================================
FROM nginx:1.21-alpine

# Cloud Run requires PORT=8080
ENV PORT=8080

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy optimized config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy React build output
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose Cloud Run port
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]




