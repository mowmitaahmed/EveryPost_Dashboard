import React from 'react';
import '../../styels/CardStatistics.scss';
import Header from '../Shared/Header/Header';
import Sidebar from '../Shared/Sidebar/Sidebar';
import RightArrows from '../../images/chevrons-right.svg';
import Settings from '../../images/settings.svg';
import PurpleHome from '../../images/PurpleHome.svg';
import { Link } from 'react-router-dom';
import SubscribersGained from '../Charts/SubscribersGained';
import OrdersRecieved from '../Charts/OrdersRecieved';
import RevenueGenerated from '../Charts/RevenueGenerated';
import QuarterlySales from '../Charts/QuarterlySales';
import SiteTraffics from '../Charts/SiteTraffics';
import ActiveUsers from '../Charts/ActiveUsers';
import Newsletter from '../Charts/Newsletter';
import Footer from '../Shared/Footer/Footer';

const CardStatistics = () => {
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
                                <div className="row user_edit_header">
                                    <div className="col-md-12">
                                        <div className="user_edit_header_left float-start d-flex py-2">
                                            <h2 className="h2-responsive pe-3 me-3">Statistics Cards</h2>
                                            <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item"><Link to="/" className="text-decoration-none"><img src={PurpleHome} alt={PurpleHome} /></Link><img className="ms-2" src={RightArrows} alt={RightArrows} /></li>
                                                <li className="list-inline-item text-purple">Card<img className="ms-2" src={RightArrows} alt={RightArrows} /></li>
                                                <li className="list-inline-item text-gray">Statistics Cards</li>
                                            </ul>
                                        </div>
                                        <div className="user_edit_header_left float-end">
                                            <button className="btn bg-purple rounded-circle"><img src={Settings} alt={Settings}/></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-lg-4 col-xl-2 col-md-2 mb-4">
                                        <div className="single_statistics bg-navy p-3 text-center">
                                            <div className="statistics_icon mb-3">
                                               <i className="far fa-eye hover-purple text-purple rounded-circle"></i>
                                            </div>
                                            <div className="statistics_details">
                                                <h2 className="h2-responsive text-white mb-0">36.9k</h2>
                                                <p className="p-responsive mb-0">Views</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 col-xl-2 col-md-2 mb-4">
                                        <div className="single_statistics bg-navy p-3 text-center">
                                            <div className="statistics_icon mb-3">
                                               <i className="far fa-comment-alt hover-green text-green rounded-circle"></i>
                                            </div>
                                            <div className="statistics_details">
                                                <h2 className="h2-responsive text-white mb-0">12k</h2>
                                                <p className="p-responsive mb-0">Comments</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 col-xl-2 col-md-2 mb-4">
                                        <div className="single_statistics bg-navy p-3 text-center">
                                            <div className="statistics_icon mb-3">
                                               <i className="fas fa-shopping-bag hover-yellow text-yellow rounded-circle"></i>
                                            </div>
                                            <div className="statistics_details">
                                                <h2 className="h2-responsive text-white mb-0">978</h2>
                                                <p className="p-responsive mb-0">Orders</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 col-xl-2 col-md-2 mb-4">
                                        <div className="single_statistics bg-navy p-3 text-center">
                                            <div className="statistics_icon mb-3">
                                               <i className="far fa-heart hover-red text-red rounded-circle"></i>
                                            </div>
                                            <div className="statistics_details">
                                                <h2 className="h2-responsive text-white mb-0">26.7k</h2>
                                                <p className="p-responsive mb-0">Favourited</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 col-xl-2 col-md-2 mb-4">
                                        <div className="single_statistics bg-navy p-3 text-center">
                                            <div className="statistics_icon mb-3">
                                               <i className="far fa-smile-beam hover-green text-green rounded-circle"></i>
                                            </div>
                                            <div className="statistics_details">
                                                <h2 className="h2-responsive text-white mb-0">689</h2>
                                                <p className="p-responsive mb-0">Reviews</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 col-xl-2 col-md-2 mb-4">
                                        <div className="single_statistics bg-navy p-3 text-center">
                                            <div className="statistics_icon mb-3">
                                               <i className="fas fa-truck hover-yellow text-yellow rounded-circle"></i>
                                            </div>
                                            <div className="statistics_details">
                                                <h2 className="h2-responsive text-white mb-0">2</h2>
                                                <p className="p-responsive mb-0">Returns</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side Icons */}
                                    <div className="col-sm-6 col-lg-3 col-md-3 mb-4">
                                        <div className="single_statistics bg-navy py-3 px-4 d-flex justify-content-between">
                                            <div className="statistics_details">
                                                <h2 className="h2-responsive text-white mb-1 mt-1">86%</h2>
                                                <p className="p-responsive mb-0">CPU Usage</p>
                                            </div>
                                            <div className="statistics_icon mt-1">
                                               <i className="fas fa-microchip hover-purple text-purple rounded-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 col-md-3 mb-4">
                                        <div className="single_statistics bg-navy p-3 d-flex justify-content-between">
                                            <div className="statistics_details">
                                                <h2 className="h2-responsive text-white mb-1 mt-1">1.2gb</h2>
                                                <p className="p-responsive mb-0">Memory Usage</p>
                                            </div>
                                            <div className="statistics_icon mt-1">
                                               <i className="far fa-hdd hover-green text-green rounded-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 col-md-3 mb-4">
                                        <div className="single_statistics bg-navy p-3 d-flex justify-content-between">
                                            <div className="statistics_details">
                                                <h2 className="h2-responsive text-white mb-1 mt-1">0.1%</h2>
                                                <p className="p-responsive mb-0">Downtime Ratio</p>
                                            </div>
                                            <div className="statistics_icon mt-1">
                                               <i className="fas fa-heartbeat hover-red text-red rounded-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 col-md-3 mb-4">
                                        <div className="single_statistics bg-navy p-3 d-flex justify-content-between">
                                            <div className="statistics_details">
                                                <h2 className="h2-responsive text-white mb-1 mt-1">13</h2>
                                                <p className="p-responsive mb-0">Issues Found</p>
                                            </div>
                                            <div className="statistics_icon mt-1">
                                               <i className="fas fa-exclamation-triangle hover-yellow text-yellow rounded-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Left Icon with Appex Chart */}
                                    <div className="col-sm-6 col-lg-3 col-md-3 mb-4">
                                        <div className="single_statistics bg-navy">
                                            <div className="statistics_icon mt-1 mb-3 pt-4 px-4">
                                               <i className="fas fa-user-friends hover-purple text-purple rounded-circle"></i>
                                            </div>
                                            <div className="statistics_details px-4">
                                                <h2 className="h2-responsive text-white mb-1 mt-1">92.6k</h2>
                                                <p className="p-responsive mb-0">Subscribers Gained</p>
                                            </div>
                                            <div className="statistics_chart">
                                                <SubscribersGained />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 col-md-3 mb-4">
                                        <div className="single_statistics bg-navy">
                                            <div className="statistics_icon mt-1 mb-3 pt-4 px-4">
                                               <i className="fas fa-archive hover-green text-green rounded-circle"></i>
                                            </div>
                                            <div className="statistics_details px-4">
                                                <h2 className="h2-responsive text-white mb-1 mt-1">97.5k</h2>
                                                <p className="p-responsive mb-0">Revenue Generated</p>
                                            </div>
                                            <div className="revenue_generated_chart">
                                                <RevenueGenerated />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 col-md-3 mb-4">
                                        <div className="single_statistics bg-navy">
                                            <div className="statistics_icon mt-1 mb-3 pt-4 px-4">
                                               <i className="fas fa-cart-arrow-down hover-red text-red rounded-circle"></i>
                                            </div>
                                            <div className="statistics_details px-4">
                                                <h2 className="h2-responsive text-white mb-1 mt-1">36%</h2>
                                                <p className="p-responsive mb-0">Quarterly Sales</p>
                                            </div>
                                            <div className="quarterly_sales_chart">
                                                <QuarterlySales />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3 col-md-3 mb-4">
                                        <div className="single_statistics bg-navy">
                                            <div className="statistics_icon mt-1 mb-3 pt-4 px-4">
                                               <i className="fab fa-codepen hover-yellow text-yellow rounded-circle"></i>
                                            </div>
                                            <div className="statistics_details px-4">
                                                <h2 className="h2-responsive text-white mb-1 mt-1">97.5K</h2>
                                                <p className="p-responsive mb-0">Orders Received</p>
                                            </div>
                                            <div className="statistics_chart">
                                                <OrdersRecieved />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Appex Chart with Right Icon */}
                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                                        <div className="single_statistics bg-navy">
                                            <div className="statistics_body d-flex justify-content-between pt-4">
                                                <div className="statistics_details px-4">
                                                    <h2 className="h2-responsive text-white mb-1 mt-1">78.9k</h2>
                                                    <p className="p-responsive mb-0">Site Traffic</p>
                                                </div>
                                                <div className="statistics_icon mt-1 mb-3 px-4">
                                                <i className="fas fa-desktop hover-purple text-purple rounded-circle"></i>
                                                </div>
                                            </div>
                                            <div className="statistics_chart">
                                                <SiteTraffics />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                                        <div className="single_statistics bg-navy">
                                            <div className="statistics_body d-flex justify-content-between pt-4">
                                                <div className="statistics_details px-4">
                                                    <h2 className="h2-responsive text-white mb-1 mt-1">659.8k</h2>
                                                    <p className="p-responsive mb-0">Active Users</p>
                                                </div>
                                                <div className="statistics_icon mt-1 mb-3 px-4">
                                                    <i className="fas fa-user-check hover-green text-green rounded-circle"></i>
                                                </div>
                                            </div>
                                            <div className="statistics_chart active_users_chart">
                                                <ActiveUsers />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                                        <div className="single_statistics bg-navy">
                                            <div className="statistics_body d-flex justify-content-between pt-4">
                                                <div className="statistics_details px-4">
                                                    <h2 className="h2-responsive text-white mb-1 mt-1">28.7k</h2>
                                                    <p className="p-responsive mb-0">Newsletter</p>
                                                </div>
                                                <div className="statistics_icon mt-1 mb-3 px-4">
                                                    <i className="far fa-envelope hover-yellow text-yellow rounded-circle"></i>
                                                </div>
                                            </div>
                                            <div className="statistics_chart newsletter_chart">
                                                <Newsletter />
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

export default CardStatistics;