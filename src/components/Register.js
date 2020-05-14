import React, { Component } from 'react'
import BreadCrumb from './BreadCrumb'

export default class Register extends Component {
    render() {
        return (
            <div>
            <BreadCrumb title='Register ' home='Home' page='Register' />
            <section class="hero-section">
            <div class="hero-area wave-animation">
                <div class="single-hero gradient-overlay">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-6 col-lg-6 col-md-8 centered">
                                <div class="hero-sub">
                                    <div class="table-cell">
                                        <div class="hero-left">
                                            <h2>Create Account</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, ad. Doloribus provident eaque</p>
                                            <div class="account-form">
                                                <form action="#" class="row">
                                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <input type="text" placeholder="First Name" required />
                                                    </div>
                                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <input type="text" placeholder="Last Name" required />
                                                    </div>
                                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <input type="email" placeholder="Email Address" required />
                                                    </div>
                                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <input type="text" placeholder="Phone number" required />
                                                    </div>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <input type="password" placeholder="Password" required />
                                                    </div>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <input type="password" placeholder="Retype-password" required />
                                                    </div>
                                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                        <button type="submit" class="bttn-mid btn-fill w-100">Create account</button>
                                                    </div>
                                                </form>
                                                <div class="extra-links">
                                                    <a href="forgot-password.html">Forgot password</a>
                                                    <a href="login.html">Login account</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        )
    }
}
