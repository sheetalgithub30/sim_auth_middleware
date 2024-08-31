import express from "express";
import { ipLogger } from "./ipLogger.js";
import { dateLogger } from "./dateLogger.js";

let data = [{
    src:"https://ik.imagekit.io/awwybhhmo/satellite_images/chinese/beyondmenu/hero/2.jpg?tr=w-3840,q-50",
    name:".CN Chinese",
    rating:5,
    address:"228 City Road, Cardiff",
    code:"CF24 3JH",
    type:"Chinese"
},
{
    src:"https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1621045014/11-Best-Thai-Food-Dishes-Spicy-Salad/11-Best-Thai-Food-Dishes-Spicy-Salad-1120x732.jpg",
    name:"@ Thai",
    rating:5,
    address:"376 Rayleigh Road, Essex",
    code:"SS9 5PT",
    type:"Thai"
},
{
    src:"https://siamais.co.uk/wp-content/uploads/2023/07/pad-thai-dish-1024x771.jpeg",
    name:"Thai Restaurant",
    rating:5,
    address:"30 Greyhound Road Hammersmith, London",
    code:"W6 8NX",
    type:"Thai"
},
{
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaOV7TDMSnZjkuVi87nwKrkQduCe-VJ7lyw&s",
    name:"042 Restaurant & Bar",
    rating:3,
    address:"885 High Road Leytonstone, London",
    code:"E11 1HR",
    type:"African"
},
{
    src:"https://www.tastingtable.com/img/gallery/20-chinese-foods-you-need-to-try-at-least-once/intro-1643997465.jpg",
    name:"1 2 3 Chinese",
    rating:5,
    address:"Unit 4 Spencer House, Swalwell",
    code:"NE16 3DS",
    type:"Chinese"
},
{
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Dft9P7WYfNAQj0tWH319hfHA6qURgaL7Aw&s",
    name:"1 Pizza 1",
    rating:3,
    address:"160 Leeds Road,Leeds",
    code:"LS26 0JH",
    type:"Pizza"
},
{
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFb-QOETAw_2smnhPtCqsh8A1KTeBnpYEBTQ&s",
    name:"1st Choice Pizza",
    rating:5,
    address:"1 WAlsall Road, Cannock",
    code:"WS11 0HG",
    type:"Pizza"
},
{
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOVmOsjbkYZhVT3lxXNDNHT1tFs75CNm74g&s",
    name:"333 Chinese Takeaway",
    rating:5,
    address:"276 Waterloo Road, Blackpool",
    code:"FY4 3AF",
    type:"Chinese"
},
{
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYLUreyRYTNBxb7FGivEfdAKGI5Cj6asm4kg&s",
    name:"280 Degrees African & Nigerian Restaurant",
    rating:2,
    address:"280 Kilburn High Road, London",
    code:"NW6 2BY",
    type:"English"
},
{
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7xRBY1qtI13RkDMFpzmH7YLooRLS6odvvA&s",
    name:"328 Chinese Online",
    rating:5,
    address:"2-4 Commercial Street, Aberbargoed",
    code:"CF81 9BW",
    type:"Chinese"
},
{
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGlYhYHrJfwT2etKj-Y9xZR4R6Nq66oNKPA&s",
    name:"@ Thai",
    rating:3,
    address:"376 Rayleigh Road, Essex",
    code:"SS9 5PT",
    type:"Thai"
},
{
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3GophyPKFGtBvU6RGN0nUlNAH6HDaLEsUA&s",
    name:"333 Chinese Takeaway",
    rating:4,
    address:"276 Waterloo Road, Blackpool",
    code:"FY4 3AF",
    type:"Chinese"
},
]

const port = 1000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(ipLogger);
app.use(dateLogger);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.listen(port,() =>
  console.log("Server is up & running at port " + port)
);