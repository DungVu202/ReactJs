import React from 'react';
import Smartphone from "./smartphone";

function ListPhone() {
    return (
        <div>
            <section id="smartphone" class="container-fluid pt-5 pb-5">
                <h1 class="text-white text-center">BEST SMARTPHONE</h1>
                <div class="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <Smartphone />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <Smartphone />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <Smartphone />
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <Smartphone />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ListPhone;