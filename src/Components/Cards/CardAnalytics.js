import React, { useState } from 'react';
import '../../styels/CardAnalytics.scss';
import Breadcumbs from '../Shared/Breadcumbs';
import Header from '../Shared/Header/Header';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';
import AvgSessions from '../Charts/AvgSessions';
import AvgSessionsBlock from '../Blocks/AvgSessionsBlock';
import ClientRetention from '../Charts/ClientRetention';

const CardAnalytics = () => {
    const [dropdownSession, setDropdownSession] = useState(0);
    const [dropdownProduct, setDropdownProduct] = useState(0);
    const [dropdownCustomer, setDropdownCustomer] = useState(0);
    const [dropdownSupport, setDropdownSupport] = useState(0);
    const breadcumbs = {
        title: 'Analytics Cards',
        page: 'Card'
    }
    const dropClose = {
    transform: 'scaleY(0)'
    }
    const dropOpen = {
    transform: 'translate3d(-42px, 18px, 0px)'
    }
    const eventDropdownSession = (e) => {
        setDropdownSession(!dropdownSession);
    }
    const eventDropdownProduct = (e) => {
        setDropdownProduct(!dropdownProduct);
    }
    const eventDropdownCustomer = (e) =>{
        setDropdownCustomer(!dropdownCustomer);
    }
    const eventDropdownSupport = (e) => {
        setDropdownSupport(!dropdownSupport);
    }

    // Task completed
    const tasks = [{
        title: 'Refactor button component'
    },{
        title: 'Submit report to admin'
    },{
        title: 'Prepare presentation'
    },{
        title: 'Calculate monthly income'
    }
]
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar_area">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 analytics_area card_actions_area">
                        <Header />
                        <div className="content_area">
                            <div className="container">
                                <Breadcumbs breadcumb={breadcumbs} />
                                <div className="row">
                                    <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                                        <div className="single_analytics bg-navy px-3 py-4">
                                            <div className="single_analytics_header d-flex justify-content-between">
                                                <h4 className="h4-responsive mb-1 text-white">Session By Device</h4>
                                                <div className="single_dropdown">
                                                    <button onClick={(e) => eventDropdownSession(e)} className="btn text-gray pt-0 pb-2" type="button" >Last 7 Days <i className="fas fa-chevron-down ms-1"></i></button>
                                                    <ul className="list-unstyled" style={dropdownSession ? {dropOpen} : dropClose}>
                                                        <li>Last 28 Days</li>
                                                        <li>Last Month</li>
                                                        <li>Last Year</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                                        <div className="single_analytics bg-navy px-3 py-4">
                                            <div className="single_analytics_header d-flex justify-content-between">
                                                <h4 className="h4-responsive mb-1 text-white">Product Orders</h4>
                                                <div className="single_dropdown">
                                                    <button onClick={(e) => eventDropdownProduct(e)} className="btn text-gray pt-0 pb-2" type="button" >Last 7 Days <i className="fas fa-chevron-down"></i></button>
                                                    <ul className="list-unstyled" style={dropdownProduct ? {dropOpen} : dropClose}>
                                                        <li>Last 28 Days</li>
                                                        <li>Last Month</li>
                                                        <li>Last Year</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4 mb-4">
                                        <div className="single_analytics bg-navy px-3 py-4">
                                            <div className="single_analytics_header d-flex justify-content-between">
                                                <h4 className="h4-responsive mb-1 text-white">Customers</h4>
                                                <div className="single_dropdown">
                                                    <button onClick={(e) => eventDropdownCustomer(e)} className="btn text-gray pt-0 pb-2" type="button" >Last 7 Days <i className="fas fa-chevron-down"></i></button>
                                                    <ul className="list-unstyled" style={dropdownCustomer ? {dropOpen} : dropClose}>
                                                        <li>Last 28 Days</li>
                                                        <li>Last Month</li>
                                                        <li>Last Year</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6 col-md-6 mb-4">
                                        <div className="single_analytics bg-navy px-3 py-4">
                                            <div className="single_analytics_header d-flex justify-content-between">
                                                <div className="single_analytics_header_left">
                                                    <h4 className="h4-responsive mb-1 text-white">Sales</h4>
                                                    <p className="p-responsive mb-0 text-gray">Last 6 months</p>
                                                </div>
                                                <i className="fas fa-ellipsis-v text-gray"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6 col-md-6 mb-4">
                                        <div className="single_analytics bg-navy px-3 py-4">
                                            <div className="single_analytics_header d-flex justify-content-between">
                                                <h4 className="h4-responsive mb-1 text-white">Support Tracker</h4>
                                                <div className="single_dropdown">
                                                    <button onClick={(e) => eventDropdownSupport(e)} className="btn text-gray pt-0 pb-2" type="button" >Last 7 Days <i className="fas fa-chevron-down"></i></button>
                                                    <ul className="list-unstyled" style={dropdownSupport ? {dropOpen} : dropClose}>
                                                        <li>Last 28 Days</li>
                                                        <li>Last Month</li>
                                                        <li>Last Year</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-8 col-md-8 mb-4">
                                        <div className="single_analytics bg-navy px-3 py-4">
                                            <div className="single_analytics_header d-flex justify-content-between">
                                                <h4 className="h4-responsive mb-1 text-white">Revenue</h4>
                                                <i className="fas fa-cog text-gray"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-4 col-md-4 mb-4">
                                        <div className="single_analytics bg-navy px-3 py-4">
                                            <div className="single_analytics_header d-flex justify-content-between">
                                                <h4 className="h4-responsive mb-1 text-white">Goal Overview</h4>
                                                <i className="far fa-question-circle text-gray"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <AvgSessionsBlock />
                                    <div className="col-sm-12 col-lg-6 col-md-6 mb-4">
                                        <div className="single_analytics bg-navy">
                                            <div className="single_analytics_header d-flex justify-content-between p-3">
                                                <div className="single_analytics_header_left">
                                                     <p className="p-responsive mb-2 text-gray"><strong>2 task completed out of 10</strong></p>
                                                    <div className="progress progress_bar_purple mb-1" style={{height:'5px'}}>
                                                        <div className="progress-bar rounded" role="progressbar" style={{width: '20%', height:'5px'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                                <p className="p-responsive mb-0 text-gray">Sat, 16, Feb</p>
                                            </div>
                                            <hr className="text-gray m-0" />
                                            <ul className="analytics-list list-group list-unstyled">
                                                {
                                                    tasks.map(task => (

                                                        <li className="d-flex bg-navy justify-content-between align-items-center py-3 border-0 list-group-item">
                                                        <div className="float-start">
                                                            <p className="p-responsive mb-0 text-gray">{task.title}</p>
                                                            <small className="text-gray">16 Feb 2020 - 2 hrs</small>
                                                        </div>
                                                        <div className="float-end">
                                                             <button className="btn rounded-circle border-purple me-2"><i className="fas fa-check text-purple"></i></button>
                                                             <button className="btn rounded-circle border-purple me-2"><i className="fas fa-pen text-purple"></i></button>
                                                             <button className="btn rounded-circle border-purple"><i className="fas fa-trash text-purple"></i></button>
                                                        </div>
                                                    </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-9 mb-4">
                                        <div className="single_analytics bg-navy px-3 py-4">
                                            <div className="single_analytics_header d-flex justify-content-between">
                                                <h4 className="h4-responsive mb-1 text-white">Sales</h4>
                                                <i className="fas fa-cog text-gray"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-3 mb-4">
                                        <div className="single_analytics bg-navy px-3 py-4">
                                            <div className="single_analytics_body">
                                                <h1 className="mb-0"><sup class="font-medium-3 mr-50">$</sup>23,597</h1>
                                                <small className="text-gray"><span class="text-muted">Deposits: </span>$20,065</small>
                                                <h5 className="mt-1"><span className="text-success">+5.2% ($956)</span></h5>
                                                <button className="w-100 box-shadow-1 mt-4 py-2 btn bg-purple text-white">Add Funds <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg></button>
                                            </div>
                                            <hr className="text-gray"/>
                                            <div className="single_analytics_footer">
                                                <div className="analytics_footer_progress_bar">
                                                    <small className="mb-2 text-gray">Earned: $56,156</small>
                                                    <div className="progress progress_bar_green mb-2 mt-1" style={{height: '5px'}}>
                                                        <div className="progress-bar rounded" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%', height: '5px'}}></div>
                                                    </div>
                                                </div>
                                                <div className="analytics_footer_progress_bar">
                                                    <small className="mb-2 text-gray">Duration: 2y</small>
                                                    <div className="progress progress_bar_yellow mb-2 mt-1" style={{height: '5px'}}>
                                                        <div className="progress-bar rounded" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%', height: '5px'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-4 col-md-4 mb-4">
                                        <div className="single_analytics bg-navy px-3 py-4">
                                            <div className="single_analytics_header">
                                                <h4 className="h4-responsive mb-1 text-white">Browser Statistics</h4>
                                            </div>
                                            <div className="single_analytics_body">
                                                <div className="d-flex justify-content-between mb-1 mt-3">
                                                    <div className="browser-info">
                                                        <p className="mb-0 text-gray">Google Chrome</p>
                                                        <h4 className="h4-responsive">73%</h4>
                                                    </div>
                                                    <div className="stastics-info text-right">
                                                        <span className="text-gray">800<i className="fas fa-arrow-up ms-2 text-success"></i></span>
                                                        <span className="text-muted d-block">13:16</span>
                                                    </div>
                                                </div>
                                                <div className="progress progress_bar_purple mb-1" style={{height:'5px'}}>
                                                    <div className="progress-bar rounded" role="progressbar" style={{width: '73%', height:'5px'}} aria-valuenow="73" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="d-flex justify-content-between mb-1 mt-3">
                                                    <div className="browser-info">
                                                        <p className="mb-0 text-gray">Opera</p>
                                                        <h4 className="h4-responsive">8%</h4>
                                                    </div>
                                                    <div className="stastics-info text-right">
                                                        <span className="text-gray">-200<i className="fas fa-arrow-down ms-2 text-danger"></i></span>
                                                        <span className="text-muted d-block">13:16</span>
                                                    </div>
                                                </div>
                                                <div className="progress progress_bar_purple mb-1" style={{height:'5px'}}>
                                                    <div className="progress-bar rounded" role="progressbar" style={{width: '8%', height:'5px'}} aria-valuenow="8" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="d-flex justify-content-between mb-1 mt-3">
                                                    <div className="browser-info">
                                                        <p className="mb-0 text-gray">Firefox</p>
                                                        <h4 className="h4-responsive">19%</h4>
                                                    </div>
                                                    <div className="stastics-info text-right">
                                                        <span className="text-gray">100<i className="fas fa-arrow-up ms-2 text-sucess"></i></span>
                                                        <span className="text-muted d-block">13:16</span>
                                                    </div>
                                                </div>
                                                <div className="progress progress_bar_purple mb-1" style={{height:'5px'}}>
                                                    <div className="progress-bar rounded" role="progressbar" style={{width: '19%', height:'5px'}} aria-valuenow="19" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                                <div className="d-flex justify-content-between mb-1 mt-3">
                                                    <div className="browser-info">
                                                        <p className="mb-0 text-gray">Internet Explorer</p>
                                                        <h4 className="h4-responsive">27%</h4>
                                                    </div>
                                                    <div className="stastics-info text-right">
                                                        <span className="text-gray">-450<i className="fas fa-arrow-down ms-2 text-danger"></i></span>
                                                        <span className="text-muted d-block">13:16</span>
                                                    </div>
                                                </div>
                                                <div className="progress progress_bar_purple mb-1" style={{height:'5px'}}>
                                                    <div className="progress-bar rounded" role="progressbar" style={{width: '27%', height:'5px'}} aria-valuenow="27" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-8 col-sm-12 mb-4">
                                        <div className="single_analytics bg-navy px-3 py-4">
                                            <div className="single_analytics_header">
                                                <h4 className="h4-responsive mb-1 text-white">Client Retention</h4>
                                            </div>
                                            <div className="client_retention_chart mt-3">
                                                <ClientRetention />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardAnalytics;