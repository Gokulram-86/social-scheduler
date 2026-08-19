/*  we have to create the API for creating the post where
    we can generate the post using AI. and after that we publish or schedule this post.
    
    To create the next API, first we have to create the models.
    Using that we can store the data in the database.
    
    So we will create the post modal where we will add the post data and 
    we will also create the generation model where we will add the generated content data and 
    store the data in the database.
*/
import mongoose from "mongoose";

const generationSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.ObjectId, ref: "User", required: true },
    prompt: { type: String, required: true },
    content: { type: String, required: true },
    mediaUrl: { type: String },
    mediaType: { type: String, enum: ["image", "video"] },
    tone: { type: String },

}, {timestamps: true});

export const Generation = mongoose.model("Generation", generationSchema);
