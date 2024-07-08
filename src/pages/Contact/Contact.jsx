import React from 'react';
import './Contact.css';
import Footers from '../Footer/Footer.jsx';
import Lottie from 'lottie-react';
import mail from '../../assets/lotties/Animation - 1720336038847.json'
import sendbtn from '../../assets/lotties/sendbtn.json'

const Contact = () => {
    return (
        <>
            <div className="contact">

                <div className="container __container">
                    <div className=" row ">
                        {/* contact form */}

                        <p className="section-subtitle mt-4 mt-xl-5 mb-xl-4    " >Contact me</p>
                        <h2 className="h3 section-title mt-3 mb-2 mb-xl-5 text-white">LOVE TO HEAR FROM YOU, GET IN TOUCH 👋</h2>
                        {/* email and social links */}
                        <div className="col-sm-12 col-md-6 col-lg-">
                            <p className="section-text">
                                Hate Forms! Send us an <a href="mailto:swamithedev@gmail.com">Email</a> instead!
                            </p>

                            {/* lottie file  */}
                            <div className='mail_ '>
                                <Lottie animationData={mail} loop={true} className='mail_lottie' />
                            </div>
                        </div>

                        <div className="col col-sm-12 col-md-6">
                            <form action="" className="contact-form" id="form" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">

                                {/* name field  */}
                                <div class="input-group mt-3 mb-3">

                                    <span class="input-group-text" id="basic-addon1">
                                        <ion-icon name="person-circle" className='icons'></ion-icon>
                                    </span>
                                    <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>

                                {/* mail field */}
                                <div class="input-group mt-4 mb-4 ">
                                    <span class="input-group-text" id="basic-addon1">
                                        <ion-icon name="mail"></ion-icon>
                                    </span>
                                    <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>

                                {/* call field */}
                                <div class="input-group mt-4 mb-4">
                                    <span class="input-group-text" id="basic-addon1">
                                        <ion-icon name="call"></ion-icon>
                                    </span>
                                    <input type="text" class="form-control" placeholder="Phone" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>

                                {/* Message field */}
                                <div class="input-group mt-3 mb-2">
                                    <span class="input-group-text">
                                        <ion-icon name="chatbubbles"></ion-icon>
                                    </span>
                                    <textarea class="form-control" placeholder="Message" aria-label="With textarea"></textarea>
                                </div>

                                <div className='sendbtn'>
                                    <button className='____btn mt-4 mb-5 mt-xl-4 mb-xl-4'>
                                        <Lottie animationData={sendbtn} loop={true} className='_mail_btn' />
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
            {/* footer component */}
            <Footers />
        </>
    );
};

export default Contact;
