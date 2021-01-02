import React from 'react';
import '../../../../styels/Error/Error1.scss';
import Slide from 'react-reveal/Slide';

const Error1 = () => {
    return (
        <Slide bottom>
            <section className="error1_area">
                <div className="container">
                    <div className="row error1_details d-flex align-items-center">
                        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                            <h1 className="h1-responsive">404</h1>
                            <p className="p-responsive">OOPS! Something went wrong here</p>
                        </div>
                    </div>
                </div>
            </section>
        </Slide>
    );
};

export default Error1;