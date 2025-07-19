"use client";

import React, { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const Firebase = () => {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyD3_e-tiFClc6TrTcDXCIl9LWj9sse6vqI",
      authDomain: "msz-ai-ad398.firebaseapp.com",
      projectId: "msz-ai-ad398",
      storageBucket: "msz-ai-ad398.firebasestorage.app",
      messagingSenderId: "629062902106",
      appId: "1:629062902106:web:95edef2354d90ff9a69363",
      measurementId: "G-56YL77JSTQ",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Analytics only if supported
    const initAnalytics = async () => {
      if (await isSupported()) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const analytics = getAnalytics(app);
      }
    };

    initAnalytics();
  }, []);

  return <div></div>;
};

export default Firebase;
