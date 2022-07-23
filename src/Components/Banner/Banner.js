import React from "react";
import "./Banner.css";
import Rocket from "./rocket.svg";

export default function Banner() {
    return (
        <header className="banner">
            <div className="grid grid-cols-2 gap-4 p-5">
                <div className="ml-16">
                    <p className="text-md font-bold tracking-widest rounded p-2 bg-gradient-to-r from-fuchsia-900 to-purple-900 w-64 text-white border border-white">
                        Welcome to my portfolio
                    </p>
                    <h1 className="text-5xl text-white mt-5">
                        Hi! I'm Abuka Victor, Web Developer
                    </h1>
                    <p className="text-gray-300 mt-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Blanditiis maxime laudantium magnam. Aspernatur,
                        cupiditate quia! Voluptas itaque provident reiciendis
                        voluptate vitae nisi aliquam deleniti officiis officia
                        cumque sit minima quam sapiente, ex nemo amet blanditiis
                        non eaque consequuntur debitis quos, eius natus nesciunt
                        distinctio. A inventore minima quidem in alias.
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-5">
                        <p className="text-white font-bold ">Let's Connect</p>
                        <a
                            href="#"
                            className="flex items-center justify-center"
                        >
                            <box-icon
                                size="sm"
                                name="right-arrow-circle"
                                type="solid"
                                color="white"
                                animation="fade-right-hover"
                            ></box-icon>
                        </a>
                    </div>
                </div>
                <div className="w-[80%]">
                    <img id="image" src={Rocket} alt="A rocket" />
                </div>
            </div>
        </header>
    );
}
