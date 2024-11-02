# Management Sheet

My internship work - Simple Import Export Management System

## Overview

This project aims to create a simple import and export management system using modern web technologies. The system facilitates the management of import and export operations, including tracking shipments, managing inventory, and handling customer information.

## How do you know that this Project is created by me??

Visit This - [Proof](https://importexport.udhyog4.co.in/api)

## Features

- **Deployment**: Easily deployable with configurations for HTTPS, Nginx, and PM2.
- **Backend**: Built with Node.js, Express, and Prisma for database management.
- **Frontend**: Developed using React and Recoil for state management.
- **WebSocket**: Real-time updates and notifications.
- **SSL Certificates**: Secure communication with SSL.
- **MySQL**: Robust database handling.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KishanVyas308/management-sheet.git
   cd management-sheet
   ```

2. **Install dependencies:**
   ```bash
   # For backend
   cd Backend
   npm install
   docker run -d --name mysql-container -e MYSQL_ROOT_PASSWORD=rootpassword -e MYSQL_USER=myuser -e MYSQL_PASSWORD=mypassword -e MYSQL_DATABASE=mydatabase -p 3306:3306 mysql:latest


   # For frontend
   cd Frontend
   npm install
   ```

3. **Environment setup:**
   - Copy the `.env.example` to `.env` and fill in the required environment variables.

4. **Database setup:**
   ```bash
   npx prisma db push
   npx prisma generate
   ```

5. **Run the development server:**
   ```bash
   # For backend
   tsc -b
   node dist/index.js

   # For frontend
   npm run dev
   ```

## Usage

1. **Access the application:**
   Open your browser and navigate to `http://localhost:5173` for the frontend and `http://localhost:3000` for the backend API.

2. **API Documentation:**
   Visit the [API Section](https://importexport.udhyog4.co.in/api).


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
