import React, { Component } from 'react'
import logo from '../assets/images/logo.png'


export default class Header extends Component {
    render() {
        return (
            <header class="header-area">
                <nav class="navbar navbar-expand-lg main-menu">
                    <div class="container-fluid">

                        <a class="navbar-brand" href="index.html"><img src={logo} class="d-inline-block align-top" alt=""/></a>

                        <button 
                        class="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                        >
                        <span class="menu-toggle"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">    
                        <ul class="navbar-nav m-auto">
                                <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="/create-account">Register</a></li>
                                <li class="nav-item"><a class="nav-link" href="/signin">Login</a></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="dashboard.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dashboard</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="dashboard.html">Dashboard</a></li>
                                        <li><a class="dropdown-item" href="profile.html">Profile</a></li>
                                        <li><a class="dropdown-item" href="exchange-currency.html">Exchange Currency</a></li>
                                        <li><a class="dropdown-item" href="money-transfer.html">Money Transfer</a></li>
                                        <li><a class="dropdown-item" href="request-money.html">Request Money</a></li>
                                        <li><a class="dropdown-item" href="withdraw.html">Withdraw Money</a></li>
                                        <li><a class="dropdown-item" href="transection-log.html">Transection Log</a></li>
                                        <li><a class="dropdown-item" href="invoice.html">Invoice</a></li>
                                        <li><a class="dropdown-item" href="vouchers.html">Vouchers</a></li>
                                        <li><a class="dropdown-item" href="support-ticket.html">Support Ticket</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="/blog">News</a></li>
                                {/*<li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="about.html">About us</a></li>
                                        <li><a class="dropdown-item" href="contact.html">Contact</a></li>
                                        <li><a class="dropdown-item" href="faq.html">FAQ page</a></li>
                                        <li><a class="dropdown-item" href="404.html">Error</a></li>
                                        <li><a class="dropdown-item" href="login.html">Login</a></li>
                                        <li><a class="dropdown-item" href="register.html">Signup</a></li>
                                        <li><a class="dropdown-item" href="refund.html">Refund</a></li>
                                        <li><a class="dropdown-item" href="privacy.html">Privacy</a></li>
                                        <li><a class="dropdown-item" href="tos.html">Terms and Services</a></li>
                                    </ul>
                                 </li> 
                                <li class="nav-item"><a class="nav-link" href="services.html">About Us</a></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="blog.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">News</a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="blog.html">News</a></li>
                                        <li><a class="dropdown-item" href="blog-details.html">News Details</a></li>
                                    </ul>
                                </li>
                                */}
                            </ul>
                           {/* <select name="lang-select" class="lang-select select-bar">
                                <option value="">En</option>
                                <option value="">Fr</option>
                                <option value="">Gr</option>
    </select>*/}
                            <div class="header-btn justify-content-end">
                                <a href="dashboard.html" class="bttn-small btn-emt"><i class="ti-crown"></i>Dashboard</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
