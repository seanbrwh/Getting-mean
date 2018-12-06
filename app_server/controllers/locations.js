module.exports = {
  homeList:(req,res,next)=>{
    res.render('locations-list', {title: 'Home'})
  },
  locationInfo:(req,res,next)=>{
    res.render('location-info', {title: 'Location Info'})
  },
  addReview:(req,res,next)=>{
    res.render('location-review-form', {title:'Add Review'})
  }
}