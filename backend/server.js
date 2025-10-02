import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Gameify-the-Gym backend is running!");
});

// Example API route
app.get("/api/workouts", (req, res) => {
    res.json([{ id: 1, name: "Push-ups", reps: 20 }]);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
