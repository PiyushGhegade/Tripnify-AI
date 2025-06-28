# ✈️ AI-Powered Full-Stack Trip Planner

> _A modern travel planner that helps you create intelligent, personalized travel itineraries using AI, real-time place data, and a beautiful, responsive UI._

---

## 👨‍💻 Author

**Developed by: [Piyush Ghegade](https://github.com/PiyushGhegade)**  
💬 _Feel free to connect, suggest features, report bugs, or collaborate!_  

---

## 🌐 Live Preview

🔗 **[👉 Try the Live App](https://ai-trip-planner-barika.vercel.app/)**  
_Deployed via Vercel. Optimized for mobile and desktop._

---

## 🚀 Features

- 🤖 **AI-Powered Itineraries**  
  Generate personalized travel plans using Google Generative AI based on location, dates, and preferences.

- 🏨 **Hotel Suggestions with Images**  
  Find top-rated hotels using Google Places API, with real-time data including photos, reviews, and maps.

- 📍 **Dynamic Destination Data**  
  Access rich metadata for places including attractions, ticket prices, and travel time.

- 🔐 **Google OAuth Authentication**  
  Users can securely log in using their Google accounts.

- 💾 **Persistent User Data**  
  Trips and preferences are stored in Firebase Firestore for easy retrieval and update.

- 🎨 **Beautiful & Responsive UI**  
  Clean, accessible design built with TailwindCSS that works across devices.

- 🧠 **Smart Suggestions**  
  Includes hints for restaurants, local activities, and offbeat locations.

- 🕓 **Itinerary Timeline**  
  View structured day-by-day plans with time slots and estimated durations.

---

## 💻 Tech Stack

### Frontend
- ⚛️ **React** – For building dynamic UI components  
- 🎨 **TailwindCSS** – Utility-first framework for responsive design  
- 🔁 **Axios** – For handling async API calls

### Backend & Services
- 🧠 **Google Generative AI API** – For personalized, intelligent recommendations  
- 🗺️ **Google Places API** – Real-time data for places, landmarks, hotels, and photos  
- 🔥 **Firebase Firestore** – Cloud-hosted NoSQL database  
- 🔐 **Firebase Authentication** – Google Sign-In for secure access  
- 🌍 **Vercel** – Hosting and deployment platform  

---

## 🧭 App Overview

This app allows travelers to enter their trip details and receive AI-generated itineraries complete with suggestions for places to visit, stay, and explore. The data is fetched in real-time, ensuring relevance and accuracy. Each itinerary is saved per user, enabling them to return anytime and modify or reuse plans.

---

## 🔮 Future Improvements

- 🗺️ **Interactive Google Map View** – Visualize all trip stops on a dynamic map  
- 📆 **Sync with Google Calendar** – Add your trip plan directly to your calendar  
- 📄 **Export Itinerary as PDF** – Share or print your travel plans easily  
- 🧳 **Packing Checklist Generator** – Auto-generate items to pack based on location/weather  
- 👨‍👩‍👧‍👦 **Trip Sharing Feature** – Share trips with family, friends, or groups  
- 🔔 **Real-Time Weather Forecasts** – Display weather during the planned travel dates  
- 🌐 **Multi-language Support (i18n)** – For non-English speakers  
- 📱 **Progressive Web App (PWA)** – Offline mode and mobile install support

---

## 🛠️ Prerequisites

Before running locally, ensure the following:

- [Node.js](https://nodejs.org/) & npm installed
- A [Firebase Project](https://firebase.google.com/):  
  - Enable **Firestore** and **Google Authentication**
  - Copy your Firebase config keys
- API Keys from [Google Cloud Console](https://console.cloud.google.com/) for:
  - **Google Generative AI**
  - **Google Places API**

---

## 📁 Folder Structure

