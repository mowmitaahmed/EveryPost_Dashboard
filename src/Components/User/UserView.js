import React from 'react';
import '../../styels/UserView.scss';
import Header from '../Shared/Header/Header';
import Sidebar from '../Shared/Sidebar/Sidebar';
import View from '../../images/view1.jpg';
import RightArrows from '../../images/chevrons-right.svg';
import Settings from '../../images/settings.svg';
import PurpleHome from '../../images/PurpleHome.svg';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Breadcumbs from '../Shared/Breadcumbs';

const UserView = () => {
    const breadcumbs = {
        title: 'User View',
        page: 'User'
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
                                <Breadcumbs breadcumb={breadcumbs} />  
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="user_view_top bg-navy rounded px-4 py-4">
                                            <div className="user_view_card">
                                                <div className="user_view_card_header">
                                                    <h2 className="h2-responsive text-white">Account</h2>
                                                </div>
                                                <div className="user_view_card_body pt-3">
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <img className="rounded float-start" src={View} alt={View} />
                                                        </div>
                                                        <div className="col-md-5">
                                                            <div className="table-responsive float-start user_view_top_table">
                                                                <table className="table">
                                                                    <tbody>
                                                                        <tr>
                                                                            <th className="w-50" scope="row">Username</th>
                                                                            <td>crystal</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Name</th>
                                                                            <td>Crystal Hamilton</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Email</th>
                                                                            <td>crystalhamilton@gmail.com</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-5">
                                                            <div className="table-responsive float-start user_view_top_table">
                                                                <table className="table">
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row">Status</th>
                                                                            <td>active</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Role</th>
                                                                            <td>admin</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Company</th>
                                                                            <td>North Star Aviation Pvt Ltd</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="user_view_card_footer w-100">
                                                    <button className="btn border-purple text-purple me-3 px-4"><i className="far fa-edit"></i> <span className="text-white">Edit</span></button>
                                                    <button className="btn border-red text-red px-4"><i className="far fa-trash-alt"></i> <span className="text-white">Delete</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 my-4">
                                        <div className="user_view_information bg-navy rounded me-2 p-4">
                                            <h2 className="h2-responsive text-white mb-3">Information</h2>
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Birth Date</th>
                                                            <td>28 January 1998</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Mobile</th>
                                                            <td>+65958951757</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Website</th>
                                                            <td>https://rowboat.com/insititious/Crystal</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Languages</th>
                                                            <td>English, French</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Gender</th>
                                                            <td>Female</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Contact</th>
                                                            <td>email, message, phone</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-4">
                                        <div className="user_view_social bg-navy rounded ms-2 p-4">
                                            <h2 className="h2-responsive text-white mb-3">Social Links</h2>
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Twitter</th>
                                                        <td>https://twitter.com/crystal</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Facebook</th>
                                                        <td>https://www.facebook.com/crystal</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Instagram</th>
                                                        <td>https://www.instagram.com/crystal</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Github</th>
                                                        <td>https://github.com/crystal</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">CodePen</th>
                                                        <td>https://codepen.io/crystal</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Slack</th>
                                                        <td>@crystal</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-3">
                                    <div className="col-md-12">
                                        <div className="user_permission_area bg-navy rounded p-3 border-none">
                                            <h5 className="h5-responsive pb-3"><i className="fas fa-lock me-2"></i><span>Permissions</span></h5>
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Module</th>
                                                        <th scope="col">Read</th>
                                                        <th scope="col">Write</th>
                                                        <th scope="col">Create</th>
                                                        <th scope="col">Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">users</th>
                                                        <td><input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" checked /></td>
                                                        <td><input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" /></td>
                                                        <td><input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" /></td>
                                                        <td><input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">posts</th>
                                                        <td><input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" checked /></td>
                                                        <td><input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" checked /></td>
                                                        <td><input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" checked /></td>
                                                        <td><input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" checked /></td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">comments</th>
                                                        <td><input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" checked /></td>
                                                        <td><input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" /></td>
                                                        <td><input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" checked /></td>
                                                        <td><input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" /></td>
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

export default UserView;