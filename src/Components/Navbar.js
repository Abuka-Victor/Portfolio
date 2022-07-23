import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "boxicons";

const Link = styled.a`
    padding: 1rem 2rem;
    border: 1px solid #fff;
    text-align: center;
    transition: all 0.4s ease-in-out;
    &:hover {
        background: #fff;
        color: #000;
    }
`;

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 0 13px 1px rgba(0, 0, 0, 0.75);
`;

let background = "w-screen text-white px-5 py-2";
let background2 = "bg-purple-900 w-screen text-white px-5 py-2";

export default function Navbar() {
    const [scrolled, setScroll] = useState(false);

    function changeNavColor() {
        if (window.scrollY > 0) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", changeNavColor);
        // window.removeEventListener("scroll");
    });

    return (
        <Nav className={scrolled ? background2 : background}>
            <div className="flex w-[85%] my-0 mx-auto justify-between gap-x-14">
                <div className="left flex justify-between w-1/2 items-center">
                    <h1 className="text-4xl">ABUKA VICTOR</h1>
                    <ul className="flex gap-5 text-xl text-gray-300 w-5/12 justify-between">
                        <li className="hover:text-white">
                            <a href="#">Home</a>
                        </li>
                        <li className="hover:text-white">
                            <a href="#">Skills</a>
                        </li>
                        <li className="hover:text-white">
                            <a href="#">Projects</a>
                        </li>
                    </ul>
                </div>
                <div className="right flex w-1/2 justify-evenly items-center">
                    <ul className="flex gap-5">
                        <li>
                            <a
                                href="#"
                                className="p-1 border-2 border-gray-300 rounded hover:rounded-full flex justify-center items-center"
                            >
                                <box-icon
                                    name="linkedin"
                                    color="white"
                                    animation="tada-hover"
                                    type="logo"
                                ></box-icon>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="p-1 border-2 border-gray-300 rounded hover:rounded-full flex justify-center items-center"
                            >
                                <box-icon
                                    name="twitter"
                                    color="white"
                                    type="logo"
                                    animation="tada-hover"
                                ></box-icon>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="p-1 border-2 border-gray-300 rounded hover:rounded-full flex justify-center items-center"
                            >
                                <box-icon
                                    name="github"
                                    color="white"
                                    type="logo"
                                    animation="tada-hover"
                                ></box-icon>
                            </a>
                        </li>
                    </ul>
                    <Link href="#" className="text-xl">
                        Let's Connect
                    </Link>
                </div>
            </div>
        </Nav>
    );
}
