import React from 'react';
import { Link } from 'react-router-dom';
import '../../styels/CardsBasic.scss';
import Header from '../Shared/Header/Header';
import Sidebar from '../Shared/Sidebar/Sidebar';
import RightArrows from '../../images/chevrons-right.svg';
import Settings from '../../images/settings.svg';
import PurpleHome from '../../images/PurpleHome.svg';
import Basic1 from '../../images/cards/basic1.jpg';
import Basic2 from '../../images/cards/basic2.jpg';
import Basic3 from '../../images/cards/basic3.jpg';
import AvatarBasic1 from '../../images/cards/avatarbasic1.jpg';
import AvatarBasic2 from '../../images/cards/avatarbasic2.jpg';
import BgBasic1 from '../../images/cards/bgBasic1.jpg';
import BgBasic2 from '../../images/cards/bgBasic2.jpg';
import basic10 from '../../images/cards/basic10.jpg';
import Chat1 from '../../images/cards/chat1.jpg';
import Chat2 from '../../images/cards/chat2.jpg';
import Footer from '../Shared/Footer/Footer';

const CardsBasic = () => {
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
                                 <div className="row user_edit_header">
                                     <div className="col-md-12">
                                         <div className="user_edit_header_left float-start d-flex py-2">
                                             <h2 className="h2-responsive pe-3 me-3">Basic Cards</h2>
                                             <ul className="list-unstyled list-inline">
                                                 <li className="list-inline-item"><Link to="/" className="text-decoration-none"><img src={PurpleHome} alt={PurpleHome} /></Link><img className="ms-2" src={RightArrows} alt={RightArrows} /></li>
                                                 <li className="list-inline-item text-purple">Card<img className="ms-2" src={RightArrows} alt={RightArrows} /></li>
                                                 <li className="list-inline-item text-gray">Basic Cards</li>
                                             </ul>
                                         </div>
                                         <div className="user_edit_header_left float-end">
                                             <button className="btn bg-purple rounded-circle"><img src={Settings} alt={Settings}/></button>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="row">
                                     <div className="col-md-4 my-3">
                                         <div className="single_card bg-navy rounded">
                                             <img className="w-100 rounded-top" src={Basic1} alt={Basic1}/>
                                             <div className="single_card_body p-4">
                                                 <h5 className="h5-responsive">Vuexy Admin</h5>
                                                 <p className="p-responsive mb-0">By Pixinvent Creative Studio Elite Author</p>
                                                 <div className="single_card_buttons d-flex justify-content-between">
                                                    <button className="gradient-light-primary text-white btn mt-3">Download</button>
                                                    <button className="btn border-purple text-purple mt-3">View All</button>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="col-md-4 my-3">
                                         <div className="single_card bg-navy rounded">
                                             <div className="single_card_body py-3 px-3">
                                                <img className="w-100 rounded mb-4 mt-1" src={Basic2} alt={Basic2}/>
                                                 <h5 className="h5-responsive">Vuexy Admin</h5>
                                                 <p className="p-responsive mb-0">By Pixinvent Creative Studio</p>
                                                 <hr style={{color: '#c2c6dc'}}/>
                                                 <div className="single_card_buttons d-flex justify-content-between">
                                                    <p className="p-responsive w-25">$ 4785.78 Income</p>
                                                    <p className="p-responsive w-25"></p>
                                                    <p className="p-responsive w-50 float-end ms-4">12 June 2020 Delivery Date</p>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="col-md-4 my-3">
                                         <div className="single_card bg-navy rounded">
                                             <div className="single_card_body py-3 px-3">
                                                <img className="w-100 rounded mb-4 mt-1" src={Basic3} alt={Basic3}/>
                                                 <h5 className="h5-responsive">Vuexy Admin</h5>
                                                 <div className="progress_area mb-3">
                                                    <div className="progress_labels d-flex justify-content-between mb-2">
                                                        <small className="float-left font-weight-bold mb-25">$ 5975</small>
                                                        <small className="float-left font-weight-bold mb-25">$ 5975</small>
                                                    </div>
                                                    <div className="progress progress_bar_purple" style={{height: '5px'}}>
                                                         <div className="progress-bar rounded" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%', height: '5px'}}>
                                                        </div>
                                                    </div>
                                                 </div>
                                                 <div className="single_card_buttons d-flex justify-content-between">
                                                    <button className="gradient-light-primary text-white btn mt-3">Download</button>
                                                    <button className="btn border-purple text-purple mt-3">View All</button>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="col-md-4 my-3">
                                         <div className="single_card bg-navy rounded">
                                             <div className="single_card_body p-4">
                                                 <div className="single_card_body_details text-center">
                                                    <img className="w-25 rounded mb-3 mt-1 rounded-circle" src={AvatarBasic1} alt={AvatarBasic1}/>
                                                    <h4 className="h5-responsive mb-1">Vuexy Admin</h4>
                                                    <p className="p-responsive">Backend Dev</p>
                                                 </div>
                                                 <div className="single_card_buttons d-flex justify-content-between">
                                                    <button className="gradient-light-primary text-white btn mt-3">Follow</button>
                                                    <button className="btn border-purple text-purple mt-3">Message</button>
                                                 </div>
                                                 <hr style={{color: '#c2c6dc'}}/>
                                                 <div className="single_card_footer d-flex justify-content-between">
                                                    <p className="p-responsive mb-0"><span className="star text-yellow me-1"><i className="far fa-star"></i></span> <span>4.9</span></p>
                                                    <p className="p-responsive mb-0"><span className="star text-purple me-1"><i className="fas fa-briefcase"></i></span> <span>Projects</span></p>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="col-md-4 my-3">
                                         <div className="single_card bg-navy rounded">
                                             <div className="single_card_body py-4 px-4">
                                                 <div className="single_card_body_details text-center">
                                                    <h4 className="h5-responsive mb-1">Vuexy Admin</h4>
                                                    <p className="p-responsive">Backend Dev</p>
                                                    <img className="w-25 rounded mb-4 mt-1 rounded-circle" src={AvatarBasic1} alt={AvatarBasic1}/>
                                                 </div>
                                                 <div className="single_card_list">
                                                     <ul className="list-unstyled d-flex justify-content-between">
                                                        <li>
                                                            <h6 className="h6-responsive">568</h6>
                                                            <p className="p-responsive mb-0">Uploads</p>
                                                        </li>
                                                        <li>
                                                            <h6 className="h6-responsive">568</h6>
                                                            <p className="p-responsive mb-0">Uploads</p>
                                                        </li>
                                                        <li>
                                                            <h6 className="h6-responsive">568</h6>
                                                            <p className="p-responsive mb-0">Uploads</p>
                                                        </li>
                                                     </ul>
                                                 </div>
                                                 <div className="single_card_buttons text-center">
                                                    <button className="gradient-light-primary text-white btn mt-1">Follow</button>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="col-md-4 my-3">
                                         <div className="single_card bg-navy rounded">
                                             <div className="single_card_body py-4 px-4">
                                                 <div className="single_card_body_details text-center">
                                                    <img className="w-25 rounded mb-3 mt-1 rounded-circle" src={AvatarBasic2} alt={AvatarBasic2}/>
                                                    <h4 className="h5-responsive mb-1">Vuexy Admin</h4>
                                                    <p className="p-responsive">Backend Dev</p>
                                                 </div>
                                                 <div className="progress_area mb-4">
                                                    <div className="progress_labels d-flex justify-content-between mb-2">
                                                        <small className="float-left font-weight-bold mb-25">720 Points</small>
                                                        <small className="float-left font-weight-bold mb-25">1000</small>
                                                    </div>
                                                    <div className="progress progress_bar_purple" style={{height: '5px'}}>
                                                         <div className="progress-bar rounded" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%', height: '5px'}}>
                                                        </div>
                                                    </div>
                                                 </div>
                                                 <div className="single_card_buttons d-flex justify-content-between">
                                                    <button className="gradient-light-primary text-white btn mt-3">Follow</button>
                                                    <button className="btn border-purple text-purple mt-3">Message</button>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                     
                                    <div className="col-md-4 my-3">
                                        <div className="single_card rounded">
                                            <img className="rounded w-100" src={BgBasic1} alt={BgBasic1}/>
                                            <div className="overlay-black d-flex flex-column justify-content-between card-img-overlay p-4">
                                                <h4 class="text-white card-title">Beautiful Overlay</h4>
                                                <p>Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups muffin halvah lollipop.</p>
                                            </div>
                                        </div>
                                    </div>
                                     
                                     <div className="col-md-4 my-3">
                                         <div className="single_card rounded">
                                             <img className="rounded w-100" src={BgBasic2} alt={BgBasic2}/>
                                             <div className="overlay-black card-img-overlay p-4">
                                                 <div className="single_card_header text-center">
                                                    <h3 className="text-white card-title mt-5">Snowy</h3>
                                                    <p className="text-white">New York</p>
                                                 </div>
                                                 <div className="single_card_icon_area d-flex justify-content-between px-3 mb-3">
                                                    <i className="fas fa-cloud text-white"></i>
                                                    <h1 className="text-white mt-5">-6 <span className="mt-1">°</span></h1>
                                                 </div>
                                                 <div className="single_card_body mt-5">
                                                     <ul className="list-unstyled">
                                                         <li className="d-flex justify-content-between text-white pt-2 pb-3">
                                                             <span>Precipitation</span>
                                                             <span>48%</span>
                                                         </li>
                                                         <li className="d-flex justify-content-between text-white pb-3">
                                                             <span>Humidity</span>
                                                             <span>60%</span>
                                                         </li>
                                                         <li className="d-flex justify-content-between text-white">
                                                             <span>Wind</span>
                                                             <span>23 km/h</span>
                                                         </li>
                                                     </ul>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="col-md-4 my-3">
                                        <div className="chat-application chat-widget card bg-navy">
                                            <div className="card-header">
                                                <div className="card-title">Chat</div>
                                            </div>
                                            <div className="chat-app-window">
                                                <div className="scrollbar-container user-chats widget-user-chat ps ps--active-y">
                                                    <div className="chats">
                                                        <div className="chat chat-right">
                                                            <div className="chat-avatar">
                                                                <div className="avatar m-0">
                                                                    <img src={Chat1} alt="chat avatar" height="40" width="40" />
                                                                </div>
                                                            </div>
                                                            <div className="chat-body">
                                                                <div className="chat-content">
                                                                    <p>Cake sesame snaps cupcake gingerbread</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat chat-left">
                                                            <div className="chat-avatar">
                                                                <div className="avatar m-0">
                                                                   <img src={Chat2} alt="chat avatar" height="40" width="40" />
                                                                </div>
                                                            </div>
                                                            <div className="chat-body">
                                                                <div className="chat-content">
                                                                    <p>Chocolate cake</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat chat-left">
                                                            <div className="chat-avatar">
                                                                <div className="avatar m-0">
                                                                    <img src={Chat1} height="40" width="40" />
                                                                </div>
                                                            </div>
                                                            <div className="chat-body">
                                                                <div className="chat-content">
                                                                    <p>Donut sweet pie oat cake dragée fruitcake</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat chat-right">
                                                            <div className="chat-avatar">
                                                                <div className="avatar m-0">
                                                                    <img src={Chat2} alt="chat avatar" height="40" width="40" />
                                                                </div>
                                                            </div>
                                                            <div className="chat-body">
                                                                <div className="chat-content">
                                                                    <p>Liquorice chocolate bar jelly beans icing</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat chat-left">
                                                            <div className="chat-avatar">
                                                                <div className="avatar m-0">
                                                                    <img src={Chat1} alt="chat avatar" height="40" width="40" />
                                                                </div>
                                                            </div>
                                                            <div className="chat-body">
                                                                <div className="chat-content">
                                                                    <p>Powder toffee tootsie roll macaroon cupcake</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat chat-right">
                                                            <div className="chat-avatar">
                                                                <div className="avatar m-0">
                                                                    <img src={Chat2} alt="chat avatar" height="40" width="40" />
                                                                </div>
                                                            </div>
                                                            <div className="chat-body">
                                                                <div className="chat-content">
                                                                    <p>Apple pie oat cake brownie cotton candy cupcake chocolate bar dessert</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat chat-left">
                                                            <div className="chat-avatar">
                                                                <div className="avatar m-0">
                                                                    <img src={Chat1} alt="chat avatar" height="40" width="40" />
                                                                </div>
                                                            </div>
                                                            <div className="chat-body">
                                                                <div className="chat-content">
                                                                    <p>Biscuit cake jujubes carrot cake topping sweet cake</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ps__rail-x" style={{left: '0px', bottom: '-298px'}}>
                                                        <div className="ps__thumb-x" tabindex="0" style={{left: '0px', width: '0px'}}>
                                                        </div>
                                                    </div>
                                                    <div className="ps__rail-y" style={{top: '298px', right: '0px', height: '415px'}}>
                                                        <div className="ps__thumb-y" tabindex="0" style={{top: '174px', height: '241px'}}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat-footer">
                                                    <div className="d-flex justify-content-around card-body">
                                                        <input placeholder="Type your message..." type="text" class="mr-50 form-control" value="" />
                                                        <button type="button" class="btn-icon btn btn-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                     <div className="col-md-4 my-3">
                                         <div className="single_card rounded bg-navy p-4">
                                             <div className="single_card_header d-flex justify-content-between">
                                                 <div className="single_card_header_left float-start">
                                                    <h5 className="h5-responsive mb-1">Vuexy Admin</h5>
                                                    <p className="p-responsive mb-0">by Pixinvent Creative Studio</p>
                                                 </div>
                                                 <div className="single_card_header_right float-end">
                                                    <i className="fas fa-ellipsis-v text-white"></i>
                                                 </div>
                                             </div>
                                             <img className="w-100 mt-4" src={basic10} alt={basic10}/>
                                             <div className="single_card_footer mt-4">
                                                 <ul className="list-unstyled d-flex mb-0">
                                                     <li className="me-3">
                                                         <i className="fas fa-thumbs-up text-green me-1"></i>
                                                         <span className="text-gray">368</span>
                                                     </li>
                                                     <li className="me-3">
                                                        <i className="far fa-comment-alt text-purple me-1"></i>
                                                         <span className="text-gray">341</span>
                                                     </li>
                                                     <li>
                                                        <i className="fas fa-thumbs-down text-yellow me-1"></i>
                                                         <span className="text-gray">368</span>
                                                     </li>
                                                 </ul>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="col-sm-12 col-lg-8 my-3">
                                        <div className="overflow-hidden card bg-navy">
                                            <div className="embed-responsive embed-responsive-16by9">
                                                <iframe width="560" height="300" src="https://www.youtube.com/embed/mcixldqDIEQ" frameborder="0" allow="accelerometer autoplay encrypted-media gyroscope picture-in-picture" allowfullscreen="" title="video"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-3">
                                        <div className="single_card rounded bg-navy p-4">
                                            <h4 className="h5-responsive mb-1">Left Timeline</h4>
                                            <div className="single_card_body pt-3">
                                               <ul className="activity-timeline timeline-left list-unstyled">
                                                   <li>
                                                       <div class="timeline-icon bg-primary">
                                                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                               <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                                                            </svg>
                                                        </div>
                                                        <div className="timeline-info">
                                                            <p className="font-weight-bold text-gray mb-0">Task Added</p>
                                                            <span className="text-gray">Bonbon macaroon jelly beans gummi bears jelly lollipop apple</span>
                                                        </div>
                                                        <small className="text-gray">25 days ago</small>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-icon bg-warning">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                <circle cx="12" cy="12" r="10"></circle>
                                                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                                                <line x1="12" y1="16" x2="12" y2="16"></line>
                                                            </svg>
                                                        </div>
                                                        <div className="timeline-info">
                                                            <p className="font-weight-bold text-gray mb-0">Task Updated</p>
                                                            <span className="text-gray">Cupcake gummi bears soufflé caramels candy</span>
                                                        </div>
                                                        <small className="text-gray">15 days ago</small>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-icon bg-success">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                <polyline points="20 6 9 17 4 12"></polyline>
                                                            </svg>
                                                        </div>
                                                        <div className="timeline-info">
                                                            <p className="font-weight-bold text-gray mb-0">Task Completed</p>
                                                            <span className="text-gray">Candy ice cream cake. Halvah gummi bears</span>
                                                        </div>
                                                        <small className="text-gray">20 minutes ago</small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-3">
                                        <div className="single_card rounded bg-navy p-4">
                                            <h4 className="h5-responsive mb-1">Right Timeline</h4>
                                            <div className="single_card_body pt-3">
                                               <ul className="activity-timeline timeline-right list-unstyled">
                                                   <li>
                                                       <div className="timeline-icon bg-primary">
                                                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                               <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
                                                            </svg>
                                                        </div>
                                                        <div className="timeline-info">
                                                            <p className="font-weight-bold text-gray mb-0">Task Added</p>
                                                            <span className="text-gray">Bonbon macaroon jelly beans gummi bears jelly lollipop apple</span>
                                                        </div>
                                                        <small className="text-gray">25 days ago</small>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-icon bg-warning">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                <circle cx="12" cy="12" r="10"></circle>
                                                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                                                <line x1="12" y1="16" x2="12" y2="16"></line>
                                                            </svg>
                                                        </div>
                                                        <div className="timeline-info">
                                                            <p className="font-weight-bold text-gray mb-0">Task Updated</p>
                                                            <span className="text-gray">Cupcake gummi bears soufflé caramels candy</span>
                                                        </div>
                                                        <small className="text-gray">15 days ago</small>
                                                    </li>
                                                    <li>
                                                        <div className="timeline-icon bg-success">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                                <polyline points="20 6 9 17 4 12"></polyline>
                                                            </svg>
                                                        </div>
                                                        <div className="timeline-info">
                                                            <p className="font-weight-bold text-gray mb-0">Task Completed</p>
                                                            <span className="text-gray">Candy ice cream cake. Halvah gummi bears</span>
                                                        </div>
                                                        <small className="text-gray">20 minutes ago</small>
                                                    </li>
                                                </ul>
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

export default CardsBasic;