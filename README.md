# PH-Assignment-12 Education Class Management System With Dashboarb JWT, Firebase Authentication & MongoDB CRUD

# https://edu-management-system.surge.sh/

## PH-Assignment-12 Education Class Management System With Dashboard 
- EduManagement is a comprehensive Class Management System designed to streamline the educational experience for both teachers and students. It offers a user-friendly platform to manage classes, assignments, and student progress. Teachers can create and organize courses, track student performance, and provide feedback, while students can easily enroll in classes, access learning materials, and monitor deadlines. With robust security features, real-time notifications, and responsive design, EduManagement ensures seamless learning and teaching across all devices.

## Purpose of the  Education Class Management System of the Website Project

**1. Streamlining Class Management:** Simplify the process of creating, scheduling, and managing classes for teachers, while allowing students to browse and enroll in their preferred courses effortlessly.

**2. Enhancing Communication:** Foster better communication between students and teachers through real-time updates, notifications, and feedback mechanisms.

**3. Tracking Progress:** Equip both teachers and students with tools to monitor performance, submission statuses, and deadlines through a user-friendly dashboard.

**4. Efficient Assignment Management and Organization:** MongoDB's CRUD functionality (Create, Read, Update, Delete) allows for efficiently managing assignments, grades, and student progress. Teachers can easily create new assignments, review student submissions, update grades, and remove irrelevant records, while students can view their assigned tasks and track their completion status.

**5. Secure Data Management:** Leverage robust authentication (e.g., Firebase) and secure storage (e.g., MongoDB) to protect user data and maintain the integrity of the system.


## Key Features of Edu Class Management Website
- User Registration and Authentication: Secure user authentication system using Firebase to allow students and teachers to register and log in with email/password or social media.

1. Role-Based Dashboard: Separate dashboards for teachers and students with tailored functionalities to suit their needs.

2. Class Creation and Enrollment: Teachers can create and manage classes, while students can browse, enroll in, and track their classes.

3. Assignment Management: Teachers can upload, update, and grade assignments, while students can submit their work and receive feedback.

4. Real-Time Progress Tracking: Both students and teachers can track assignment submissions, grades, and deadlines in real time.

5. Responsive Design: A fully responsive interface that works seamlessly on desktops, tablets, and mobile devices for better accessibility.

7. Secure Data Storage: Data is securely stored in MongoDB, with robust authorization using JWT tokens for safe user sessions.

8. Popular Classes Section: Highlight trending or high-enrollment classes to showcase popular courses and encourage participation.

9. Multi-Device Access: Users can access the platform from multiple devices, ensuring their data remains synced and available everywhere.

10. A secure payment sytem with react

## This  Project Use the below NPM Packages
 - React-Datepicker
 - Animate.css
 - Hot Toast
 - Swiper
 - React Icons
 - firebase
 - React-Router
 - headlessui/react
 - react-stripe-
 - axios
 - date-fns
 - firebase 
 - prop-types
 - react-helmet-async
 - react-hook-form
 - react-hot-toast
 - eact-icons
 - react-spinners
 - Recharts
 - weetalert2


Here’s a complete and well-structured README file for your **EduManagement** project, including a detailed installation guide and configuration steps.  

---

# 📚 EduManagement - Education Class Management System  

