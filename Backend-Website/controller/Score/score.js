const updateScore = (req,res,db) => {
    console.log(req.body.username)
      db.select('score').from('student')
      .where('username', '=', req.body.username)
      .update('score', req.body.score)
      .then(data => {
        console.log(data)
        res.json('Updated Score');
      })
  
  }

  module.exports = {
      updateScore: updateScore

  }