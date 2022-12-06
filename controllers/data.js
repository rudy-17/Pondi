const place = require("../models/place")
const Place= require("../models/place")



const ryu = new Place ({
    name: 'Ganja Ganja',
    day: 'day 1-2-3'
  })
exports.data=async (req,res)=>{
   res.send("hello world")
}

exports.allPlaces=async (req,res)=>{
    const all=await Place.find()
    res.send(all)
 }

 exports.insertPlace=async(req,res)=>{
    console.log(req.body)
   
    let newPlace=new Place(req.body)
    newPlace.save(function (error, document) {
        if (error) console.error(error)
        console.log(document)
      })

 }

exports.deletee=async (req,res)=>{
    console.log(req.query.id)
    try{
        const deleted = await Place.findOneAndDelete({ _id: req.query.id })
    }
    catch(err){
        console.log(err)
    }
    
    
}