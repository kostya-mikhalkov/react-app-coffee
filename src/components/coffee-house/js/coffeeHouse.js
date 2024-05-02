import { Component } from "react";

import HeaderCoffeeHouse from "../blocks/header/js/headerCoffeeHouse";
import AboutUs from "../blocks/about-us/js/aboutUs";
import OurBest from "../blocks/best/js/ourBest";
import Footer from "../blocks/footer/js/footer";

import '../css/coffeeHouse.css';

export default function CoffeeHouse() {
    return (
        <div className="coffee-house">
            <HeaderCoffeeHouse />
            <AboutUs />
            <OurBest />
            <Footer />
        </div>
    )
}