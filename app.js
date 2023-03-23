const express=require('express');
const  mongoose =require("mongoose")
const dotenv =require('dotenv')
const categorieRouter =require("./routes/categorie.route")
const scategorieRouter =require("./routes/scategorie.route")
const articleRouter =require("./routes/article.route")
const cors=require("cors")
dotenv.config()
const app = express();

mongoose.set('strictQuery', true)
const connect = async () => {
    try {
      await mongoose.connect(process.env.DATABASE);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });

//middlewares
app.use(cors());
//BodyParser Middleware
app.use(express.json()); 

app.use('/api/categories', categorieRouter);
app.use('/api/scategories', scategorieRouter);
app.use('/api/articles', articleRouter);

app.listen(process.env.PORT, () => {
    connect();
 console.log(`Server is listening on port ${process.env.PORT}`); });
