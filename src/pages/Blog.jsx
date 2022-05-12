import React from 'react'
import Blogs from '../components/Blogs/Blogs'
import Food from '../components/Food/Food'
import Search from '../components/Search/Search'
import Popular from '../components/Popular/Popular'
import Category from '../components/Category/Category'
import Instagram from '../components/Instagram/Instagram'



function Blog() {
  return (
    <div>
        <Blogs/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Food/>
            </div>
            <div className="col-lg-4">
              <Search/>
              <Popular/>
              <Category/>
              <Instagram/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Blog