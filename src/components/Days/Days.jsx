import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { BASE_URL } from '../../api/config';
import 'swiper/scss';
import '../Days/Days.scss'
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Navigation, Scrollbar, A11y } from 'swiper';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Link } from 'react-router-dom';


function Days() {



    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        await fetch(BASE_URL + "product/productlist")
            .then((res) => res.json())
            .then((data) => setProducts(data.message));
    };

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div className='myslider'>

            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-8">
                        <h2>Top Selling Products</h2>
                    </div>
                    <div className="col-lg-4">
                        <ul className='d-flex justify-content-between general'>
                            <li className='color'>Computer</li>
                            <li>Samsung</li>
                            <li>HTC</li>
                            <li>Nokia</li>
                            <li>Cell Phones</li>
                        </ul>
                    </div>
                    <hr />
                </div>
            </div>
            <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={1}
                slidesPerView={5}
                navigation
                scrollbar={{ draggable: true }}
            >
                {
                    products.map(product => (
                        <SwiperSlide key={product.id}>
                            
                            <div className="containerr">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="box">
                                            <div className="image">
                                                <img width="100%" src={product.productPicture[0]} alt="" />
                                                <div className="icons">
                                                    <i class="fa-solid fa-eye icon"></i><br />
                                                    <i class="fa-solid fa-heart icon"></i><br />
                                                    <i class="fa-solid fa-layer-group icon"></i>
                                                </div>
                                            </div>
                                            <div className="text">
                                                <span className="box1 title">
                                                <Link to={'detail/' + product.id}>
                                                    {product.name}
                                                    </Link>
                                                    </span>
                                                   
                                                <div className="d-flex align-items-center">
                                                    <span className="star">
                                                        <StarOutlineIcon />
                                                        <StarOutlineIcon />
                                                        <StarOutlineIcon />
                                                        <StarOutlineIcon />
                                                        <StarOutlineIcon />
                                                    </span>
                                                    <span>(01 review)</span>
                                                </div>
                                                <span className='box1 number'><del className='del'>₼ 2700</del>{product.price} ₼</span>
                                                <div className="box2">
                                                    <div className="red">
                                                    </div>
                                                </div>
                                                <span>Sold:315/1225</span>
                                                <div className="button">
                                                    <button>ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>
                           
                          
                        </SwiperSlide>


                    ))
                }

            </Swiper>
        </div>
    )
}

export default Days