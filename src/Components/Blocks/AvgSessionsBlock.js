import React, { useState } from 'react';
import AvgSessions from '../Charts/AvgSessions';

const AvgSessionsBlock = () => {
    const dropClose = {
    transform: 'scaleY(0)'
    }
    const dropOpen = {
    transform: 'translate3d(-42px, 18px, 0px)'
    }
    const [dropdownAvgSessions, setDropdownAvgSessions] = useState(0);
    const eventDropdownAvgSessions = (e) => {
        setDropdownAvgSessions(!dropdownAvgSessions);
    }
    return (
        <div className="col-sm-12 col-lg-6 col-md-6 mb-4">
        <div className="single_analytics bg-navy px-3 py-4">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-between flex-column">
                    <div className="single_analytics_info">
                        <h2 className="h2-responsive text-white mb-1 mt-1">2.7K</h2>
                        <p className="p-responsive mb-2 fw-bolder text-gray">Avg Sessions</p>
                        <h6><span className="text-green">+5.2%</span><span className="text-gray"> vs last 7 days</span></h6>
                    </div>
                    <button className="btn w-100 bg-purple text-white py-2">View Details<i className="fas fa-chevron-right text-white ms-3"></i><i className="fas fa-chevron-right text-white"></i></button>
                </div>
                <div className="col-md-6 d-flex justify-content-between flex-column text-end">
                    <div className="single_dropdown avg_session_dropdown">
                        <button onClick={(e) => eventDropdownAvgSessions(e)} className="btn text-gray pt-0 pb-2" type="button" >Last 7 Days <i className="fas fa-chevron-down"></i></button>
                        <ul className="list-unstyled" style={dropdownAvgSessions ? {dropOpen} : dropClose}>
                            <li>Last 28 Days</li>
                            <li>Last Month</li>
                            <li>Last Year</li>
                        </ul>
                    </div>
                    <div className="analytics_chart">
                        <AvgSessions />
                    </div>
                </div>
            </div>
            <hr className="text-gray"/>
            <div className="row progress_bar_area">
                <div className="col-md-6 col-sm-12 col-xs-12 mb-2">
                    <p className="p-responsive mb-1">Goal: $100000</p>
                    <div className="progress progress_bar_purple mb-2">
                        <div className="progress-bar rounded" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12  mb-2">
                    <p className="p-responsive mb-1">Users: 100K</p>
                    <div className="progress progress_bar_yellow mb-2">
                        <div className="progress-bar rounded" role="progressbar" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12  mb-2">
                    <p className="p-responsive mb-1">Retention: 90%</p>
                    <div className="progress progress_bar_red mb-2">
                        <div className="progress-bar rounded" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12  mb-2">
                    <p className="p-responsive mb-1">Duration: 1yr</p>
                    <div className="progress progress_bar_green mb-2">
                        <div className="progress-bar rounded" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AvgSessionsBlock;