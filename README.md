# Microservices App

This project demonstrates a simple microservices-based architecture using Node.js, Docker, and a minimal front-end. It showcases modular service separation, containerization, and orchestration using `docker-compose`.

## Features

- **Authentication Microservice**: A basic Node.js service for handling login/signup operations.
- **Frontend**: Static HTML frontend to interact with services.
- **Dockerized**: Each component runs in its own container.
- **Orchestration**: Uses `docker-compose` to run multiple containers together.

## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/en) (if you want to run locally without Docker)

### Run with Docker

```bash
# Build and start the containers
docker-compose up --build
```
### Run Locally (without Docker)

- Navigate to each microservice folder and install dependencies:
```bash
cd auth-service
npm install
node index.js
```
- Open frontend/index.html in your browser.


---

Let me know if you'd like to customize any section or add deployment instructions. ​:contentReference[oaicite:0]{index=0}​

