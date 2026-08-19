import "dotenv/config";
import express, { NextFunction, Request, Response } from 'express';
import cors from "cors";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import socialAuthRouter from "./routes/socialAuthRoutes.js";
import accountRouter from "./routes/accountRoutes.js";
import postRouter from "./routes/postRoutes.js";

const app = express();

// Database connection
await connectDB();

// Middleware
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (_req: Request, res: Response) => {
    res.send('Server is Live!');
});

app.use("/api/auth/", authRouter); // now we have created the API for user registration and login (next we have to create authentication for social media accounts)
app.use('/api/oauth', socialAuthRouter);
app.use('/api/accounts', accountRouter);
app.use('/api/posts', postRouter);

// Global Error Handler

app.use((err: any, req: Request, res: Response, next: NextFunction )=>{
    console.error(err);
    res.status(500).send(err?.res.data?.message || err?.message)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});