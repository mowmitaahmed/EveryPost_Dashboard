import React from 'react';
import RightArrows from '../../images/chevrons-right.svg';
import Settings from '../../images/settings.svg';
import PurpleHome from '../../images/PurpleHome.svg';
import { Link } from 'react-router-dom';

const Breadcumbs = (props) => {
    const breadcumb = props.breadcumb
    return (
        <div className="row user_edit_header">
            <div className="col-md-12">
                <div className="user_edit_header_left float-start d-flex py-2">
                    <h2 className="h2-responsive pe-3 me-3">{breadcumb.title}</h2>
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><Link to="/" className="text-decoration-none"><img src={PurpleHome} alt={PurpleHome} /></Link><img className="ms-2" src={RightArrows} alt={RightArrows} /></li>
                        <li className="list-inline-item text-purple">{breadcumb.page}<img className="ms-2" src={RightArrows} alt={RightArrows} /></li>
                        <li className="list-inline-item text-gray">{breadcumb.title}</li>
                    </ul>
                </div>
                <div className="user_edit_header_left float-end">
                    <button className="btn bg-purple rounded-circle"><img src={Settings} alt={Settings}/></button>
                </div>
            </div>
        </div>
    );
};

export default Breadcumbs;