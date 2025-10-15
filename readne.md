# 🌦️ BearTech Weather App

A beautifully designed **full-stack weather dashboard** built with **React + TypeScript + Vite**, styled using **TailwindCSS**, and powered by the **WeatherAPI** (via a custom Express backend) and **ZenQuotes.io API**.

It features **real-time weather data**, **weekly forecasts**, **daily motivational quotes**, **local favourites**, and a **dynamic time-based background overlay**, all wrapped in a clean, modern UI.

---

## 🚀 Features

### 🌤️ Live Weather

- Fetches up-to-date weather data for any city using **WeatherAPI** through an Express proxy.
- Displays temperature, feels-like, and condition info.
- Fully responsive layout with glassmorphic cards.

### 🌇 Dynamic Time Overlay

- Background overlay automatically adjusts based on **time of day**:
  - ☀️ Morning → Warm golden tones
  - 🌤️ Afternoon → Bright, high-contrast light
  - 🌆 Evening → Soft orange gradients
  - 🌙 Night → Deep blue with low opacity overlay
- Achieved with `useEffect` and Tailwind dynamic class updates.

### 📅 Weekly Forecast

- Opens a modal with the 7-day forecast.
- Smooth transitions and clean typography.
- Forecast data handled via your custom `/api/weather` backend endpoint.

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
- Uses a CORS-friendly fetch wrapper with [AllOrigins](https://api.allorigins.win/).

### 🧠 Helpful Hints

- Small pop-up tooltip by the heart icon: “💾 Add this city to favourites”.
- Auto disappears after a few seconds for a polished UX.

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
| **Build Tools**      | Vite, ESLint, Prettier                                                            |

---

## ⚙️ Project Setup

### 🖥️ 1. Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/beartech-weather-app.git
cd beartech-weather-app
```
