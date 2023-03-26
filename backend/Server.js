const express= require('express');
 const mongoose = require('mongoose');

 require('dotenv').config();
 const cors= require('cors');
 const routes = require('./routes/ToDoRoute');
 const app = express();
 const PORT = process.env.PORT || 5000;

//  mongoose.connect(process.env.MONGODB_URL)
//  .then(()=>console.log('connected to mongodb'))
//  .catch((err)=>console.log(err));

app.use(express.json());
app.use(cors());
mongoose.set('strictQuery', false);
try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      process.env.MONGODB_URL,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }
  app.use(routes);
 app.listen(PORT,()=>console.log(`listening on :${PORT}`));