import express from "express";
import axios from "axios";
import bodyParser from "body-parser";                                   

const app = express();	                                                //creamos la variable app del tipo express
const port = 3000;	                                                    //variable con el numero del puerto 

app.use(bodyParser.urlencoded({ extended: true }));	                    //middleware 


app.get("/", (req, res) => {                                            //get inicial para renderizar los resultados de la consulta al servidor 
      res.render("index.ejs", { content: "Waiting for data..." });
});

app.listen(port, () => {                                                //indicamos el puerto de escucha 
      console.log(`Server is running on port ${port}`);
});