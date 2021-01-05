import React from 'react';
import '../../styels/CardActions.scss';
import Header from '../Shared/Header/Header';
import Sidebar from '../Shared/Sidebar/Sidebar';
import RightArrows from '../../images/chevrons-right.svg';
import Settings from '../../images/settings.svg';
import PurpleHome from '../../images/PurpleHome.svg';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Breadcumbs from '../Shared/Breadcumbs';

const CardActions = () => {
    const breadcumbs = {
        title: 'Card Actions',
        page: 'Card'
    }
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
                                    <div className="col-md-12 mb-4">
                                        <div className="card_actions_area bg-navy rounded p-3">
                                            <div className="card_actions_header">
                                                <h2 className="h2-responsive text-white">Card Actions</h2>
                                            </div>
                                            <div className="card_actions_body pt-2">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr className="py-1">
                                                                <th scope="col">Action</th>
                                                                <th scope="col">Icon</th>
                                                                <th scope="col">Details</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">Collapse</th>
                                                                <td className="text-center"><i className="fas fa-chevron-down"></i></td>
                                                                <td>Collapse card content using collapse action.</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Refresh Content</th>
                                                                <td className="text-center"><i className="fas fa-redo"></i></td>
                                                                <td>Refresh your card content using refresh action.</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Remove Card</th>
                                                                <td className="text-center"><i className="fas fa-times"></i></td>
                                                                <td>Remove card from page using remove card action</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="Collapsible bg-navy p-4 rounded">
                                            <div className="collapsible_header d-flex justify-content-between">
                                                <h2 className="h2-responsive text-white">Collapsible</h2>
                                                <i className="fas fa-chevron-down text-white" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"></i>
                                            </div>
                                            <div className="collapsible_body pt-3 collapse" id="collapseExample">
                                                <p>You can create collapsible card using reactstrap's collapse component, to create a collapsible card you'll have to manage it's collapse state.</p>
                                                <p className="mb-1">Click on <i className="fas fa-chevron-down text-white"></i> to see card collapse in action</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="refresh bg-navy p-4 rounded">
                                            <div className="refresh_header d-flex justify-content-between">
                                                <h2 className="h2-responsive text-white">Refresh</h2>
                                                <i className="fas fa-redo text-white"></i>
                                            </div>
                                            <div className="refresh_body pt-3">
                                               <p>You can add refresh content action to card by adding class <code>.card-reload</code> with your card tag, and add conditional spinner into card body to showp when card is refreshing.</p>
                                               <p className="mb-1">Click on <i className="fas fa-redo text-white"></i> to see card collapse in action</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="remove_card bg-navy p-4 rounded">
                                            <div className="remove_card_header d-flex justify-content-between">
                                                <h2 className="h2-responsive text-white">Remove Card</h2>
                                                <i className="fas fa-times text-white"></i>
                                            </div>
                                            <div className="remove_card_body pt-3">
                                                <p>You can create a removable card by managing state <code>isVisible</code>, which will add conditional d-none class which clicked on icon to remove your card.</p>
                                                <p className="mb-1">Click on <i className="fas fa-times text-white"></i> to see card collapse in action</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="all_actions bg-navy p-4 rounded">
                                            <div className="all_actions_header d-flex justify-content-between">
                                                <h2 className="h2-responsive text-white">All Actions</h2>
                                                <div className="all_actions_combine">
                                                   <i className="fas fa-chevron-down text-white me-2"></i>
                                                   <i className="fas fa-redo text-white me-2"></i>
                                                   <i className="fas fa-times text-white"></i>
                                                </div>
                                            </div>
                                            <div className="all_actions_body pt-3">
                                                <p className="mb-1">You can also add all three action together by managing all three actions's required classes and by managing their states.</p>
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

export default CardActions;