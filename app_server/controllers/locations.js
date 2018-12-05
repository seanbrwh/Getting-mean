module.exports = {
  homeList:(req,res,next)=>{
    res.render('index', {title: 'Home'})
  },
  locationInfo:(req,res,next)=>{
    res.render('index', {title: 'Location Info'})
  },
  addReview:(req,res,next)=>{
    res.render('index', {title:'Add Review'})
  }
}