🚀 **Live Demo:** [EduManagement System](https://edu-management-system.surge.sh/)  

## 📖 Overview  

EduManagement is a comprehensive **Class Management System** designed to streamline the educational experience for both teachers and students. It offers a **user-friendly platform** to manage classes, assignments, and student progress.  

## 🎯 Key Features  

✅ **User Authentication** – Firebase authentication with JWT authorization.  
✅ **Role-Based Dashboard** – Separate views for teachers and students.  
✅ **Class Management** – Teachers can create and manage classes, students can enroll and track progress.  
✅ **Assignment System** – Teachers upload and grade assignments, students submit their work.  
✅ **Real-Time Progress Tracking** – Monitor assignment submissions, grades, and deadlines.  
✅ **Secure Payment System** – Integrated Stripe payment processing.  
✅ **Responsive Design** – Works seamlessly across all devices.  
✅ **Secure Data Storage** – MongoDB for efficient CRUD operations.  
✅ **Popular Classes Section** – Showcases trending courses.  

---

## 📂 Table of Contents  

- [Installation](#installation)  
- [Configuration](#configuration)  
- [Usage](#usage)  
- [Dependencies](#dependencies)  
- [API Environment Variables](#api-environment-variables)  
- [Troubleshooting](#troubleshooting)  
- [License](#license)  

---

## 🛠️ Installation  

### Prerequisites  
Ensure you have the following installed on your system:  

- **Node.js** (Latest LTS) → [Download](https://nodejs.org/)  
- **npm** (or **yarn**) → Installed with Node.js  
- **Git** → [Download](https://git-scm.com/)  
- **Vite** (bundler for React)  

### Step 1: Clone the Repository  

```sh
git clone https://github.com/your-repo-link.git
cd your-repo-folder
```

### Step 2: Install Dependencies  

Using **npm**:  

```sh
npm install
```

or using **yarn**:  

```sh
yarn install
```

### Step 3: Set Up Environment Variables  

Create a `.env` file in the **root** directory and add the following variables:  

```plaintext
VITE_apiKey=AIzaSyB-on8yYXngoVTAK6yL3Nh1ylaXvKm_oCw
VITE_authDomain=edu-management-cd46f.firebaseapp.com
VITE_projectId=edu-management-cd46f
VITE_storageBucket=edu-management-cd46f.firebasestorage.app
VITE_messagingSenderId=536667935337
VITE_appId=1:536667935337:web:6da312bca4bb0b987a08f8
VITE_IMGBB_API_KEY=95f76c25375ae18085f63e8f1e1d1e22
VITE_STRIPE_PUBLIC_KEY=pk_test_51QlviYLKgGyCDX51IDllcI8IRWwJZr3XCQdnMwypnpVoacvEBkVaHcglI6ig0Bjz0QhK7bQOXiWHqGu9p5rkvMgT0096uUMmjF
VITE_API_URL=https://edu-server-side.vercel.app
```

**⚠️ Important:** Never expose sensitive keys in public repositories. Use `.gitignore` to exclude the `.env` file.  

### Step 4: Start the Development Server  

```sh
npm run dev
```

The application will be available at **http://localhost:5173/**.  

---

## 🚀 Usage  

### Running the App  

To start the project, run:  

```sh
npm run dev
```

To build the project for production:  

```sh
npm run build
```

To preview the production build:  

```sh
npm run preview
```

### Running the Backend  

Ensure your backend is running on **https://edu-server-side.vercel.app** or locally:  

```sh
cd backend
npm install
npm start
```

---

## 📦 Dependencies  

This project uses the following **npm packages**:  

- **React** – Frontend framework  
- **Vite** – Lightning-fast development bundler  
- **Firebase** – Authentication and real-time database  
- **MongoDB** – Database for storing user and class data  
- **React Router** – Navigation and routing  
- **React-Datepicker** – Date selection UI  
- **React Icons** – Icons for UI components  
- **Axios** – HTTP requests to backend API  
- **Headless UI** – Accessible UI components  
- **React Stripe** – Payment integration  
- **Recharts** – Data visualization  
- **SweetAlert2** – Beautiful alert popups  
- **Prop-types** – Type validation for React props  
- **React-Helmet-Async** – SEO optimization  
- **React Hook Form** – Form validation  
- **React Hot Toast** – Notification system  
- **React Spinners** – Loading animations  

Install all dependencies with:  

```sh
npm install
```

---

## 🌍 API Environment Variables  

These are required for backend API communication and third-party integrations.  

| Variable Name               | Description                             |
|-----------------------------|-----------------------------------------|
| `VITE_apiKey`               | Firebase API Key                       |
| `VITE_authDomain`           | Firebase Auth Domain                   |
| `VITE_projectId`            | Firebase Project ID                    |
| `VITE_storageBucket`        | Firebase Storage Bucket                |
| `VITE_messagingSenderId`    | Firebase Messaging Sender ID           |
| `VITE_appId`                | Firebase App ID                        |
| `VITE_IMGBB_API_KEY`        | Image Upload API Key (IMGBB)           |
| `VITE_STRIPE_PUBLIC_KEY`    | Stripe Payment Public Key              |
| `VITE_API_URL`              | Backend API Base URL                   |

---

## 🛠️ Troubleshooting  

### 1. **Port Already in Use Error**  

If you see `Error: Port 5173 is already in use`, stop the process using:  

```sh
npx kill-port 5173
```

Or specify another port in `package.json`:  

```json
"scripts": {
  "dev": "vite --port 3000"
}
```

### 2. **Backend Not Responding**  

Ensure the backend is running on **https://edu-server-side.vercel.app**. If running locally, start the server:  

```sh
cd backend
npm start
```

### 3. **Firebase Authentication Issues**  

- Verify **API keys** are correctly set in `.env`.  
- Check **Firebase console** for authentication setup.  
- Ensure **Google Sign-In and Email/Password authentication** are enabled.  

---

## 📜 License  

This project is licensed under the **MIT License**.  

---

This README provides everything needed to set up, run, and troubleshoot your project. Let me know if you need any modifications! 🚀




