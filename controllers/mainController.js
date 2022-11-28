const path = require('path')

const mainController = {
    index:  (req,res)=>{
      res.sendFile(path.join(_dirname,'../views/index.html'));  
    }
}
