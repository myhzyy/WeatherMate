# 🌦️ BearTech Weather App

A **full-stack weather dashboard** built with **React + TypeScript**, styled using **TailwindCSS**, and powered by the **WeatherAPI** (via a custom Express backend) and **ZenQuotes.io API**.

It features **real-time weather data**, **weekly forecasts**, **daily motivational quotes**, **local favourites**, and a **dynamic time-based background overlay**, all wrapped in a clean, modern UI.

---

## 🚀 Features

### 🌤️ Live Weather

- Fetches up-to-date weather data for any city using **WeatherAPI** through an Express proxy.
- Displays temperature, feels-like, and condition info.
- Fully responsive layout with glassmorphic cards.

### 📅 Weekly Forecast

- Opens a modal with the 7 day/14 day forecast.
- Smooth transitions and clean typography.
- Forecast data handled via your custom `/api/weather` backend endpoint.

### 🌇 Dynamic Time Overlay

- Background overlay automatically adjusts based on **time of day**:
  - ☀️ Morning / After → Warm golden tones
  - 🌆 Evening / Night → Soft orange gradients
- Achieved with `useEffect` and Tailwind dynamic class updates.

### ❤️ Favourites

- Save your favourite cities to **localStorage**.
- Persistent between refreshes.
- Easily remove cities inside the favourites modal.

### 🍔 Burger Menu Modal

- Sleek glass-style overlay showing your favourited cities.
- Each entry has a “remove” button.
- Closes via ✕ icon or clicking outside.

### 💬 Daily Inspirational Quote

- Fetches random daily quotes from **ZenQuotes.io**.
- Displays a new motivational quote each day on the homepage.

### 🧠 Helpful Hints

- Small pop-up tooltip by the heart icon: “💾 Add this city to favourites”.

---

## 🧰 Tech Stack

| Layer                | Technology                                                                        |
| -------------------- | --------------------------------------------------------------------------------- |
| **Frontend**         | React + TypeScript + Vite                                                         |
| **Styling**          | TailwindCSS                                                                       |
| **State Management** | React Hooks (`useState`, `useEffect`, Context for weather)                        |
| **Backend**          | Node.js + Express                                                                 |
| **APIs**             | [WeatherAPI](https://www.weatherapi.com/) & [ZenQuotes.io](https://zenquotes.io/) |
| **Storage**          | LocalStorage (for favourites)                                                     |
| **Build Tools**      | Vite                                                                              |

---

## ⚙️ Project Setup

## Pre setup notes

- There are two npm install steps - one for the backend (/Backend) and one for the frontend (/Frontend)

- Your API Key tays safely hidden in the backend .env file

- Your frontend will automatically proxy API requests like /api/weather?city=London to your Express backend — so you don’t need to expose your API key in the frontend.

-

### 🖥️ 1. Clone the repository

```bash
git clone https://github.com/myhzyy/WeatherMate
cd WeatherMate
```

### 🖥️ 2. Set up Backend

- cd backend
- npm install
- touch .env
- open .env

### 🖥️ 3. Set up enviroment variable

- Get your API key from WeatherAPI.com
- Sign up for a free account and copy your personal key
- Open the file and add your API Key + PORT=5050

**EXAMPLE .ENV FILE STRUCTURE**

WEATHER_API_KEY=your_api_key
PORT=5050

### 🖥️ 4. Run the Backend Server

- npm start
- this will start your express server at
- http://localhost:5050
- You should see '✅ WEATHER_API_KEY Loaded: true'
- and 'Server running on http://localhost:5050'

### 🖥️ 5. Set up and run the Frontend (Vite + React)

- In a seperate terminal, from the root directory, run
- cd Frontend
- npm install
- npm run dev
- this will start the frontend on
- http://localhost:5173

### Last notes

- I purposefully left in the todo.md, just incase you wanted to see my thought process going through this.

- Thanks for checking this out! This project was a lot of fun to build. I actually had to stop myself from adding more features 😅 (I love front end!)

- I really wanted to prove myself by using your exact tech stack (React, TypeScript, and Tailwind).

- Appreciate you taking the time to explore it!
