import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BASE_URL } from '../../api/config';
import '../Details/detail.scss'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Detail() {
    const { id } = useParams()
    const [products, setProducts] = useState([]);
    const [count, setCounter] = useState(0);
    const [photo, setPhoto] = useState([])

    const artir = () => {
        setCounter(count => count + 1);
    }

    const azalt = () => {
        if (count < 1) {
            count = 1;
        }
        setCounter(count => count - 1);
    }

    const changePhoto = () => {
    }

    const getProducts = async () => {
        await fetch(BASE_URL + "product/getbyid/" + id)
            .then((res) => res.json())
            .then((data) => setProducts(data.message));
    };

    useEffect(() => {
        getProducts();

    }, []);
    console.log(products);
    return (
        <>
            <div id='detail'>
                <div className="shop">
                    <div className="container">
                        <div className="top">
                            <span>
                                <Link to='/'>Home</Link> / Shop </span>
                        </div>
                        <div className="bottom">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="left">
                                        <div className="row">
                                            <div className="col-lg-2">
                                                {
                                                    products.productPicture &&
                                                    products.productPicture.map(e => (
                                                        <img onClick={a => setPhoto(e)} className='sml-picture' width='100%' src={e} alt="" />
                                                    ))
                                                }
                                            </div>
                                            <div className="col-lg-10">
                                                {
                                                    products.productPicture &&
                                                    <div className="big-picture">
                                                        <img width="100%" src={photo.length === 0 ? products.productPicture[0] : photo} alt="" />
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right">
                                        <h4 className='first'>{products.name}</h4>
                                        <div className="iconBox">
                                            <span className="icons">
                                                <StarOutlineIcon />
                                                <StarOutlineIcon />
                                                <StarOutlineIcon />
                                                <StarOutlineIcon />
                                                <StarOutlineIcon />
                                            </span>
                                            <span className="text">
                                                <span>| (01 review)</span>
                                                <span>| Add your review</span>
                                            </span>

                                        </div>

                                        <h3 className='number'>${products.price}</h3>
                                        <hr />
                                        <ul>
                                            <li> Bass and Stereo Sound.</li>
                                            <li> Display with 3088 x 1440 pixels resolution.</li>
                                            <li> Memory, Storage & SIM: 12GB RAM, 256GB.</li>
                                            <li> Androi v10.0 Operating system.</li>
                                        </ul>
                                        <p>Availability: <span className='stock'>940 in stock</span></p>
                                        <span className='buttonBox'>
                                            <button onClick={azalt}>-</button>
                                            <span className='count'>{count}</span>
                                            <button onClick={artir}>+</button>
                                        </span>
                                        <span className='addToCartBox'>
                                            <button>ADD TO CART</button> </span>
                                        <div className="add">
                                            <div className="row align-items-center justify-content-center">
                                                <div className="col-lg-10">
                                                    <span className='hoverBox'><i class="fa-solid fa-heart"></i>Add to wishlist</span>
                                                    <span className='hoverBox'><i class="fa-solid fa-layer-group"></i> Compare</span>
                                                </div>
                                                <div className="col-lg-2">
                                                    <span className='rightIcon'>
                                                        <i class="fa-solid fa-share-nodes"></i>
                                                        Share
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <p>SKU :  DK1002</p>
                                        <p>Categories: :   iPhone Tablets</p>
                                        <p>Tags :   Smartphone, Tablets</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div id='description'>
            <div className="container">
                <div className="top">
                    <h5>Description</h5>
                    <h5 className='afterLine'>Additional information</h5>
                    <h5 className='afterLine'>Reviews (1)</h5>
                </div>
                <div className="bottom">
                    <div className="text">
                        <p>{products.description}</p>
                    </div>
                </div>



            </div>

        </div>

        </>

    )
}

export default Detail