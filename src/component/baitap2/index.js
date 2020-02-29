import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import WhatWeDo from "./whatwedo";
import Contact from "./contact";
import ListCard from "./listcard";
import Footer from "./footer";

export default function Baitap2(){
    return (
        <div>
            <Header />
            <Carousel />
            <div className="row">
                <div className="col-sm-8">
                <WhatWeDo />
                </div>
                <div className="col-sm-4">
                    <Contact />
                </div>
            </div>
            <ListCard />
            <Footer />
        </div>
    );
}