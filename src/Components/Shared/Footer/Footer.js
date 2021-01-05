import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="row user_edit_footer pt-3">
            <div className="col-md-12">
                <p><span>COPYRIGHT ©</span><span>2021 </span><Link className="text-decoration-none text-purple" to="https://1.envato.market/vuexy_admin" target="_blank" rel="nofollow">Pixinvent</Link><span class="hidden sm:inline-block">, All rights Reserved</span></p>
            </div>
        </footer>
    );
};

export default Footer;