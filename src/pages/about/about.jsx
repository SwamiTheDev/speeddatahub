import React from 'react';
import './About.css';
import Contact from '../Contact/Contact';

const WhyChooseUs = () => {
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="section-head col-sm-12">
                            <h4 ><span>Why Choose</span> Us?</h4>
                            <p>At SpeedCheckHub, we're dedicated to providing you with the best internet speed testing experience. Here's what sets us apart:</p>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item">
                                <span className="icon feature_box_col_one"><i className="fa fa-globe __icon"></i></span>
                                <h6 className='mt-2'>Precision and Accuracy</h6>
                                <p>Our advanced technology ensures the most accurate speed test results, so you can trust the data to make informed decisions about your internet service.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item">
                                <span className="icon feature_box_col_two"><i className="fa fa-anchor"></i></span>
                                <h6 className='mt-2'>User-Friendly Interface</h6>
                                <p>Designed with you in mind, our platform is easy to navigate, quick to load, and simple to use, making it accessible for everyone.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item">
                                <span className="icon feature_box_col_three"><i className="fa fa-hourglass-half"></i></span>
                                <h6 className='mt-2'>Comprehensive Insights</h6>
                                <p>We offer detailed metrics and insights that help you understand your connection's performance and find solutions to enhance your internet experience.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item">
                                <span className="icon feature_box_col_four"><i className="fa fa-database"></i></span>
                                <h6 className='mt-2'>Transparency</h6>
                                <p>With no hidden details, our results are clear and straightforward. What you see is exactly what you get, empowering you with trustworthy information.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item">
                                <span className="icon feature_box_col_five"><i className="fa fa-upload"></i></span>
                                <h6 className='mt-2'>Expert Tips and Advice</h6>
                                <p>Stay informed with valuable tips and advice on improving your internet speed along with the latest trends in internet technology.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="item">
                                <span className="icon feature_box_col_six"><i className="fa fa-camera"></i></span>
                                <h6 className='mt-2'>Community and Support</h6>
                                <p> Connect with us through social media and reach out with any questions or feedback. We're here to support you every step of the way.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* // import contact */}

            <Contact />
        </>
    );
};

export default WhyChooseUs;
