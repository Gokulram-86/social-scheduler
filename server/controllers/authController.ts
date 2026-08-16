import { Request, Response } from "express";
import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//Function to generate token
const generateToken = (id: string) => {
    return jwt.sign({id}, process.env.JWT_SECRET || "fallback_secret", {expiresIn: '30d'});
}


// Register user
// Method - POST  path: /api/auth/register

export const registerUser = async (req: Request, res: Response): 
Promise<void> => {
    try {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({email}); // boolean for checking if the user already exists
        if (userExists) {
            res.status(400).json({message: "User already exists"}) // 400 - BAD REQUEST
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({name, email, password: hashedPassword})

        if(user){
           res.status(201).json({_id: user._id, name: user.name, email: user.email, token: generateToken(user._id.toString())}) 
        } else {
            res.status(400).json({message: "Invalid user data"})
        }
    } catch (error: any) {
        res.status(500).json({message: error?.message || "Server Error"})
    }
}

// Login User
// Method - POST  path: /api/auth/login

export const loginUser = async (req: Request, res: Response): 
Promise<void> => {
    try {
        const { email, password } = req.body; // getting email, pass from the user in login page
        const user = await User.findOne({email}); // finding the user
        
        if (user && (await bcrypt.compare(password, user.password))) { // if we get this user we check the entered password with the one that is registered
            res.json({_id: user._id, name: user.name, email: user.email, token: generateToken(user._id.toString())}) // 400 - BAD REQUEST
            return;
        } else {
            res.status(401).json({message: "Invalid email or password"});
        }
    } catch (error: any) {
        res.status(500).json({message: error?.message || "Server Error"})
    }
}

/* we created the controller for login and register.
    now using these controllers we have to create our API endpoint 
    (means, we have to create the routes).
*/