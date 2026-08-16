import mongoose from "mongoose";

// defining all the properties that we need to add in the account details
// let's add user property first
const accountSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.ObjectId, ref: "User", required: true },
    platform: {type: String, enum: ["twitter", "linkedin", "facebook", "instagram", "facebook_page", "linkedin_page", "instagram_business"], required: true},
    handle: { type: String, required: true },
    zernioAccountId: { type: String },
    accessToken: { type: String },
    refreshToken: { type: String },
    tokenExpiresAt: { type: Date },
    status: { type: String, enum: ["connected", "disconnected"], default: "connected" },
    avatarUrl: { type: String },  
}, {timestamps: true});

export const Account = mongoose.model("Account", accountSchema);
// after creatign this model we can create our controller socialAuthController.ts
