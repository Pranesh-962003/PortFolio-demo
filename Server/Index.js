const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const UserModel = require('./Models/projects')
const multer = require('multer')
const path = require('path')
const bodyParser = require('body-parser');
const ExpModel = require('./Models/Experience')



const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))



mongoose.connect('mongodb://127.0.0.1:27017/Projects').then(console.log('db connected')
)
.catch(err=>console.log(err))







const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'public/images')
    },
    filename:(req, file, cb)=>{
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})






app.post('/create',upload.single('file'),(req,res)=>{
  
  
  UserModel.create({title:req.body.title,description:req.body.description, link1:req.body.link1, link2:req.body.link2, image:req.file.filename})
  .then(result=>res.json(result))
  .catch(err=>console.log(err)
  )
  
  
  
  
  
  
  
})

app.get('/getProjects',(req,res)=>{
    UserModel.find({})
    .then(projects =>{res.json(projects)
        console.log(projects);
        
    })
    .catch(err=>console.log(err)
    )
})


app.get('/getProjects/:id',(req,res)=>{
    const id =req.params.id
    UserModel.findById(id)
    .then(result=>res.json(result))
    .catch(err=>console.log(err)
    )
})

app.put('/update/:id',(req,res)=>{
    const id = req.params.id
    console.log(id);
    UserModel.findByIdAndUpdate(id,{title:req.body.title, description:req.body.description, link1:req.body.link1, link2:req.body.link2})
    .then(user=>{res.json(user)
        console.log(user);
        
    })
    .catch(err=>console.log(err)
    )
})

/// -------------------experience route-------------------------------


app.post('/expCreate',upload.single('file'),(req,res)=>{
        const {comapny, role, des, start, end} = req.body
        ExpModel.create({comapny:comapny, role:role, des:des, start:start, end:end})
        .then(result=>{
            console.log(result);
            
        }).catch(err=>{console.log(err);
        })
        
   
})




app.get('/expUser',(req,res)=>{
    ExpModel.find({})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})



app.get('/getexp/:id',(req,res)=>{
    const id = req.params.id
    ExpModel.findById(id)
    .then(result=>res.json(result))
    .catch(err=>console.log(err)
    )
})


app.put('/expUpdatedata/:id',upload.single(),(req,res)=>{
    const id = req.params.id
    // const {comapny} = req.body
    // console.log(comapny);
    // console.log(id);
    
    ExpModel.findByIdAndUpdate(id,{comapny:req.body.comapny, role:req.body.role, des:req.body.des, start:req.body.start, end:req.body.end})
    .then(result=>res.json(result))
    .catch(err=>console.log(err)
    )
})


app.delete('/deleteexp/:id',(req,res)=>{

    const id = req.params.id

    ExpModel.findByIdAndDelete(id)
    .then(resp=>res.json(resp))
    .catch(err=>console.log(err)
    )
    
    // console.log(id);
    
})


app.get('/',(req,res)=>[
    res.send('hello')
])

app.listen(3004, ()=>{
    console.log('server started');
    
    
})