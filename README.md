
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
git clone https://github.com/Rokon-Khan/ph-assignment-12.git
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

Create a `.env.local` file in the **root** directory and add the following variables:  

```plaintext
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
VITE_IMGBB_API_KEY=your_imgbb_api_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
VITE_API_URL=your_backend_api_url
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




