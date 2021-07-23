import React, { useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { API_URL } from '../config/constants';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

const MainPage = () => {
    const [products, setProducts] = useState([]);
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        axios.get(`${API_URL}/products/`)
            .then(function (result) {
                const products = result.data.product;
                console.log(products);
                setProducts(products);
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get(`${API_URL}/banners`)
            .then((result) => {
                const banner = result.data.banners;
                setBanners(banner);
                console.log(banners);
            }).catch((error) => {
                console.error("에러발상", error);
            })
    }, [])

    return (
        <div>

            <section>
                <Carousel autoplay={true} autoplaySpeed={3000}>
                    {
                        banners.map((banner, index) => {
                            return (
                                <Link to={banner.href}>
                                    <div id="visual">
                                        <img src={`${API_URL}/${banner.imageUrl}`} />
                                    </div>
                                </Link>
                            )
                        })
                    }
                </Carousel>
                <div id="products" className="inner">
                    <h2>최신상품</h2>
                    <div id="product-list">
                        {
                            products.map((product, index) => {
                                return (
                                    <div className="product-card">
                                        <Link to={`/product/${product.id}`}>
                                            <div>
                                                <img src={product.imageUrl} className="product-img" alt="제품" />
                                            </div>
                                            <div className="product-contents">
                                                <span className="product-name">{product.name} </span>
                                                <span className="product-price">{product.price}</span>
                                                <div className="product-seller">
                                                    <img className="product-avatar" src="images/icons/avatar.png" />
                                                    <span>{product.seller}</span>
                                                </div>
                                                <div>{moment(product.createdAt).format('YYYY-MM-DD')}</div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })

                        }

                    </div>
                </div>
            </section>

        </div>
    )
}

export default MainPage;
