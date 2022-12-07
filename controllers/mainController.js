
const listProducts = [
    {id:1,
      titule: "Giorgio Armani Passione" , 
      description:"aroma afrutado",
      price:"65.50",
      currency: "U$S",
      image:"https://fraguru.com/mdimg/perfume/375x500.71535.jpg"
  
  },
  {id:2,
    titule: "Michael Kors Wonderlast" , 
    description:"aroma almendrado",
    price:"47.00",
    currency: " U$S ",
    image:"https://fraguru.com/mdimg/perfume/375x500.39459.jpg"
  },
  {id:3,
    titule: "Donna Karan Be Delicious" , 
    description:"aroma verde" ,
    price:"27.50",
    currency: " U$S ",
    image:"https://fraguru.com/mdimg/perfume/375x500.11126.jpg"
  },
  {id:4,
    titule: "Nina Fleur Nina Ricci" , 
    description:"aroma citrico",
    price:"37.50",
    currency: " U$S ",
    image:"https://fraguru.com/mdimg/perfume/375x500.75022.jpg"
  },
  {id:5,
    titule: "My Way Giorgio Armani" , 
    description:"aroma citrico" ,
    price:"37.50",
    currency: " U$S ",
    image:"https://fraguru.com/mdimg/perfume/375x500.62036.jpg"
  },
  {id:6,
    titule: "Y Le Yves Saint Laurent" , 
    description:"aromático,",
    price:"150.00",
    currency: " U$S ",
    image:"https://fraguru.com/mdimg/perfume/375x500.64718.jpg"
  }
]
  const mainController = {
    index: (req,res)=> {res.render('index',{products:listProducts});
  },
  detalle: (req, res) => {
    const id = req.params.id;
    const perfume = listProducts.find(perfume => perfume.id == id);
    res.render("detalleProductos", { perfume });
  }
  
}

module.exports = mainController;