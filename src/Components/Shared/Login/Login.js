import React from 'react';
import Logo from '../../../images/Logo.svg';
import '../../../styels/Sidebar/Sidebar.scss';
const Login = () => {
    return (
        <section className="container-fluid">
            <div className="row">
                <div className="col-md-4 sidebar_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sidebar_details text-center">
                                    <img src={Logo} alt={Logo}/>
                                    <h3>Discover Amazing Metronic with great build tools</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 bg-danger">

                </div>
            </div>
        </section>
    );
};

export default Login;