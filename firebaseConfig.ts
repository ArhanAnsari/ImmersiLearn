// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration (replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyBZsFx4z8Z2KQP0TbuhJxVsu6tXedGtRGU",
    authDomain: "ar-enhanced-e-learningplatform.firebaseapp.com",
    projectId: "ar-enhanced-e-learningplatform",
    storageBucket: "ar-enhanced-e-learningplatform.firebasestorage.app",
    messagingSenderId: "727352092274",
    appId: "1:727352092274:web:93e78459c22f4d7863c4eb",
    measurementId: "G-MHKXRDV4Q6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const db = getFirestore(app);
export default app;