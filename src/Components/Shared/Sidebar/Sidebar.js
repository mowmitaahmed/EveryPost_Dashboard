import React from 'react';
import Logo from '../../../images/Logo.svg';
import home from '../../../images/home.svg';
import Mail from '../../../images/mail.svg';
import Chat from '../../../images/message-square.svg';
import Calendar from '../../../images/calendar.svg';
import User from '../../../images/user.svg';
import Right from '../../../images/chevron-right.svg';
import Circle from '../../../images/circle.svg';
import { Link, NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="row px-3">
            <div className="col-md-12 Logo_area py-4">
              <span><img src={Logo} alt={Logo}/> Vuexy</span>
            </div>
            <div className="col-md-12 dashboard_area">
                <Link to="/" className="text-decoration-none"><h5 className="h5-responsive m-0 mb-5 dashboard py-2 px-2 rounded"><img className="me-2" src={home} alt={home} />Dashboard</h5></Link>
                <h2 className="h2-responsive px-2">APP</h2>
                <ul className="list-unstyled">
                    <li className="px-2 py-2"><NavLink to="/" className="text-decoration-none"><img className="me-2" src={Mail} alt={Mail} />Email</NavLink></li>
                    <li className="px-2 py-2"><NavLink to="/" className="text-decoration-none"><img className="me-2" src={Chat} alt={Chat} />Chat</NavLink></li>
                    <li className="px-2 py-2 mb-2"><NavLink to="/" className="text-decoration-none"><img className="me-2" src={Calendar} alt={Calendar} />Calendar</NavLink></li>
                    <li className="user_list"><NavLink to="/" className="text-decoration-none px-2 py-2 rounded"><img className="me-2" src={User} alt={User} />User <img className="ms-5" src={Right} alt={Right}/></NavLink>
                    <ul className="list-unstyled mt-3 dropdown-container">
                        <li className="py-2 mb-2"><NavLink to="/" className="text-decoration-none" ><img className="me-2" src={Circle} alt={Circle} />List</NavLink></li>
                        <li className="py-2 mb-2"><NavLink to="/" className="text-decoration-none" ><img className="me-2" src={Circle} alt={Circle} />View</NavLink></li>
                        <li className="py-2"><NavLink to="/useredit" className="text-decoration-none w-100" ><img className="me-2" src={Circle} alt={Circle} />Edit</NavLink></li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;