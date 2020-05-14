import React, { Component } from 'react'
import Sidebar from './Sidebar'
import BreadCrumb from './BreadCrumb'


export default class TransactionLog extends Component {
    render() {
        return (
            <div>
        <BreadCrumb title='Transaction Log' home='Dashboard' page='Transaction Log' />
        <section class="section-padding gradient-overlay poly-particle">
            <div class="container">
                <div class="row">
                    <Sidebar />
                    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                        <div class="dashboard-content">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                    <div class="dashboard-inner-content mb-30">
                                        <div class="card">
                                            <h5 class="card-header">Transection Log</h5>
                                            <div class="card-body p-0">
                                                <div class="accordion" id="accordionExample">
                                                    <div class="card">
                                                        <div class="t-log-title">
                                                            <div data-toggle="collapse" data-target="#collapseOne" aria-controls="collapseOne">
                                                                <div class="row">
                                                                    <div class="col-2 col-sm-3 col-md-1">
                                                                        <span class="d-block">Sep</span>
                                                                        <span class="d-block">26</span>
                                                                    </div>
                                                                    <div class="col-6 col-sm-6 col-md-8">
                                                                        <p>Jhon Larry</p>
                                                                        <p>Lorem ipsum dolor sit amet</p>
                                                                    </div>
                                                                    <div class="col-4 col-sm-3 col-md-3">
                                                                        <div class="trans-amnt">-5,364 USD</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                        <div id="collapseOne" class="collapse" data-parent="#accordionExample">
                                                            <div class="card-body pad-15">
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Send Money:</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p><strong>5,364 USD</strong></p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <strong>Transaction ID:</strong>
                                                                        <small>TRX-156705898536</small>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Charges:</p>
                                                                    </div>
                                                                    <div class="col col-sm-6 col-md-6">
                                                                        <p><strong>15.79 USD</strong></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Remaining Balance:</p>
                                                                    </div>
                                                                    <div class="col col-sm-6 col-md-6">
                                                                        <p><strong>1558.99 USD</strong></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Details:</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Send Money Transfer To samir</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p><small class="mr-2"><i class="fa fa-calendar-o"></i> 29 Aug, 2019</small> <small><i class="fa fa-clock-o"></i> 01:09 AM</small></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="t-log-title">
                                                            <div data-toggle="collapse" data-target="#collapseTwo" aria-controls="collapseTwo">
                                                                <div class="row">
                                                                    <div class="col-2 col-sm-3 col-md-1">
                                                                        <span class="d-block">Sep</span>
                                                                        <span class="d-block">26</span>
                                                                    </div>
                                                                    <div class="col-6 col-sm-6 col-md-8">
                                                                        <p>Jhon Larry</p>
                                                                        <p>Lorem ipsum dolor sit amet</p>
                                                                    </div>
                                                                    <div class="col-4 col-sm-3 col-md-3">
                                                                        <div class="trans-amnt">-5,364 USD</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="collapseTwo" class="collapse" data-parent="#accordionExample">
                                                            <div class="card-body pad-15">
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Send Money:</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p><strong>5,364 USD</strong></p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <strong>Transaction ID:</strong>
                                                                        <small>TRX-156705898536</small>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Charges:</p>
                                                                    </div>
                                                                    <div class="col col-sm-6 col-md-6">
                                                                        <p><strong>15.79 USD</strong></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Remaining Balance:</p>
                                                                    </div>
                                                                    <div class="col col-sm-6 col-md-6">
                                                                        <p><strong>1558.99 USD</strong></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Details:</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Send Money Transfer To samir</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p><small class="mr-2"><i class="fa fa-calendar-o"></i> 29 Aug, 2019</small> <small><i class="fa fa-clock-o"></i> 01:09 AM</small></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="t-log-title gray-bg">
                                                            <div data-toggle="collapse" data-target="#collapseThree" aria-controls="collapseTwo">
                                                                <div class="row">
                                                                    <div class="col-2 col-sm-3 col-md-1">
                                                                        <span class="d-block">Sep</span>
                                                                        <span class="d-block">26</span>
                                                                    </div>
                                                                    <div class="col-6 col-sm-6 col-md-8">
                                                                        <p>Jhon Larry</p>
                                                                        <p>Lorem ipsum dolor sit amet</p>
                                                                    </div>
                                                                    <div class="col-4 col-sm-3 col-md-3">
                                                                        <div class="trans-amnt">-5,364 USD</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="collapseThree" class="collapse" data-parent="#accordionExample">
                                                            <div class="card-body pad-15">
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Send Money:</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p><strong>5,364 USD</strong></p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <strong>Transaction ID:</strong>
                                                                        <small>TRX-156705898536</small>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Charges:</p>
                                                                    </div>
                                                                    <div class="col col-sm-6 col-md-6">
                                                                        <p><strong>15.79 USD</strong></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Remaining Balance:</p>
                                                                    </div>
                                                                    <div class="col col-sm-6 col-md-6">
                                                                        <p><strong>1558.99 USD</strong></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Details:</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Send Money Transfer To samir</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p><small class="mr-2"><i class="fa fa-calendar-o"></i> 29 Aug, 2019</small> <small><i class="fa fa-clock-o"></i> 01:09 AM</small></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="t-log-title gray-bg">
                                                            <div data-toggle="collapse" data-target="#collapseFour" aria-controls="collapseTwo">
                                                                <div class="row">
                                                                    <div class="col-2 col-sm-3 col-md-1">
                                                                        <span class="d-block">Sep</span>
                                                                        <span class="d-block">26</span>
                                                                    </div>
                                                                    <div class="col-6 col-sm-6 col-md-8">
                                                                        <p>Jhon Larry</p>
                                                                        <p>Lorem ipsum dolor sit amet</p>
                                                                    </div>
                                                                    <div class="col-4 col-sm-3 col-md-3">
                                                                        <div class="trans-amnt">-5,364 USD</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="collapseFour" class="collapse" data-parent="#accordionExample">
                                                            <div class="card-body pad-15">
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Send Money:</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p><strong>5,364 USD</strong></p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <strong>Transaction ID:</strong>
                                                                        <small>TRX-156705898536</small>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Charges:</p>
                                                                    </div>
                                                                    <div class="col col-sm-6 col-md-6">
                                                                        <p><strong>15.79 USD</strong></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Remaining Balance:</p>
                                                                    </div>
                                                                    <div class="col col-sm-6 col-md-6">
                                                                        <p><strong>1558.99 USD</strong></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Details:</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Send Money Transfer To samir</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p><small class="mr-2"><i class="fa fa-calendar-o"></i> 29 Aug, 2019</small> <small><i class="fa fa-clock-o"></i> 01:09 AM</small></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="t-log-title gray-bg">
                                                            <div data-toggle="collapse" data-target="#collapseFive" aria-controls="collapseOne">
                                                                <div class="row">
                                                                    <div class="col-2 col-sm-3 col-md-1">
                                                                        <span class="d-block">Sep</span>
                                                                        <span class="d-block">26</span>
                                                                    </div>
                                                                    <div class="col-6 col-sm-6 col-md-8">
                                                                        <p>Jhon Larry</p>
                                                                        <p>Lorem ipsum dolor sit amet</p>
                                                                    </div>
                                                                    <div class="col-4 col-sm-3 col-md-3">
                                                                        <div class="trans-amnt">-5,364 USD</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                        <div id="collapseFive" class="collapse" data-parent="#accordionExample">
                                                            <div class="card-body pad-15">
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Send Money:</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p><strong>5,364 USD</strong></p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <strong>Transaction ID:</strong>
                                                                        <small>TRX-156705898536</small>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Charges:</p>
                                                                    </div>
                                                                    <div class="col col-sm-6 col-md-6">
                                                                        <p><strong>15.79 USD</strong></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Remaining Balance:</p>
                                                                    </div>
                                                                    <div class="col col-sm-6 col-md-6">
                                                                        <p><strong>1558.99 USD</strong></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Details:</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Send Money Transfer To samir</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p><small class="mr-2"><i class="fa fa-calendar-o"></i> 29 Aug, 2019</small> <small><i class="fa fa-clock-o"></i> 01:09 AM</small></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="t-log-title gray-bg">
                                                            <div data-toggle="collapse" data-target="#collapseSix" aria-controls="collapseTwo">
                                                                <div class="row">
                                                                    <div class="col-2 col-sm-3 col-md-1">
                                                                        <span class="d-block">Sep</span>
                                                                        <span class="d-block">26</span>
                                                                    </div>
                                                                    <div class="col-6 col-sm-6 col-md-8">
                                                                        <p>Jhon Larry</p>
                                                                        <p>Lorem ipsum dolor sit amet</p>
                                                                    </div>
                                                                    <div class="col-4 col-sm-3 col-md-3">
                                                                        <div class="trans-amnt">-5,364 USD</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="collapseSix" class="collapse" data-parent="#accordionExample">
                                                            <div class="card-body pad-15">
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Send Money:</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p><strong>5,364 USD</strong></p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <strong>Transaction ID:</strong>
                                                                        <small>TRX-156705898536</small>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Charges:</p>
                                                                    </div>
                                                                    <div class="col col-sm-6 col-md-6">
                                                                        <p><strong>15.79 USD</strong></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Remaining Balance:</p>
                                                                    </div>
                                                                    <div class="col col-sm-6 col-md-6">
                                                                        <p><strong>1558.99 USD</strong></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Details:</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Send Money Transfer To samir</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p><small class="mr-2"><i class="fa fa-calendar-o"></i> 29 Aug, 2019</small> <small><i class="fa fa-clock-o"></i> 01:09 AM</small></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card">
                                                        <div class="t-log-title gray-bg">
                                                            <div data-toggle="collapse" data-target="#collapseSeven" aria-controls="collapseTwo">
                                                                <div class="row">
                                                                    <div class="col-2 col-sm-3 col-md-1">
                                                                        <span class="d-block">Sep</span>
                                                                        <span class="d-block">26</span>
                                                                    </div>
                                                                    <div class="col-6 col-sm-6 col-md-8">
                                                                        <p>Jhon Larry</p>
                                                                        <p>Lorem ipsum dolor sit amet</p>
                                                                    </div>
                                                                    <div class="col-4 col-sm-3 col-md-3">
                                                                        <div class="trans-amnt">-5,364 USD</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="collapseSeven" class="collapse" data-parent="#accordionExample">
                                                            <div class="card-body pad-15">
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Send Money:</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p><strong>5,364 USD</strong></p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <strong>Transaction ID:</strong>
                                                                        <small>TRX-156705898536</small>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Charges:</p>
                                                                    </div>
                                                                    <div class="col col-sm-6 col-md-6">
                                                                        <p><strong>15.79 USD</strong></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Remaining Balance:</p>
                                                                    </div>
                                                                    <div class="col col-sm-6 col-md-6">
                                                                        <p><strong>1558.99 USD</strong></p>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Details:</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p>Send Money Transfer To samir</p>
                                                                    </div>
                                                                    <div class="col col-sm-4 col-md-4">
                                                                        <p><small class="mr-2"><i class="fa fa-calendar-o"></i> 29 Aug, 2019</small> <small><i class="fa fa-clock-o"></i> 01:09 AM</small></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
        </section>
            </div>
        )
    }
}
