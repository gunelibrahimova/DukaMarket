import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BASE_URL } from '../../api/config';
import '../Details/detail.scss'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FaStar } from 'react-icons/fa'

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}

function Detail() {
    const { id } = useParams()
    const [products, setProducts] = useState([]);
    const [count, setCounter] = useState(0);
    const [photo, setPhoto] = useState([]);
    const [username, setUserName] = useState('');
    const [review, setReview] = useState('');
    const [email, setEmail] = useState('');
    const [rating, setRating] = useState(0);

    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);


    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = value => {
        setHoverValue(undefined)
    }


    const postComment = async () => {
        fetch(BASE_URL + "Comment/addcomment", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "userName": username,
                "userEmail": email,
                "review": review,
                "ratings": currentValue,
                "productId": id
            })
        })
    }



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
                            {/* <p>{products.description}</p> */}
                        </div>
                    </div>



                </div>

            </div>


            <div id='comment'>
                <div className="container">
                    <div className="top">
                        <div className="row">
                            <div className="col-lg-4">
                                <h5 className='five'>
                                    {
                                        products.rating &&
                                        
                                            <div>
                                                <h5 className='five'>{products.rating}</h5>
                                            </div>
                                        
                                    }

                                </h5>
                                <span className="icons my-2">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span> <br />
                                <span className='review'>01 Review</span>
                            </div>
                            <div className="col-lg-8">
                                <h6 className='wireles'>1 review for "<span>Wireless Bluetooth Over-Ear Headphones</span>"</h6>
                                <div className="add">
                                    <div className="d-flex">
                                        <div className="image">
                                            <img src="https://cdn.pixabay.com/photo/2021/05/09/10/51/dalmatian-6240486_960_720.jpg" alt="" />
                                        </div>
                                        <div className="admin">
                                            <span className="iconss my-2">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </span>
                                            <span className='addreview'>Add Review</span>
                                            {
                                                products.comments &&
                                                products.comments.map(comment => (
                                                    <div key={comment.userEmail}>
                                                        <h6 className='date'> {comment.userName} – <span> May 27, 2021</span></h6>
                                                        <p className='light'> {comment.review}</p>
                                                        <p><span> {comment.ratings}</span></p>
                                                        <hr />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div class="comment-title">
                            <h3>Add a review</h3>
                            <p>Your email address will not be published. Required fields are marked *</p>
                        </div>
                        <div class="comment-rating">
                            <div className="d-flex">
                                <span>Overall ratings</span>
                                <div style={styles.containerr}>
                                    <div style={styles.stars}>
                                        {stars.map((_, index) => {
                                            return (
                                                <FaStar
                                                    key={index}
                                                    size={15}
                                                    style={{
                                                        marginRight: 10,
                                                        cursor: "pointer"
                                                    }}
                                                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                                    onClick={() => handleClick(index + 1)}
                                                    onMouseOver={() => handleMouseOver(index + 1)}
                                                    onMouseLeave={handleMouseLeave}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="comment-input-box">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="comment-input">
                                        <input onChange={e => setUserName(e.target.value)} type="text" placeholder='Your Name' required />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="comment-input">
                                        <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Your Email' required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <textarea onChange={e => setReview(e.target.value)} placeholder="Your review" class="comment-input comment-textarea"></textarea>
                                </div>
                                <div class="col-lg-12">
                                    <div class="comment-agree d-flex align-items-center">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Save my name, email, and website in this browser for the next time I comment.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="comment-submit">
                                        <button onClick={e => postComment()} type="submit" class="cart-btn">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

const styles = {
    containerr: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}


export default Detail