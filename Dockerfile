# Dockerfile
FROM node:18-alpine
# This installs a dependency required for Strapi's image processing
RUN apk add --no-cache vips-dev

# Set the working directory inside the container
WORKDIR /opt/app

# Copy package files and install dependencies
COPY ./package.json ./package-lock.json* ./
RUN npm install

# Copy the rest of your Strapi application code
COPY . .

# Build the admin panel
RUN npm run build

# Expose the port Strapi runs on
EXPOSE 1337

# The default command to run when the container starts
CMD ["npm", "run", "start"]