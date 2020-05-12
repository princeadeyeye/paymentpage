import React, { Component } from 'react'

export default class WithdrawMoney extends Component {
    render() {
        return (
            <div>
            <section class="breadcrumb-area gradient-overlay">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 centered">
                        <div class="banner-title">
                            <h2>Withdraw Money</h2>
                        </div>
                        <ul>
                            <li><a href="">Dashboard</a></li>
                            <li>Withdraw Money</li>
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
                                <li><a href="exchange-currency.html"><i class="ti-exchange-vertical"></i>Currency Exchange</a></li>
                                <li><a href="money-transfer.html"><i class="ti-direction"></i>Money Transfer</a></li>
                                <li><a href="request-money.html"><i class="ti-wallet"></i>Request Money</a></li>
                                <li class="active"><a href="withdraw.html"><i class="ti-flag"></i>Withdraw Money</a></li>
                                <li><a href="transection-log.html"><i class="ti-check-box"></i>Transection Log</a></li>
                                <li><a href="invoice.html"><i class="ti-announcement"></i>Invoice</a></li>
                                <li><a href="vouchers.html"><i class="ti-clipboard"></i>Voucher</a></li>
                                <li><a href="support-ticket.html"><i class="ti-help-alt"></i>Support</a></li>
                            </ul>
                        </aside>
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                        <div class="dashboard-content mb-30">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div class="dashboard-inner-content">
                                        <div class="card">
                                            <h5 class="card-header">Withdraw Money</h5>
                                            <div class="card-body">
                                                <form action="#">
                                                    <div class="row justify-content-end">
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                            <label for="a-trans">Enter Amount</label>
                                                            <input type="text" placeholder="0.00" id="a-trans" />
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                            <label for="currencyhf">Select Curreny</label>
                                                            <select name="currency-select" class="select-bar" id="currencyhf">
                                                                <option value="">USD</option>
                                                                <option value="">CAD</option>
                                                                <option value="">GBP</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                            <label for="currencyfghg">Select Bank</label>
                                                            <select name="currency-select" class="select-bar" id="currencyfghg">
                                                                <option value="">Bank London</option>
                                                                <option value="">Bank of SG</option>
                                                                <option value="">National bank</option>
                                                            </select>
                                                        </div>
                                                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                                           <button type="submit">Withdraw now</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-content">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div class="dashboard-inner-content">
                                        <div class="card">
                                            <h5 class="card-header">Withdraw History</h5>
                                            <div class="card-body">
                                                <div class="table-responsive table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm site-table">
                                                    <table class="table table-striped">
                                                        <thead class="thead-dark">
                                                            <tr>
                                                            <th scope="col">Trx</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Bank</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Details</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">TRX-156705898536</th>
                                                                <td>25th july</td>
                                                                <td>Larry</td>
                                                                <td>3695 USD</td>
                                                                <td><span class="badge badge-success">Withdraw</span></td>
                                                                <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">TRX-156705898536</th>
                                                                <td>25th july</td>
                                                                <td>Larry</td>
                                                                <td>3695 USD</td>
                                                                <td><span class="badge badge-warning">Pending</span></td>
                                                                <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">TRX-156705898536</th>
                                                                <td>25th july</td>
                                                                <td>Larry</td>
                                                                <td>3695 USD</td>
                                                                <td><span class="badge badge-success">Withdraw</span></td>
                                                                <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">TRX-156705898536</th>
                                                                <td>25th july</td>
                                                                <td>Larry</td>
                                                                <td>3695 USD</td>
                                                                <td><span class="badge badge-success">Withdraw</span></td>
                                                                <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">TRX-156705898536</th>
                                                                <td>25th july</td>
                                                                <td>Larry</td>
                                                                <td>3695 USD</td>
                                                                <td><span class="badge badge-success">Withdraw</span></td>
                                                                <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="centered">
                                                    <button class="bttn-small btn-fill"><i class="ti-angle-double-down"></i> Load more</button>
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
