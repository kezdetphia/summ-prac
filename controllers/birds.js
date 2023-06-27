const Bird = require('../models/bird');

const index = async(req,res)=>{
  const birdDetails = await Bird.find({})

  res.render('birds/index', {
    birds: birdDetails
  })
}





module.exports = {
  index,
}