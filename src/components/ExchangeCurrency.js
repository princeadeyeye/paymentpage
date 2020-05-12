import React, { Component } from 'react'

export default class ExchangeCurrency extends Component {
    render() {
        return (
            <div>
            <section class="breadcrumb-area gradient-overlay">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 centered">
                        <div class="banner-title">
                            <h2>Exchange Currency</h2>
                        </div>
                        <ul>
                            <li><a href="">Dashboard</a></li>
                            <li>Exchange Currency</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
            <section class="section-padding gradient-overlay poly-particle">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                        <aside class="sidebar">
                            <ul>
                                <li><a href="dashboard.html"><i class="ti-crown"></i>Dashboard</a></li>
                                <li><a href="profile.html"><i class="ti-user"></i>Profile</a></li>
                                <li class="active"><a href="exchange-currency.html"><i class="ti-exchange-vertical"></i>Currency Exchange</a></li>
                                <li><a href="money-transfer.html"><i class="ti-direction"></i>Money Transfer</a></li>
                                <li><a href="request-money.html"><i class="ti-wallet"></i>Request Money</a></li>
                                <li><a href="withdraw.html"><i class="ti-flag"></i>Withdraw Money</a></li>
                                <li><a href="transection-log.html"><i class="ti-check-box"></i>Transection Log</a></li>
                                <li><a href="invoice.html"><i class="ti-announcement"></i>Invoice</a></li>
                                <li><a href="vouchers.html"><i class="ti-clipboard"></i>Voucher</a></li>
                                <li><a href="support-ticket.html"><i class="ti-help-alt"></i>Support</a></li>
                            </ul>
                        </aside>
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                        <div class="dashboard-content">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div class="dashboard-inner-content">
                                        <div class="card">
                                            <h5 class="card-header">Exchange Currency Form</h5>
                                            <div class="card-body">
                                                <form action="#">
                                                    <div class="row justify-content-end">
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                            <label for="a-trans">Amount Exchange</label>
                                                            <input type="text" placeholder="0.00" id="a-trans"/>
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                            <label for="currencyhf">From Curreny</label>
                                                            <select name="currency-select" class="select-bar" id="currencyhf">
                                                                <option value="">Select Currency</option>
                                                                <option value="">USD</option>
                                                                <option value="">CAD</option>
                                                                <option value="">GBP</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                            <label for="currencyfghg">To Curreny</label>
                                                            <select name="currency-select" class="select-bar" id="currencyfghg">
                                                                <option value="">Select Currency</option>
                                                                <option value="">USD</option>
                                                                <option value="">CAD</option>
                                                                <option value="">GBP</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                           <button type="submit">Check Calculation</button>
                                                        </div>
                                                    </div>
                                                </form>
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
