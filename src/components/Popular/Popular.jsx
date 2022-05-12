import React from "react";
import '../Popular/popular.scss'

function Popular() {
  return (
    <div id="popular">
      <div className="container">
        <h6 class="sidebar-title">Popular Feeds</h6>
        <div className="apl">
            <div className="d-flex">
                <div className="image">
                    <img width="50px" src="https://cdn.pixabay.com/photo/2022/04/23/20/15/black-redstart-7152438_960_720.jpg" alt="" />
                </div>
                <div className="text">
                    <h6 className="logistic">APL Logistics seeks to be a premier, profitable</h6>
                    <span className="feed"><i class="fa-solid fa-calendar-days"></i> 24th March 2021</span>
                </div>
            </div>
        </div>
        <div className="apl">
            <div className="d-flex">
                <div className="image">
                    <img width="50px" src="https://cdn.pixabay.com/photo/2022/04/23/20/15/black-redstart-7152438_960_720.jpg" alt="" />
                </div>
                <div className="text">
                    <h6 className="logistic"> Of global supply-chain services to help</h6>
                    <span className="feed"><i class="fa-solid fa-calendar-days"></i> 24th March 2021</span>
                </div>
            </div>
        </div>
        <div className="apl">
            <div className="d-flex">
                <div className="image">
                    <img width="50px" src="https://cdn.pixabay.com/photo/2022/04/23/20/15/black-redstart-7152438_960_720.jpg" alt="" />
                </div>
                <div className="text">
                    <h6 className="logistic">Enable sustainable trade and commerce</h6>
                    <span className="feed"><i class="fa-solid fa-calendar-days"></i> 24th March 2021</span>
                </div>
            </div>
        </div>
        <div className="apl">
            <div className="d-flex">
                <div className="image">
                    <img width="50px" src="https://cdn.pixabay.com/photo/2022/04/23/20/15/black-redstart-7152438_960_720.jpg" alt="" />
                </div>
                <div className="text">
                    <h6 className="logistic">In key markets & region We will accomplish</h6>
                    <span className="feed"><i class="fa-solid fa-calendar-days"></i> 24th March 2021</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;