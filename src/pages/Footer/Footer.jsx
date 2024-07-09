import { Link } from 'react-router-dom';
import './Footer.css'
export default function Footers() {
    return (
        <>
            <div class="footer ">
                {/* <!-- Footer --> */}
                <footer class="text-center text-lg-start text-dark" >

                    {/* <!-- Section: Social media --> */}
                    <div className="container">
                        <section class="_footer_title d-flex justify-content-between p-4 text-white">
                            <div class="me-5">
                                <span className='_title_'>Get connected with us on social networks:</span>
                            </div>

                            {/* social icons */}
                            <div>
                                <a href="" class="_icons_ me-2">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="" class="_icons_ me-2">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="" class="_icons_ me-2">
                                    <i class="fab fa-google"></i>
                                </a>
                                <a href="" class="_icons_ me-2">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="" class="_icons_ me-2">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="" class="_icons_ me-2">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                        </section>
                    </div>

                    {/* <!-- Section: Links  --> */}
                    <section class="__lists">
                        <div class="container text-md-start mt-5">
                            <div class="row mt-3">
                                <div class="col-md-3 col-lg-4 col-xl-4  mb-4 ms-2">
                                    {/* <!-- Content --> */}
                                    <h6 class="list_title text-uppercase __link ms-1">speedtesthub</h6>
                                    <p className='list_ans'>
                                        At SpeedCheckHub, we are passionate about the internet. Our mission is to empower you with the tools and information you need to understand and optimize your internet connection.
                                    </p>
                                </div>

                                {/* <!-- page Links --> */}
                                <div class="col-md-2 col-lg-2 col-xl-2 mb-3 ms-3">
                                    <h6 class="list_title __link">Products</h6>
                                    <hr class="mb-2 mt-0  " style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                    <p class="__link mb-2">
                                        <Link to="/About" className="_link">
                                            About
                                        </Link>
                                    </p>
                                    <p class="__link mb-2">
                                        <a href="#!" class="_link">MDWordPress</a>
                                    </p>
                                    <p class="__link mb-2">
                                        <a href="#!" class="_link">BrandFlow</a>
                                    </p>
                                    <p class="__link mb-2">
                                        <a href="#!" class="_link">Bootstrap Angular</a>
                                    </p>
                                </div>

                                {/* <!--page Links --> */}
                                <div class="col-md-3 col-lg-2 col-xl-2 ms-3 mb-1">
                                    <h6 class="list_title __link">Useful links</h6>
                                    <hr class="mb-2 mt-0 " style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />

                                    {/* speedtest page link */}
                                    <p class="__link mb-2">
                                        <Link to="/" className=" _link" >
                                            Speed Test
                                        </Link>
                                    </p>

                                    {/* about page link */}
                                    <p class="__link mb-2">
                                        <Link to="/about" className=" _link" >
                                            About
                                        </Link>
                                    </p>

                                    {/* Blog page link */}
                                    <p class="__link mb-2">
                                        <Link to="/blogs" className=" _link" >
                                            Blogs
                                        </Link>
                                    </p>

                                    {/* contact page link */}
                                    <p class="__link mb-2">
                                        <Link to="/contact" className=" _link" >
                                            Contact
                                        </Link>
                                    </p>
                                </div>

                                {/* <!-- contact Links --> */}
                                <div class="col-md-4 col-lg-2 col-xl-3 mb-md-0 ms-3 mb-1">
                                    <h6 class="list_title __link">Contact</h6>
                                    <hr class="mb-2 mt-0 " style={{ width: '60px', backgroundColor: ' #7c4dff', height: '2px' }} />
                                    <p className='__link mb-2'><i class="fas fa-home mr-5     me-2"></i> Mayiladuthurai, Tamil Nadu.</p>
                                    <p className='__link mb-2'><i class="fas fa-envelope mr-3 me-2"></i> swamithedev@gmail.com</p>
                                    <p className='__link mb-2'><i class="fas fa-phone mr-3 me-2" ></i> + 91 6383548296</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Copyright --> */}
                    <div class="text-center p-3 __dev_info" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', letterSpacing: '2px' }} >
                        © All Rights Reserved . Desgined And Developed by
                        <a class="___links ms-1" href="https://swamithedev.vercel.app/" > SWAMITHEDEV </a >
                    </div>
                </footer >
            </div >
        </>
    )
}