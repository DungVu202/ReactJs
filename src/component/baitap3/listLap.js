import React from 'react';
import Laptop from "./laptop";

function Listlap(props) {
    return (
        <div>
            <section id="laptop" class="container-fluid pt-5 pb-5 bg-light text-dark">
                <h1 class="text-center">BEST LAPTOP</h1>
                <div class="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <Laptop />
                    </div>   
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <Laptop />
                    </div> 
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <Laptop />
                    </div> 
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <Laptop />
                    </div>  
                </div>
            </section>
        </div>
    );
}
            
export default Listlap;