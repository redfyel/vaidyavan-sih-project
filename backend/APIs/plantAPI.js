let exp = require("express");
const {Db} = require('mongodb')
const plantApp = exp.Router();
const tokenVerify = require('../middlewares/tokenVerify.js')
const expressAsyncHandler = require('express-async-handler')

require('dotenv').config()

//add body parser middleware
plantApp.use(exp.json());

plantApp.get('/plants', expressAsyncHandler(async (req, res) => {
    try {
      const plantsCollection = req.app.get('plantsCollection');
      const plants = await plantsCollection.find().toArray();
      res.json(plants);
    } catch (error) {
      res.status(500).json({ message: "An error occurred while fetching plants", error: error.message });
    }
  }));

module.exports = plantApp;
