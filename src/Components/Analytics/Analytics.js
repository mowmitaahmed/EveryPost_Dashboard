import React from 'react';
import '../../styels/Analytics/Analytics.scss';
import Header from '../Shared/Header/Header';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Left from '../../images/decore-left.2d9d23e0.png';
import Right from '../../images/decore-right.da0ab5cd.png';
import award from '../../images/award.svg';
import Users from '../../images/users.svg';
import bag from '../../images/shopping-bag.svg';
import Down from '../../images/chevron-down.svg';
import Vertical from '../../images/more-vertical.svg';
import Avatar1 from '../../images/avatar1.jpg';
import Avatar2 from '../../images/avatar2.jpg';
import Avatar3 from '../../images/avatar3.jpg';
import Avatar4 from '../../images/avatar4.jpg';
import Chart  from 'react-apexcharts'
import { Link } from 'react-router-dom';
import SubscribersGained from '../Charts/SubscribersGained';
import OrdersRecieved from '../Charts/OrdersRecieved';
import Footer from '../Shared/Footer/Footer';
import AvgSessions from '../Charts/AvgSessions';
import AvgSessionsBlock from '../Blocks/AvgSessionsBlock';
// import ReactTooltip from 'react-tooltip';


const Analytics = () => {

    // Support Taker Chart
    const support = [83];
    const supportOptions = {
              chart: {
                height: 280,
                type: 'radialBar',
                offsetY: -10
              },
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 135,
                  dataLabels: {
                    name: {
                      fontSize: '16px',
                      color: undefined,
                      offsetY: 120
                    },
                    value: {
                      offsetY: 76,
                      fontSize: '22px',
                      color: undefined,
                      formatter: function (val) {
                        return val + "%";
                      }
                    }
                  }
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
              },
              stroke: {
                dashArray: 4
              },
              labels: ['Completed Tickets'],
            }

    // Product Orders Chart
    const product_orders_Series = [70, 52, 26]
    const product_orders_options= {
              chart: {
                height: 350,
                type: 'radialBar'
              },
              plotOptions: {
                radialBar: {
                    track: {
                        show: true,
                        startAngle: undefined,
                        endAngle: undefined,
                        background: '#262C49',
                        strokeWidth: '97%',
                        opacity: 1,
                        margin: 5, 
                        dropShadow: {
                            enabled: false,
                            top: 0,
                            left: 0,
                            blur: 3,
                            opacity: 0.5
                        }
                    },
                  dataLabels: {
                    name: {
                      fontSize: '14px',
                      lineHeight: '21px',
                      color: '#c2c6dc',
                      fontWeight: '400'
                    },
                    value: {
                        fontSize: '14px',
                        lineHeight: '21px',
                        color: '#c2c6dc',
                        fontWeight: '400'
                    },
                    total: {
                      show: true,
                      label: 'Total',
                      formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return 249
                      }
                    }
                  }
                }
              },

              stroke: {
                lineCap: "round",
                colors: ['#7367f0', '#C8813E', '#C14242'],
                width: 18,
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  type: "horizontal",
                  shadeIntensity: 0.5,
                  gradientToColors: ['#7367f0', '#C8813E', '#C14242'], // optional, if not defined - uses the shades of same color in series
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 50, 100],
                  colorStops: []
                }
              },
              labels: ['Finished', 'Total', 'Rejected'],
            }

    // Sales Stats
    const sales_Stat_series = [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80],
      }]
      const sales_Stat_options = {
        chart: {
          height: 350,
          type: 'radar',
        //   background: '#262C48',
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          },
          toolbar: {
              show: false
          }
        },
        plotOptions:{
            radar:{
                track: {
                    show: true,
                    startAngle: undefined,
                    endAngle: undefined,
                    background: '#262C49',
                    strokeWidth: '97%',
                    opacity: 1,
                    margin: 5, 
                    dropShadow: {
                        enabled: false,
                        top: 0,
                        left: 0,
                        blur: 3,
                        opacity: 0.5
                    }
                },
            }
        },
        legend: {
            show: false
        },
        stroke: {
          width: 2
        },
        fill: {
          opacity: 0.1,
          colors: ['#9496D6', '#1CD4D0']
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June']
        }
      }

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar_area">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 analytics_area">
                        <Header />
                        <div className="content_area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="congratulations_box rounded py-2">
                                            <div className="congratulations_box_decor">
                                                <img className="decore_left" src={Left} alt={Left}/>
                                                <img className="decore_right" src={Right} alt={Right}/>
                                                <span className="shadow-lg p-3 rounded-circle d-flex-inline"><img className="decore_icon" src={award} alt={award} /></span>
                                                
                                            </div>
                                            <div className="congratulations_box_details text-center text-white px-5">
                                                <h1>Congratulations John,</h1>
                                                <p>You have done 57.6% more sales today. Check your new badge in your profile.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-4">
                                        <div className="subscriber_gained rounded">
                                            <div className="subscriber_details text-white pt-4 ps-4">
                                                <span className="rounded-circle p-2 mb-3">
                                                   <img src={Users} alt={Users} />
                                                </span>
                                                <h2 className="h2-responsive mt-3 mb-2">92.6k</h2>
                                                <p>Subscribers Gained</p>
                                            </div>
                                            <div className="subscribar_chart">
                                                <SubscribersGained />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-4">
                                        <div className="order_gained rounded">
                                            <div className="order_details text-white pt-4 ps-4">
                                                <span className="rounded-circle p-2 mb-3">
                                                   <img src={bag} alt={bag} />
                                                </span>
                                                <h2 className="h2-responsive mt-3 mb-2">97.5K</h2>
                                                <p>Orders Received</p>
                                            </div>
                                            <div className="subscribar_chart orders_recieved_chart">
                                                <OrdersRecieved />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <AvgSessionsBlock />
                                    <div className="col-md-6 col-sm-12 col-xs-12 mb-4">
                                        <div className="support_tracker rounded p-4">
                                            <div className="row support_tracker_top d-flex justify-content-between">
                                                <div className="col-md-9">
                                                    <h4 className="h4-responsive">Support Tracker</h4>
                                                </div>
                                                <div className="col-md-3 float-end">
                                                    <div className="dropdown ms-auto">
                                                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Last 7 Days
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                            <li><Link to="/" className="dropdown-item">Last 28 Days</Link></li>
                                                            <li><Link to="/" className="dropdown-item">Last Month</Link></li>
                                                            <li><Link to="/" className="dropdown-item">Last Year</Link></li>
                                                            <div className="vs-dropdown--menu--after" style={{top: '-1px'}}></div>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row support_taker_chart_area">
                                                <div className="col-md-3">
                                                    <h1 className="h1-responsive mb-0">163</h1>
                                                    <small>Tickets</small>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="support_taker_chart">
                                                    <Chart className="rounded-bottom" options={supportOptions} series={support} type="radialBar" width={'100%'} height={'280px'}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row ticket_row">
                                                <div className="col-md-4">
                                                    <div className="single_ticket_row text-center">
                                                        <h5 className="h5-responsive mb-0">New Tickets</h5>
                                                        <h6 className="h6-responsive">29</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single_ticket_row text-center">
                                                        <h5 className="h5-responsive mb-0">Open Tickets</h5>
                                                        <h6 className="h6-responsive">63</h6>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="single_ticket_row text-center">
                                                        <h5 className="h5-responsive mb-0">Response Time</h5>
                                                        <h6 className="h6-responsive">1d</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="product_orders mb-4 rounded p-4">
                                            <div className="product_orders_top d-flex justify-content-between">
                                                <h2>Product Orders</h2>
                                                <div className="dropdown ms-auto">
                                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Last 7 Days
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <li><Link to="/" className="dropdown-item">Last 28 Days</Link></li>
                                                        <li><Link to="/" className="dropdown-item">Last Month</Link></li>
                                                        <li><Link to="/" className="dropdown-item">Last Year</Link></li>
                                                        <div className="vs-dropdown--menu--after" style={{top: '-1px'}}></div>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="product_orders_chart">
                                                <Chart className="rounded-bottom" options={product_orders_options} series={product_orders_Series} type="radialBar" width={'100%'} height={'350px'}/>
                                            </div>
                                            <div className="product_orders_bottom">
                                                <ul className="list-inline">
                                                    <li className="d-flex justify-content-between">
                                                        <span className="product_order_list_item">
                                                            <span className="rounded-circle product_order_list"></span>
                                                            <span>Finished</span>
                                                        </span>
                                                        <span className="product_order_list_item_light">23043</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <span className="product_order_list_item">
                                                            <span className="rounded-circle product_order_list"></span>
                                                            <span>Pending</span>
                                                        </span>
                                                        <span className="product_order_list_item_light">14658</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <span className="product_order_list_item">
                                                            <span className="rounded-circle product_order_list"></span>
                                                            <span>Rejected</span>
                                                        </span>
                                                        <span className="product_order_list_item_light">4758</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="sales_states rounded p-4 mb-4">
                                            <div className="sales_states_top d-flex justify-content-between">
                                                <div className="sales_states_details">
                                                     <h4>Sales Stats</h4>
                                                     <h6>Last 6 Months</h6>
                                                     <ul className="list-unstyled list-inline">
                                                         <li className="list-inline-item">Sales</li>
                                                         <li className="list-inline-item">Visits</li>
                                                     </ul>
                                                </div>
                                                <img src={Vertical} alt={Vertical}/>
                                            </div>
                                            <div className="sales_stats_chart">
                                                <Chart className="rounded-bottom" options={sales_Stat_options} series={sales_Stat_series} type="radar" width={'100%'} height={'350px'}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="activity_timeline rounded p-4 mb-4">
                                            <h4 className="h4-responsive">Activity Timeline</h4>
                                            <ul className="list-unstyled vx-timeline">
                                                <li>
                                                    <div className="timeline-icon bg-primary">
                                                        <span className="feather-icon select-none relative">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus text-white stroke-current w-5 h-5">
                                                                <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div className="timeline-info">
                                                        <p className="font-semibold mb-0">Client Meeting</p>
                                                        <span className="activity-desc">Bonbon macaroon jelly beans gummi bears jelly lollipop apple</span>
                                                    </div>
                                                    <small className="text-grey activity-e-time">25 mins Ago</small>
                                                </li>
                                                <li>
                                                    <div className="timeline-icon bg-warning">
                                                        <span className="feather-icon select-none relative">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail text-white stroke-current w-5 h-5">
                                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                                <polyline points="22,6 12,13 2,6"></polyline>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div className="timeline-info">
                                                        <p className="font-semibold">Email Newsletter</p>
                                                        <span className="activity-desc">Cupcake gummi bears soufflé caramels candy</span>
                                                    </div>
                                                    <small className="text-grey activity-e-time">15 Days Ago</small>
                                                </li>
                                                <li>
                                                    <div className="timeline-icon bg-danger">
                                                        <span className="feather-icon select-none relative">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users text-white stroke-current w-5 h-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div className="timeline-info">
                                                        <p className="font-semibold">Plan Webinar</p>
                                                        <span className="activity-desc">Candy ice cream cake. Halvah gummi bears</span>
                                                    </div>
                                                    <small className="text-grey activity-e-time">20 days ago</small>
                                                </li>
                                                <li>
                                                    <div className="timeline-icon bg-primary">
                                                        <span className="feather-icon select-none relative">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tv text-white stroke-current w-5 h-5"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                                                        </span>
                                                    </div>
                                                    <div className="timeline-info">
                                                        <p className="font-semibold">Marketing</p>
                                                        <span className="activity-desc">Candy ice cream cake. Halvah gummi bears Cupcake gummi bears.</span>
                                                    </div>
                                                    <small className="text-grey activity-e-time">28 days ago</small>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="dispatched_orders">
                                        <div className="dispatched_orders_header pt-3 px-3 pb-1 bg-navy rounded-top">
                                            <h4 className="h4-responsive pb-3">Dispatched Orders</h4>
                                        </div>
                                        <div className="dispatched_orders_body">
                                            <table className="table">
                                                <thead>
                                                    <tr className="bg-navy">
                                                        <th scope="col">ORDER NO.</th>
                                                        <th scope="col">STATUS</th>
                                                        <th scope="col">OPERATORS</th>
                                                        <th scope="col">LOCATION</th>
                                                        <th scope="col">DISTANCE</th>
                                                        <th scope="col">START DATE</th>
                                                        <th scope="col">EST DELIVERY DATE</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="bg-navy">
                                                        <th scope="row">#879985</th>
                                                        <td><div className="rounded-circle circle_dot bg-green"></div>Moving</td>
                                                        <td>
                                                            <ul className="list-unstyled list-inline">
                                                                <li className="list-inline-item"><img className="border border-white rounded-circle" src={Avatar1} alt={Avatar1} /></li>
                                                                <li className="list-inline-item"><img className="border border-white rounded-circle" src={Avatar2} alt={Avatar2} /></li>
                                                                <li className="list-inline-item"><img className="border border-white rounded-circle" src={Avatar3} alt={Avatar3} /></li>
                                                                <li className="list-inline-item"><img className="border border-white rounded-circle" src={Avatar4} alt={Avatar4} /></li>
                                                            </ul>
                                                        </td>
                                                        <td>Anniston, Alabama</td>
                                                        <td>
                                                            <span>
                                                                <span>130 km</span>
                                                                <div class="progress progress_bar_green" style={{height: '5px'}}>
                                                                    <div class="progress-bar rounded" role="progressbar" style={{width: '80%', height: '5px'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </span>
                                                        </td>
                                                        <td>26/07/2018</td>
                                                        <td>28/07/2018</td>
                                                    </tr>
                                                    <tr className="bg-navy">
                                                        <th scope="row">#156897</th>
                                                        <td><div className="rounded-circle circle_dot bg-yellow"></div>Pending</td>
                                                        <td>
                                                            <ul className="list-unstyled list-inline">
                                                                <li className="list-inline-item"><img className="border border-white rounded-circle" src={Avatar1} alt={Avatar1} /></li>
                                                                <li className="list-inline-item"><img className="border border-white rounded-circle" src={Avatar2} alt={Avatar2} /></li>
                                                                <li className="list-inline-item"><img className="border border-white rounded-circle" src={Avatar3} alt={Avatar3} /></li>
                                                            </ul>
                                                        </td>
                                                        <td>Cordova, Alaska</td>
                                                        <td>
                                                            <span>
                                                                <span>234 km</span>
                                                                <div className="progress progress_bar_yellow" style={{height: '5px'}}>
                                                                    <div className="progress-bar" role="progressbar" style={{width: '60%', height: '5px'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </span>
                                                        </td>
                                                        <td>26/07/2018</td>
                                                        <td>28/07/2018</td>
                                                    </tr>
                                                    <tr className="bg-navy">
                                                        <th scope="row">#568975</th>
                                                        <td><div className="rounded-circle circle_dot bg-green"></div>Moving</td>
                                                        <td>
                                                            <ul className="list-unstyled list-inline">
                                                                <li className="list-inline-item"><img className="border border-white rounded-circle" src={Avatar1} alt={Avatar1} /></li>
                                                                <li className="list-inline-item"><img className="border border-white rounded-circle" src={Avatar2} alt={Avatar2} /></li>
                                                                <li className="list-inline-item"><img className="border border-white rounded-circle" src={Avatar3} alt={Avatar3} /></li>
                                                                <li className="list-inline-item"><img className="border border-white rounded-circle" src={Avatar4} alt={Avatar4} /></li>
                                                                <li className="list-inline-item"><img className="border border-white rounded-circle" src={Avatar4} alt={Avatar4} /></li>
                                                            </ul>
                                                        </td>
                                                        <td>Florence, Alabama</td>
                                                        <td>
                                                            <span>
                                                                <span>168 km</span>
                                                                <div className="progress progress_bar_green" style={{height: '5px'}}>
                                                                    <div className="progress-bar" role="progressbar" style={{width: '70%', height: '5px'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </span>
                                                        </td>
                                                        <td>26/07/2018</td>
                                                        <td>28/07/2018</td>
                                                    </tr>
                                                    <tr className="bg-navy">
                                                        <th scope="row">#245689</th>
                                                        <td><div className="rounded-circle circle_dot bg-red"></div>Canceled</td>
                                                        <td>
                                                            <ul className="list-unstyled list-inline">
                                                                <li className="list-inline-item"><img className="border border-white rounded-circle" src={Avatar1} alt={Avatar1} /></li>
                                                                <li className="list-inline-item"><img className="border border-white rounded-circle" src={Avatar2} alt={Avatar2} /></li>
                                                            </ul>
                                                        </td>
                                                        <td>Clifton, Arizona</td>
                                                        <td>
                                                            <span>
                                                                <span>125 km</span>
                                                                <div className="progress progress_bar_red" style={{height: '5px'}}>
                                                                    <div className="progress-bar rounded" role="progressbar" style={{width: '70%', height: '5px'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                                </div>
                                                            </span>
                                                        </td>
                                                        <td>26/07/2018</td>
                                                        <td>28/07/2018</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default Analytics;