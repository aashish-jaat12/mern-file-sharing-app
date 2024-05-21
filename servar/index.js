const express = require('express')
require('./db')
const Files = require ('./model/file')
const cors = require('cors');

const upload = require('./midalwhare')
const app = express();
app.use(express.json())
app.use(cors({ origin: "http://localhost:3000" }))



app.post('/uplode' ,upload.single('file') ,async(req , res)=>{
    const dataobj = {
        path: req.file.path,
        name: req.file.originalname,
    }   

    try { 
       const File = await Files.create(dataobj)
    //    console.log(File)
       res.status(200).json(`http://localhost:2000/File/${File._id}`)
    
        
    } catch (error) {
       
        console.log(error, "server errer")
        res.status(500).json({message : error.message})
    }


    app.get('/File/:fileid',async (req , res)=>{
         try {
         
        const file = await Files.findById(req.params.fileid)
            //  console.log(file)
        res.download(file.path, file.name)
           
    } catch (error) {
            res.status(500).json({message : error.message})
    }
    })


})

app.listen(2000)