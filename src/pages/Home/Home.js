import { ProductsContainer, ProductCard, ButtonBuy } from "./StyledHome.js";
import  Header from "../../components/Header/Header"
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../constants/url.js"


export default function Home() {

    // const [products, setProducts] = useState([])
    // useEffect(() => {
    //     axios.get(`${BASE_URL}/getProducts`)
    //         .then(ans => {
    //             setProducts(ans.data)
    //         })
    //         .catch(err => alert("Não foi possível carregar os produtos."))
    // }, [])

    const products = [
        {
            _id: 1,
            name: "Tenis",
            image: "https://classic.exame.com/wp-content/uploads/2022/10/Air-Mag.jpg?quality=70&strip=info",
            description: "Melhor tenis do mundo",
            value: 2000.00

        },

        {
            _id: 2,
            name: "Tenis",
            image: "https://classic.exame.com/wp-content/uploads/2022/10/Air-Mag.jpg?quality=70&strip=info",
            description: "Melhor tenis do mundo",
            value: 2000.00

        },
        {
            _id: 3,
            name: "Tenis",
            image: "https://classic.exame.com/wp-content/uploads/2022/10/Air-Mag.jpg?quality=70&strip=info",
            description: "Melhor tenis do mundo",
            value: 2000.00

        },
        {
            _id: 1,
            name: "Tenis",
            image: "https://classic.exame.com/wp-content/uploads/2022/10/Air-Mag.jpg?quality=70&strip=info",
            description: "Melhor tenis do mundo",
            value: 2000.00

        },

        {
            _id: 2,
            name: "Tenis",
            image: "https://classic.exame.com/wp-content/uploads/2022/10/Air-Mag.jpg?quality=70&strip=info",
            description: "Melhor tenis do mundo",
            value: 2000.00

        },

    ]

    return (
        <>
            <Header/>
            <ProductsContainer>
                {products.map(product =>
                    <ProductCard key={product._id}>
                        <img src={product.image} alt="produto" />
                        <div><span>{product.name}</span> <span>R$ {(product.value).toFixed(2)}</span></div>
                        <div>{product.description}</div>
                        <ButtonBuy>COMPRE</ButtonBuy>
                    </ProductCard>)}
            </ProductsContainer>
        </>
    )
}
