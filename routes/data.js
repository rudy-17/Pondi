const express = require('express');
const router = express.Router();




const {data,allPlaces,insertPlace,deletee} = require("../controllers/data");



//router.get('/places', data);
router.get('/places', allPlaces);
router.post("/insert",insertPlace)
router.get("/delete",deletee)



module.exports = router;