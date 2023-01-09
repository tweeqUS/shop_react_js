import axios from "axios"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import rating from './assets/img/rating.svg'
import arrowBack from './assets/img/arrowBack.svg'
import cartWhite from './assets/img/cartWhite.svg'
import { Link } from "react-router-dom";
import loading from './assets/img/load.gif'


export const Product = () => {

    const [product, setProduct] = useState(null)

    let { productId } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${productId}`)
        promise.then((res) => {
            setProduct(res.data)
        })
    }, [])


    return (
        <div>
            <div className="arrowBack">
                <Link to={"/"}>
                    <img src={arrowBack} alt="" />
                    Back to Best Seller
                </Link>
            </div>

            {
                product === null
                    ? <div className="loading"><img src={loading} alt="" /></div>
                    : <div className="product">
                        <img src={product.image} alt="" />
                        <div className="info">
                            <p className="title">{product.title}</p>
                            <p className="price">$ {product.price}</p>
                            <div className="rating">
                                <p>Rating: {product.rating.rate}</p>
                                <img src={rating} alt="" />
                            </div>
                            <div className="category">
                                <span>Category:</span>
                                <p>{product.category}</p>
                            </div>
                            <p className="description">{product.description}</p>
                            <button>
                                <img src={cartWhite} alt="" />
                                Add to cart
                            </button>
                        </div>
                    </div>
            }



        </div>
    )
} 