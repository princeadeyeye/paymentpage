import React, { Component } from 'react'

export default class Invoice extends Component {
    render() {
        return (
            <div>
            <section class="breadcrumb-area gradient-overlay">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12 centered">
                        <div class="banner-title">
                            <h2>Invoice</h2>
                        </div>
                        <ul>
                            <li><a href="">Dashboard</a></li>
                            <li>Invoice</li>
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
                                <li><a href="withdraw.html"><i class="ti-flag"></i>Withdraw Money</a></li>
                                <li><a href="transection-log.html"><i class="ti-check-box"></i>Transection Log</a></li>
                                <li class="active"><a href="invoice.html"><i class="ti-announcement"></i>Invoice</a></li>
                                <li><a href="vouchers.html"><i class="ti-clipboard"></i>Voucher</a></li>
                                <li><a href="support-ticket.html"><i class="ti-help-alt"></i>Support</a></li>
                            </ul>
                        </aside>
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                        <div class="dashboard-content">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">                               
                                    <div class="dashboard-content">
                                        <div class="row">
                                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <div class="dashboard-inner-content">
                                                    <div class="card">
                                                        <h5 class="card-header">My Invoices</h5>
                                                        <div class="card-body">
                                                            <div class="row justify-content-end">
                                                                <div class="col-xl-8">
                                                                    <div class="essen-btns">
                                                                        <a href="" class="active"><i class="ti-check-box"></i>All Invoices</a>
                                                                        <a href=""><i class="ti-pencil"></i>Create Invoice</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="table-responsive table-responsive-xl table-responsive-lg table-responsive-md table-responsive-sm site-table">
                                                                <table class="table table-striped">
                                                                    <thead class="thead-dark">
                                                                        <tr>
                                                                        <th scope="col">Name</th>
                                                                        <th scope="col">Email</th>
                                                                        <th scope="col">Amount</th>
                                                                        <th scope="col">Publish</th>
                                                                        <th scope="col">Status</th>
                                                                        <th scope="col">Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Paylup</th>
                                                                            <td>Paylup@gmail.com	</td>
                                                                            <td>3070.00 USD	</td>
                                                                            <td><span class="badge badge-warning">No</span></td>
                                                                            <td><span class="badge badge-success">Paid</span></td>
                                                                            <td><a href="" class="btn btn-info btn-sm"><i class="ti ti-eye"></i></a> <a href="" class="btn btn-info btn-sm"><i class="ti-download"></i></a></td>
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
                    </div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}
