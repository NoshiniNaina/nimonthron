import React, { useContext } from 'react'
import { ProductsContext } from '../../global/ProductsContext'
// import { CartContext } from '../Global/CartContext'

export const Products = () => {

    const { products } = useContext(ProductsContext);
    console.log(products);
    return (
        <>
            {products.length !== 0 && <h1>Services</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no SERVICES to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='service-type'>
                            Service Type: {product.ServiceType}
                        </div>
                        <div className='product-price'>
                            Rent Price {product.ProductPrice}.00
                        </div>
                        <button className='addcart-btn' >Reserve</button>
                    </div>
                ))}
            </div>
        </>
    )
}
