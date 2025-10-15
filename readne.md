# 🌦️ BearTech Weather App

A designed weather dashboard built with **React + Vite**, styled using **TailwindCSS**, and powered by the **WeatherAPI** and **ZenQuotes APIs**.  
It features real-time weather data, weekly forecasts, daily inspirational quotes, and local favourites — all wrapped in a clean, modern UI.

---

## 🚀 Features

### 🌤️ Live Weather

- Fetches live weather data for any city using the **WeatherAPI**.
- Displays temperature, feels-like data, and current conditions.
- Automatically refreshes data at set intervals.

### 📅 Weekly Forecast

- Displays a modal with a 7-day weather forecast.
- Clean, responsive, and accessible design.
- Smooth transition animations powered by TailwindCSS.

### ❤️ Favourites

- Save your favourite cities to **localStorage**.
- Persistent between refreshes.
- Remove cities directly inside the favourites modal.

### 🍔 Burger Menu Modal

- Opens a sleek glass-style overlay showing your favourited cities.
- Each entry has a “remove” button for easy management.
- Closes via the ✕ icon or clicking outside.

### 💬 Daily Quote

- Fetches daily inspirational quotes from the **ZenQuotes.io API**.
- Displays a new quote each day on the homepage.

---

## 🧰 Tech Stack

| Layer                | Technology                            |
| -------------------- | ------------------------------------- |
| **Frontend**         | React + TypeScript + Vite             |
| **Styling**          | TailwindCSS                           |
| **State Management** | React Hooks (`useState`, `useEffect`) |
| **Backend**          | Node.js + Express                     |
| **APIs**             | WeatherAPI & ZenQuotes.io             |
| **Storage**          | LocalStorage (for favourites)         |

---

## ⚙️ Installation & Setup

### 🖥️ 1. Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/beartech-weather-app.git
cd beartech-weather-app
```
