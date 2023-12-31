import { useState, useEffect } from "react";
//import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";
import "../Styles/Styles.css"


const ItemListContainer = () => { 
 const [productList, setProductList] = useState([]);

 const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setProductList(data))
    .catch((error) => console.log(error));
 };

 useEffect(() => {
    fetchProducts();
 }, []);

 return (
    <div>
        <h1>Catalog</h1>
        <ItemList productList={productList} />
    </div>
 );
};


export default ItemListContainer;

// <ItemCount />



  