import React from 'react';
import '../../../../styels/Error/Error2.scss';
import Slide from 'react-reveal/Slide';

const Error2 = () => {
    return (
        <Slide bottom>
            <section className="error2_area">
                <div className="container">
                    <div className="row error2_details text-center">
                        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 d-flex flex-column justify-content-end align-items-center">
                            <h1 className="h1-responsive">OOPS!</h1>
                            <h4 className="h4-responsive">Something went wrong here</h4>
                        </div>
                    </div>
                </div>
            </section>
        </Slide>
    );
};

export default Error2;