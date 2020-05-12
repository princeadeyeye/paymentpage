import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
            <aside class="sidebar">
                <ul>
                    <li class="active"><a href="dashboard.html"><i class="ti-crown"></i>Dashboard</a></li>
                    <li><a href="profile.html"><i class="ti-user"></i>Profile</a></li>
                    <li><a href="exchange-currency.html"><i class="ti-exchange-vertical"></i>Currency Exchange</a></li>
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
        )
    }
}
