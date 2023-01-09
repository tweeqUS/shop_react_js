import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const BestSellers = () => {

    const [products, setProducts] = useState([])
    const navigate = useNavigate();


    //если массив пустой , то в useEffect пойдём один раз
    useEffect(()=> {
       const promise = axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products')
        promise.then((res)=> {
            const products = res.data
            setProducts(products)
        })
    },[ ])

    const showMoreHandler = (id) => {
        navigate(`/product/${id}` )
    }

    return (
        <div className="bestSeller">
            <h2>BestSellers</h2>
            <div className="cards">
                {
                    products.map((el) => {
                        return (

                            <div className="card" key={el._id}>
                                <img src={el.image} alt="img" />
                                <h4>{el.title}</h4>
                                <p className="price">${el.price}</p>
                                <button onClick={()=>showMoreHandler(el.id)}>Show more</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}
