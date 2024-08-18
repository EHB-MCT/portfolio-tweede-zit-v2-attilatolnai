# Student Forum API

## Overview

This project is a forum application designed to allow students to ask questions and receive answers from other students and teachers. The API is written in JavaScript and utilizes Docker for containerization.

## Project Setup

To get started with this project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <https://github.com/EHB-MCT/portfolio-tweede-zit-v2-attilatolnai.git>
   cd <https://github.com/EHB-MCT/portfolio-tweede-zit-v2-attilatolnai.git>

2. **Configure Environment Variables:**:
Open the .env file and update it with the appropriate values for your environment.

3. **Build and Start the Containers:**:
Run the following command to build the Docker images and start the containers:

docker-compose up --build

This command will set up and start all necessary services defined in the docker-compose.yml file.

## Project Structure

Dockerfile: Defines the Docker image for the API service.

docker-compose.yml: Contains configuration for Docker Compose, including services, networks, and volumes.

src/: Contains the source code for the API.

## Usage

Once the containers are up and running, the API will be available at http://localhost:3000. You can use this URL to interact with the forum endpoints.

## Troubleshooting

If you encounter any issues while running the project, consider the following:

Ensure Docker and Docker Compose are installed and up to date.

Verify that the .env file contains the correct environment variables.

Check the Docker container logs for any errors or warnings.

## Contact

If you have any questions or need further assistance, please contact:

    Name: Attila Tolnai
    Email: attila.tolnai@student.ehb.be
    GitHub: https://github.com/attilatolnai

Feel free to open an issue on the GitHub repository if you need help or have any feedback.