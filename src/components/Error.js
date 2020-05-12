import React, { Component } from 'react'

export default class Error extends Component {
    render() {
        return (
            <div>
            <section class="breadcrumb-area fixed-head gradient-overlay" style="background: url('assets/images/banners/3.jpg');">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 centered">
                        <div class="banner-title">
                            <h2>Error Page</h2>
                        </div>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li>Error Page</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    
        <section class="section-padding gradient-overlay">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-8 col-md-10 col-sm-12 centered mb-30">
                        <img src="assets/images/404.png" alt=""/>
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 centered">
                        <a href="index.html" class="bttn-mid btn-fill">Back to home</a>
                    </div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}
