import React from "react";
import '../Search/search.scss'

function Search() {
  return (
    <div id="here">
      <div className="container">
        <h6 class="sidebar-title"> Search Here</h6>
        <div className="box">
          <input type="text" placeholder="Search your keyword.." />
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;