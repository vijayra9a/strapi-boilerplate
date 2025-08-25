# Flipkart Stories CMS (Strapi)

This repository contains the Strapi v5 application that serves as the content management system for the Flipkart Stories newsroom. The project is configured to run in a containerized environment using Docker for consistent and easy setup.

-----

## Prerequisites

Before you begin, ensure you have the following software installed on your machine:

  * **Docker & Docker Compose:** This is essential for running the application. You can download it from the [official Docker website](https://www.docker.com/products/docker-desktop/).
  * **Node.js:** (v18 or newer) While the application runs inside Docker, having Node.js locally is recommended for running utility scripts or for your IDE's integrations.
  * **Git:** For cloning the repository.

-----

## Getting Started

Follow these steps to get your local development environment running.

### 1\. Clone the Repository

Clone this project to your local machine.

```bash
git clone <your-repository-url>
cd <your-repository-name>
```

### 2\. Create the Environment File

The application requires an environment file for configuration and secrets. Copy the example file to create your own local version.

```bash
cp env.example .env
```

### 3\. Update Your Environment Variables

Open the newly created `.env` file in your code editor. You must replace the placeholder values for `JWT_SECRET` and `ADMIN_JWT_SECRET` with long, random strings.

A simple way to generate a strong secret from your terminal is:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 4\. Build and Start the Application

Run the following command from the project's root directory. This will build the Docker image and start the Strapi container.

```bash
docker-compose up --build
```

The first time you run this, it will take several minutes to download the base image and install all the dependencies. Subsequent starts will be much faster.

### 5\. Access the Strapi Admin Panel

Once the container is running, you will see logs from the Strapi server in your terminal. You can now access the Strapi admin panel in your browser at:

**`http://localhost:1337/admin`**

You will be prompted to create your first administrator account. After that, you are ready to start building your content models\!

-----

## Common Commands

Here are some useful Docker Compose commands for managing your application:

  * **Start the application (without rebuilding):**

    ```bash
    docker-compose up
    ```

  * **Stop the application:**

    ```bash
    docker-compose down
    ```

  * **Stop and remove data volumes (for a clean reset):**

    ```bash
    docker-compose down --volumes
    ```

  * **View live logs:**

    ```bash
    docker-compose logs -f strapi
    ```