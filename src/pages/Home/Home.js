import { ProductsContainer, ProductCard, ButtonBuy } from "./StyledHome.js";
import  Header from "../../components/Header/Header"
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import BASE_URL from "../../constants/url.js"
import products from "../../constants/products.js"


export default function Home() {

    // const [products, setProducts] = useState([])
    // useEffect(() => {
    //     axios.get(`${BASE_URL}/getProducts`)
    //         .then(ans => {
    //             setProducts(ans.data)
    //         })
    //         .catch(err => alert("Não foi possível carregar os produtos."))
    // }, [])

    
    return (
        <>
            <Header/>
            <ProductsContainer>
                {products.map(product =>
                    <ProductCard key={product._id}>
                        <img src={product.image} alt="produto" />
                        <div><span>{product.name}</span> <span>R$ {(product.price).toFixed(2)}</span></div>
                        <div>{product.quality}</div>
                        <ButtonBuy>COMPRE</ButtonBuy>
                    </ProductCard>)}
            </ProductsContainer>
        </>
    )
}
