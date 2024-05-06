import React from "react";
import "./Slider.css";

export default function Slider() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTznoJ-7lEtrtR6FrkGSnv51IZhYpDyfgEKSLms7AwA38shCi_9PufCuCjq49GFHgNxeqg&usqp=CAU"
                        className="d-block w-100 height-500"
                        alt="Slide 1"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzMyDKpqzCyr3yWlKKvU99hzeLhgR_wiTmL0jLyffQQ&s"
                        className="d-block w-100 height-500"
                        alt="Slide 2"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZFrKQv6s5U995lqMpiqgxZV5g0JA8L56UnhzdXW4FYQm0iqmE2s3iy2U5jBasZbMRbU&usqp=CAU"
                        className="d-block w-100 height-500"
                        alt="Slide 3"
                    />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
