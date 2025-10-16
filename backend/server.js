import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

console.log("✅ WEATHER_API_KEY Loaded:", !!process.env.WEATHER_API_KEY);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/api/weather", async (req, res) => {
  const city = req.query.city || "London";
  const days = req.query.days || 7;

  try {
    const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Missing API key" });
    }

    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}`
    );

    const data = await response.json();

    if (data.error) {
      return res.status(400).json({ error: data.error.message });
    }

    res.json(data);
  } catch (err) {
    console.error("Error fetching weather:", err);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
