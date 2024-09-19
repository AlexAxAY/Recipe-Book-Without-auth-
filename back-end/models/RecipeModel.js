const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, enum: ["Veg", "Non-veg"], required: true },
    createdBy: { type: String, required: true },
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;
