import React from 'react'
import '../Category/category.scss'

function Category() {
  return (
    <div id="category">
      <div className="container">
        <h6 class="sidebar-title">Popular Feeds</h6>
        <div class="single-category">
            Business
            <span class="category-number">26</span>
        </div>
        <div class="single-category">
            consultant
            <span class="category-number">30</span>
        </div>
        <div class="single-category">
            Creative
            <span class="category-number">71</span>
        </div>
        <div class="single-category">
            UI/UX
            <span class="category-number">56</span>
        </div>
        <div class="single-category">
            Texhnology
            <span class="category-number">60</span>
        </div>
      </div>
    </div>
  )
}

export default Category