import express from "express";
import axios from "axios";
//import bodyParser from "body-parser";                                   

const app = express();	                                                //creamos la variable app del tipo express
const port = 3000;	                                                    //variable con el numero del puerto 
//const API_URL = "www.thecocktaildb.com/api/json/v1/1"; 
const API_URL ="https://dog.ceo/api/breeds/image/random"

//app.use(bodyParser.urlencoded({ extended: true }));	                    //middleware 
app.use(express.static("public")); 

app.get("/", async (req, res) => {                                            //get inicial para renderizar los resultados de la consulta al servidor 
      try {
            const result = await axios.get(API_URL);
            res.render("index.ejs", {
                  //secret: result.data.strAlcoholic,
                  //user: result.data.strDrink,
                  imagen: result.data.message,
                  estado: result.data.status,
            });
      } catch (error) {
            console.log(error.response.data);
            res.status(500);
      }
});



app.listen(port, () => {                                                //indicamos el puerto de escucha 
      console.log(`Server is running on port ${port}`);
});