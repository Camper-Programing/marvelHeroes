const express = require('express');
const router = express.Router();

// import heroController
const heroController = require('../controller/heroController')
const {getHeroDataById, createHeroData, deleteHeroData} = require("../controller/heroController.js");

// define routes
router.get('/', heroController.getHeroData);
router.get('/:id', heroController.getHeroDataById);
router.post('/', heroController.createHeroData);
router.put('/:id', heroController.updateHeroData);
router.delete('/:id', heroController.deleteHeroData);

// export routes
module.exports = router;