const express = require("express");
const { FoodModel } = require("../models/food.model");

const foodRouter = express.Router();

foodRouter.get("/", async (req, res) => {
  try {
    const user_id = req.query.user_id;
    let foods = [];
    if (user_id) {
      foods = await FoodModel.find({ userId: user_id });
    } else {
      foods = await FoodModel.find();
    }
    res.send(foods);
  } catch (err) {
    console.log(err);
    console.log({ message: "Something went wrong", error: err.message });
  }
});

foodRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    payload.forEach(async (item) => {
      const new_note = new FoodModel(item);
      await new_note.save();
    });
    res.send({ message: "Food Added" });
  } catch (err) {
    console.log(err);
    res.send({ message: "Something went wrong" });
  }
});

module.exports = { foodRouter };
