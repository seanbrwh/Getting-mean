module.exports = {
  homePageController: (req,res) => {
    res.render('index', {title: 'Express'})
  }
}

