import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Sidebar from '../Shared/Sidebar/Sidebar';
import RightArrows from '../../images/chevrons-right.svg';
import PurpleHome from '../../images/PurpleHome.svg';
import Settings from '../../images/settings.svg';
import Avatar from '../../images/avatar.jpg';
import '../../styels/UserEdit.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import Footer from '../Shared/Footer/Footer';


const UserEdit = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const options = [
        { value: 'english', label: 'English' },
        { value: 'spanish', label: 'Spanish' },
        { value: 'french', label: 'French' },
        { value: 'russian', label: 'Russian' },
        { value: 'german', label: 'German' },
        { value: 'arabic', label: 'Arabic' },
        { value: 'sanskrit', label: 'Sanskrit' },
      ];
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
                                             <h2 className="h2-responsive pe-3 me-3">User Edit</h2>
                                             <ul className="list-unstyled list-inline">
                                                 <li className="list-inline-item"><Link to="/" className="text-decoration-none"><img src={PurpleHome} alt={PurpleHome} /></Link><img className="ms-2" src={RightArrows} alt={RightArrows} /></li>
                                                 <li className="list-inline-item text-purple">User<img className="ms-2" src={RightArrows} alt={RightArrows} /></li>
                                                 <li className="list-inline-item text-gray">Edit</li>
                                             </ul>
                                         </div>
                                         <div className="user_edit_header_left float-end">
                                             <button className="btn bg-purple rounded-circle"><img src={Settings} alt={Settings}/></button>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="row user_edit_body mb-5">
                                     <div className="col-md-12">
                                         <div className="user_edit_main_area bg-navy rounded p-4">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i className="far fa-user me-2"></i>Account</a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><i className="fas fa-exclamation-circle me-2"></i>Information</a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"><i className="fas fa-share-alt me-2"></i>Social</a>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="myTabContent">
                                                <div className="tab-pane fade show active py-4" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="user_details d-flex">
                                                                <img className="rounded me-4" src={Avatar} alt={Avatar}/>
                                                                <div className="user_details_info">
                                                                    <p className="p-responsive text-gray mb-1">Angelo Sashington</p>
                                                                    <button className="btn bg-purple change_avatar text-white me-3">Change Avatar</button>
                                                                    <button className="btn remove_avatar text-red">Remove Avatar</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row pt-4">
                                                        <div className="col-md-6 single_input mb-2">
                                                            <label htmlFor="username" className="text-gray">Username</label>
                                                            <input type="text" name="username" className="w-100 bg-input rounded" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                        </div>
                                                        <div className="col-md-6 single_input mb-2">
                                                            <label htmlFor="status" className="text-gray">Status</label>
                                                            <select style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} className="w-100 bg-input rounded status" aria-label="Default select example">
                                                                <option selected>Active</option>
                                                                <option defaultValue="1">Active</option>
                                                                <option defaultValue="2">Blocked</option>
                                                                <option defaultValue="3">Deactivated</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 single_input mb-2">
                                                            <label htmlFor="name" className="text-gray">Name</label>
                                                            <input type="text" name="name" className="w-100 bg-input rounded" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                        </div>
                                                        <div className="col-md-6 single_input mb-2">
                                                            <label htmlFor="role" className="text-gray">Role</label>
                                                            <select style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} className="w-100 bg-input rounded status" aria-label="Default select example">
                                                                <option selected>Admin</option>
                                                                <option defaultValue="1">Admin</option>
                                                                <option defaultValue="2">User</option>
                                                                <option defaultValue="3">Stuff</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-6 single_input mb-2">
                                                            <label htmlFor="email" className="text-gray">Email</label>
                                                            <input type="email" name="email" className="w-100 bg-input rounded" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                        </div>
                                                        <div className="col-md-6 single_input mb-2">
                                                            <label htmlFor="company" className="text-gray">Name</label>
                                                            <input type="text" name="company" className="w-100 bg-input rounded" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                        </div>
                                                    </div>
                                                    <div className="row pt-3">
                                                        <div className="col-md-12">
                                                            <div className="user_permission_area rounded p-3">
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
                                                </div>
                                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div className="row user_edit_information_area pt-5">
                                                        <div className="col-md-6">
                                                            <h5 className="h5-responsive text-gray mb-3"><i className="far fa-user me-2 ms-1"></i>Personal Information</h5>
                                                            <div className="row">
                                                                <div className="col-md-12 mb-2">
                                                                    <label className="text-gray" htmlFor="">Birth Date</label><br/>
                                                                    <DatePicker className="bg-input w-100" selected={startDate} onChange={date => setStartDate(date)} />
                                                                </div>
                                                                <div className="col-md-12 mb-2">
                                                                    <label className="text-gray" htmlFor="">Mobile</label><br/>
                                                                    <input type="text" name="mobile" className="bg-input w-100" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                                </div>
                                                                <div className="col-md-12 mb-2">
                                                                    <label className="text-gray" htmlFor="">Website</label><br/>
                                                                    <input type="url" name="mobile" className="bg-input w-100" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                                </div>
                                                                <div className="col-md-12 mb-2">
                                                                    <label className="text-gray" htmlFor="">Languages</label><br/>
                                                                    <Select className="bg-input w-100" isMulti defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
                                                                </div>
                                                                <div className="col-md-12 mb-2">
                                                                    <label className="text-gray" htmlFor="">Gender</label><br/>
                                                                    <span className="form-check float-start me-3">
                                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                                                        <label className="form-check-label text-gray" for="flexRadioDefault1">Male</label>
                                                                    </span>
                                                                    <span className="form-check float-start me-3">
                                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                                        <label className="form-check-label text-gray" for="flexRadioDefault2">Female</label>
                                                                    </span>
                                                                    <span className="form-check float-start me-3">
                                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                                        <label className="form-check-label text-gray" for="flexRadioDefault2">Other</label>
                                                                    </span>
                                                                </div>
                                                                <div className="col-md-12 mb-2">
                                                                    <label className="text-gray" htmlFor="">Contact Options</label><br/>
                                                                    <span className="form-check float-start me-3">
                                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                                                                        <label class="form-check-label text-gray" for="flexCheckDefault">Email</label>
                                                                    </span>
                                                                    <span className="form-check float-start me-3">
                                                                        <input className="form-check-input" type="checkbox" name="flexCheckDefault2" id="flexCheckDefault2"/>
                                                                        <label className="form-check-label text-gray" for="flexCheckDefault2">Message</label>
                                                                    </span>
                                                                    <span className="form-check float-start me-3">
                                                                        <input className="form-check-input" type="checkbox" name="flexCheckDefault3" id="flexCheckDefault3" />
                                                                        <label className="form-check-label text-gray" for="flexCheckDefault3">Phone</label>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <h5 className="h5-responsive text-gray mb-3"><i className="fas fa-map-marker-alt me-2"></i>Address</h5>
                                                            <div className="row">
                                                                <div className="col-md-12 mb-2">
                                                                    <label className="text-gray" htmlFor="">Address Line 1</label><br/>
                                                                    <input type="text" name="address1" className="bg-input w-100" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                                </div>
                                                                <div className="col-md-12 mb-2">
                                                                    <label className="text-gray" htmlFor="">Address Line 2</label><br/>
                                                                    <input type="text" name="address2" className="bg-input w-100" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                                </div>
                                                                <div className="col-md-12 mb-2">
                                                                    <label className="text-gray" htmlFor="">Post Code</label><br/>
                                                                    <input type="text" name="postCode" className="bg-input w-100" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                                </div>
                                                                <div className="col-md-12 mb-2">
                                                                    <label className="text-gray" htmlFor="">City</label><br/>
                                                                    <input type="text" name="city" className="bg-input w-100" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                                </div>
                                                                <div className="col-md-12 mb-2">
                                                                    <label className="text-gray" htmlFor="">State</label><br/>
                                                                    <input type="text" name="state" className="bg-input w-100" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                                </div>
                                                                <div className="col-md-12 mb-2">
                                                                    <label className="text-gray" htmlFor="">Country</label><br/>
                                                                    <input type="text" name="country" className="bg-input w-100" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8 mt-3">
                                                        </div>
                                                        <div className="col-md-4 float-end mt-3">
                                                            <button className="btn bg-purple change_avatar text-white me-3">Change Avatar</button>
                                                            <button className="btn reset_form text-yellow">Reset</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                                    <div className="row user_edit_social_area mt-5">
                                                        <div className="col-md-6">
                                                            <label className="text-gray" htmlFor="twitter">Twitter</label><br/>
                                                            <i className="fab fa-twitter text-gray"></i>
                                                            <input type="url" name="twitter" className="bg-input w-100" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="text-gray" htmlFor="twitter">GitHub</label><br/>
                                                            <i className="fab fa-twitter"></i>
                                                            <input type="url" name="twitter" className="bg-input w-100" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="text-gray" htmlFor="twitter">Facebook</label><br/>
                                                            <i className="fab fa-facebook-f"></i>
                                                            <input type="url" name="twitter" className="bg-input w-100" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="text-gray" htmlFor="twitter">CodePen</label><br/>
                                                            <i className="fab fa-codepen"></i>
                                                            <input type="url" name="twitter" className="bg-input w-100" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="text-gray" htmlFor="twitter">Instagram</label><br/>
                                                            <i className="fab fa-instagram"></i>
                                                            <input type="url" name="twitter" className="bg-input w-100" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="text-gray" htmlFor="twitter">Slack</label><br/>
                                                            <i className="fab fa-slack"></i>
                                                            <input type="url" name="twitter" className="bg-input w-100" style={{border: '1px solid rgba(0, 0, 0, 0.2)'}} />
                                                        </div>
                                                        <div className="col-md-8 mt-3">
                                                        </div>
                                                        <div className="col-md-4 float-end mt-3">
                                                            <button className="btn bg-purple change_avatar text-white me-3">Change Avatar</button>
                                                            <button className="btn reset_form text-yellow">Reset</button>
                                                        </div>
                                                    </div>
                                                </div>
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

export default UserEdit;