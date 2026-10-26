import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    role: {
      type: String,
      enum: ["farmer", "buyer", "admin"],
      default: "farmer",
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    location: {
      state: {
        type: String,
        trim: true,
        default: "",
      },

      district: {
        type: String,
        trim: true,
        default: "",
      },

      village: {
        type: String,
        trim: true,
        default: "",
      },
    },

    farmProfile: {
      landArea: {
        type: Number,
        min: 0,
        default: 0,
      },

      soilType: {
        type: String,
        trim: true,
        default: "",
      },

      irrigationType: {
        type: String,
        trim: true,
        default: "",
      },
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    lastLoginAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;