const express = require("express");
const app = express();

const Recipe = require("./models/RecipeModel");
const recipeSchema = require("./models/ValidationSchema");
const PORT = 5000;

const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/recipe-book")
  .then(() =>
    console.log(`Mongoose connected, successfully running on ${PORT}`)
  )
  .catch((err) => console.log("Error in connecting to DB!", err));

app.get("/recipes", async (req, res) => {
  try {
    const AllRecipes = await Recipe.find();
    res.json(AllRecipes);
  } catch (error) {
    console.log("Error in fetching all data!", error);
  }
});

app.post("/recipes/add", async (req, res) => {
  const { error } = recipeSchema.validate(req.body);
  if (error) {
    const errorMsg = error.details.map((m) => m.message);
    return res.status(400).json(errorMsg);
  }
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.json(newRecipe);
  } catch (err) {
    console.log("Error in adding item!", err);
  }
});

app.get("/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    res.json(recipe);
  } catch (err) {
    console.log("Error in fetching the particular item!", err);
  }
});

app.delete("/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Recipe.findByIdAndDelete(id);
    res.json({ message: "Recipe deleted successfully!" });
  } catch (err) {
    console.log("Error in deleting item!", err);
  }
});

app.put("/recipes/:id/update", async (req, res) => {
  const { error } = recipeSchema.validate(req.body);
  if (error) {
    const errorMsg = error.details.map((m) => m.message);
    return res.status(400).json(errorMsg);
  }
  try {
    const { id } = req.params;
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedRecipe);
  } catch (err) {
    console.log("Error in updating the item!", err);
  }
});

app.listen(PORT);
