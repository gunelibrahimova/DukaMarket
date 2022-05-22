import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Slider/slider.scss";
import { BASE_URL } from "./../../api/config";
import axios from 'axios'
import {GET} from "../../api/services";


// product/productlist
function Slider() {
  const [products, setProducts] = useState([]);
  const [dataa, setData] = useState([])


  // const getProducts = async () => {
  //   axios.get(BASE_URL + "product/productlist").then((res)=>{
  //     setProducts(res.data.message)
  //   })
  // };
  
const getData = async () =>{
  const res = await GET("product/productlist")

  setProducts(res.message)
}

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mySlider">
      <Swiper>
        {products.filter(x=>x.isSlider === true).map((item) => (
          <SwiperSlide key={item.id}>
              <img
                  src={item.coverPhoto}
                  alt=""
                />
                <div className="container">
                    <div className="deal">
                        <h3>{item.name}</h3><br />
                        <h6>{item.description}</h6><br />
                        <button>DISCOVER NOW</button>
                    </div>
                </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;