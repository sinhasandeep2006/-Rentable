import express from "express";
import Item from "../models/item.js";

const router = express.Router();

// GET: fetch all items with optional filters
router.get("/", async (req, res) => {
  try {
    const { category, minPrice, maxPrice } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (minPrice || maxPrice)
      filter.pricePerDay = {
        ...(minPrice ? { $gte: Number(minPrice) } : {}),
        ...(maxPrice ? { $lte: Number(maxPrice) } : {}),
      };

    const items = await Item.find(filter);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST: add new item
router.post("/", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
