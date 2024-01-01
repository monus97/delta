const item = require("../model/itemModel");

const addItem = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(203).json({
        message: "Please fill all fields",
      });
    }
    const checkedItem = await item.findOne({ title: req.body.title });
    if (checkedItem) {
      return res.status(409).json({ message: "title already exits" });
    }
    const newItem = new item({
      title,
      description,
    });

    const savedItem = await newItem.save();
    res.status(201).json({
      status: "success",
      data: savedItem,
    });
  } catch (error) {
    res.status(400).json({ 
      message: error.message
     });
  }
};

const getAllItems = async (req, res) => {
  try {
    const allData = await item.find({});
    if (allData.length > 0) {
      res.status(200).json({
        status: "success",
        data: allData,
      });
    } else {
      res.status(404).json({
        message: "No Data Found!",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { addItem, getAllItems };
