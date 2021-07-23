import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.scss';
import { API_URL } from '../config/constants';
const ProductPage = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`${API_URL}/products/${id}`)
            .then(function (result) {
                const product = result.data.product;
                setProduct(product);
                console.log(result.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    if (product === null) {
        return (
            <div className="inner">
                <h1>상품 정보를 받고 있습니다....</h1>
            </div>
        )
    }
    // const { id } = useParams();
    return (
        <div className="inner" id="detailView">
            <h1>{product.name} 상세페이지 입니다.</h1>
            <div id="image-box">
                <img src={product.imageUrl} />
                <div id="profile-box">
                    <img src="/images/icons/avatar.png" />
                    <span>{product.seller}</span>
                </div>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div>{product.price}원</div>
                <div>2021-07-13</div>
                <div>{product.description}</div>
            </div>
        </div>
    )
}

export default ProductPage;
