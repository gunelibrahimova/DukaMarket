import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../api/config';
import '../Header/header.scss'

function Header() {

    const [a, setActive] = useState();
    const [b, setDropActive] = useState();
    const [c, setshopActive] = useState();
    const [category, setCategory] = useState([]);


    const getCAtegories = async () => {
        await fetch(BASE_URL + 'category/getall')
            .then(a => a.json())
            .then(data => setCategory(data))
    }


    useEffect(() => {
        getCAtegories()
    }, [])


    const dropdown = () => {
        a === 'active' ? setActive('') : setActive('active');
    }
    const dropactive = () => {
        b === 'active' ? setDropActive('') : setDropActive('active');
    }
    const shopactive = () => {
        c === 'active' ? setshopActive('') : setshopActive('active');
    }

    return (
        <section id="header">
            <div className="topNav">
                <div className="left">
                    <div className='language'>
                        <span>Dil secin : </span>
                        <div className="langArea">
                            <span onClick={e => dropdown()}> Azerbaycan <i class="fa-solid fa-angle-down"></i></span>
                            <ul className={`language-list ${a}`}>
                                <li>Azerbaycan</li>
                                <li>Rus</li>
                                <li>Ingilis</li>
                            </ul>
                        </div>
                    </div>
                    <div className="number">
                        <span>Need Help?</span>
                        <span>(000) 000 00 00</span>
                    </div>

                </div>
                <div className="right">
                    <ul>
                        <li>About Us</li>
                        <li>Order Tracking</li>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="nav">
                <div className="left">
                    <img width='200px' src="https://dukamarket.b-cdn.net/wp-content/uploads/2021/06/logo1.svg" alt="" />
                </div>
                <div className="center">
                    <div className="box">
                        <div className="selectArea">
                            <span onClick={e => dropactive()}>All Categories <i class="fa-solid fa-angle-down"></i></span>
                            <ul className={`select-list ${b}`}>
                                <li className='first'>Best Seller Products</li>
                                <li>Top 10 Offers</li>
                                <li>New Arrivals</li>
                            </ul>
                        </div>
                        <input type="text" placeholder='I m shopping for..' />
                        <button>
                            <i class="fa-solid fa-magnifying-glass search"></i>
                        </button>

                    </div>
                </div>
                <div className="right d-flex align-items-center">
                    <div className="boxOne d-flex align-items-center">
                        <div className="left">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div className="right">
                            <span>Login <br /> My Account</span>
                        </div>
                    </div>
                    <div className="boxOne d-flex align-items-center">
                        <div className="left">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <div className="right">
                            <span>Favorite <br /> My Wishlist</span>
                        </div>
                    </div>
                    <div className="boxOne d-flex align-items-center">
                        <div className="left">
                            <i class="fa-solid fa-bag-shopping"></i>
                        </div>
                        <div className="rightt">
                            <div className='cart'>
                               <span>Your Cart: <br />$00.00</span> 
                                <div className="box">
                                    <div className="top">
                                        <span className='header6'>Your Cart </span>
                                        <span className='item'>(1 Item in Cart)</span>
                                    </div>
                                    <hr />
                                    <div className="center">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img width='100%' src="https://cdn.pixabay.com/photo/2022/02/12/19/58/cat-7009836_960_720.jpg" alt="" />
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="row align-items-center justify-content-between">
                                                    <div className="col-lg-10">
                                                        <h6 className='samsung'>Samsung C49J89: £875, Debenhams Plus</h6>
                                                        <p className='price'>$255.00</p>
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <i class="fa-solid fa-x"></i>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="bottom">
                                        <div className="text">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <span className='total'>Subtotal</span>
                                                </div>
                                                <div className="col-lg-6">
                                                    <span className='money'>$255.00</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="buttonDiv">
                                            <button className='view'>
                                               <Link to='/cart'>View cart</Link> </button><br/>
                                            <button className='check'>
                                               <Link to="/checkout">CHECKOUT</Link> </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="bottomNav d-flex justify-content-between">
                <div className="left">
                    <div className="shop-list">
                        <span className='display-span' onClick={e => shopactive()}><i class="fa-solid fa-bars display-icon"></i>  SHOP BY DEPARTMENT</span>
                        <ul className={`shop-listt ${c}`}>

                            {
                                category.map(e => (
                                    <li key={Math.floor(Math.random() * 100000000)} className='list-group-item'>{e.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="center">
                    <ul className='d-flex list-unstyled  align-items-center justify-content-between'>
                        <li className='home'>HOME
                            <div className="dropdown-menu2 row">
                                <div className="col-lg-4 pb-3">
                                    <p className='bold'>HOME PAGES</p>
                                    <p className='yellow' >Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-4">
                                    <p className='bold'>HOME PAGES</p>
                                    <p >Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-4">
                                    <p className='bold'><bold>HOME PAGES</bold></p>
                                    <p>Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-4">
                                    <p className='bold'><bold>HOME PAGES</bold></p>
                                    <p>Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-4">
                                    <p className='bold'><bold>HOME PAGES</bold></p>
                                    <p>Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                            </div>
                        </li>
                        <li className='about'>ABOUT US</li>
                        <li className='shop'>SHOP
                            <div className="dropdown-menu2 row">
                                <div className="col-lg-2 pb-3">
                                    <p className='bold'>HOME PAGES</p>
                                    <p className='yellow' >Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-2">
                                    <p className='bold'>HOME PAGES</p>
                                    <p >Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-2">
                                    <p className='bold'><bold>HOME PAGES</bold></p>
                                    <p>Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-2">
                                    <p className='bold'><bold>HOME PAGES</bold></p>
                                    <p>Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-2">
                                    <p className='bold'><bold>HOME PAGES</bold></p>
                                    <p>Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-2">
                                    <img className='img-fluid' src="https://cdn.pixabay.com/photo/2022/04/05/19/27/penguin-7114280_960_720.jpg" alt="" />
                                </div>
                                <span className='end'>30% OFF the shipping of your first order with the code: DUKA-SALE30</span>
                            </div>
                        </li>
                        <li className='blog'>BLOG
                            <div className="dropdown-menu2 row">
                                <div>
                                    <p><Link to='/blog'>Blog</Link> </p>
                                    <p>Blog detail</p>
                                </div>
                            </div>
                        </li>
                        <li className='pages'>PAGES
                            <div className="dropdown-menu2 row">
                                <div>
                                    <p>My account</p>
                                    <p>Product details</p>
                                    <p>Product details</p>
                                    <p>Product details</p>
                                    <p>Product details</p>

                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className="right">
                    <span>Spend $120 more and get free shipping!</span> 
                </div>
            </div>
        </section>
    )
}

export default Header