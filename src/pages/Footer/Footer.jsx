import './Footer.css'
export default function Footers() {
    return (
        <>
            {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
            <div class="footer ">
                {/* <!-- Footer --> */}
                <footer
                    class="text-center text-lg-start text-dark"

                >
                    {/* <!-- Section: Social media --> */}
                    <div className="container">
                        <section
                            class="_footer_title d-flex justify-content-between p-4 text-white"

                        >

                            {/* <!-- Left --> */}
                            <div class="me-5">
                                <span className='_title_'>Get connected with us on social networks:</span>
                            </div>
                            {/* <!-- Left --> */}

                            {/* <!-- Right --> */}
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
                    {/* <!-- Right --> */}
                    {/* <!-- Section: Social media --> */}

                    {/* <!-- Section: Links  --> */}
                    <section class="__lists">
                        <div class="container text-md-start mt-5">
                            {/* <!-- Grid row --> */}
                            <div class="row mt-3">
                                {/* <!-- Grid column --> */}
                                <div class="col-md-3 col-lg-4 col-xl-3  mb-4 ms-2">
                                    {/* <!-- Content --> */}
                                    <h6 class="list_title text-uppercase __link ms-1">speedtesthub</h6>
                                    <p className='list_ans'>
                                        Here you can use rows and columns to organize your footer
                                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit.
                                    </p>
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div class="col-md-2 col-lg-2 col-xl-2 mb-3 ms-3">
                                    {/* <!-- Links --> */}
                                    {/* <p>kndfs</p> */}
                                    <h6 class="list_title __link">Products</h6>
                                    <hr
                                        class="mb-2 mt-0  "
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p class="__link mb-2">
                                        <a href="#!" class="_link">MDBootstrap</a>
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
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div class="col-md-3 col-lg-2 col-xl-2  ms-3 mb-1">
                                    {/* <!-- Links --> */}
                                    <h6 class="list_title __link">Useful links</h6>
                                    <hr
                                        class="mb-2 mt-0 "
                                        style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                                    />
                                    <p class="__link mb-2">
                                        <a href="#!" class="_link">Your Account</a>
                                    </p>
                                    <p class="__link mb-2">
                                        <a href="#!" class="_link">Become an Affiliate</a>
                                    </p>
                                    <p class="__link mb-2">
                                        <a href="#!" class="_link">Shipping Rates</a>
                                    </p>
                                    <p class="__link mb-2">
                                        <a href="#!" class="_link">Help</a>
                                    </p>
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div class="col-md-4 col-lg-3 col-xl-3 mb-md-0 ms-3 mb-1">
                                    {/* <!-- Links --> */}
                                    <h6 class="list_title __link">Contact</h6>
                                    <hr
                                        class="mb-2 mt-0 "
                                        style={{ width: '60px', backgroundColor: ' #7c4dff', height: '2px' }}
                                    />
                                    <p className='__link mb-2'><i class="fas fa-home mr-5"></i> New York, NY 10012, US</p>
                                    <p className='__link mb-2'><i class="fas fa-envelope mr-3"></i> info@example.com</p>
                                    <p className='__link mb-2'><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p className='__link mb-2'><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                </div>
                                {/* <!-- Grid column --> */}
                            </div>
                            {/* <!-- Grid row --> */}
                        </div>
                    </section>
                    {/* <!-- Section: Links  --> */}

                    {/* <!-- Copyright --> */}
                    <div
                        class="text-center p-3"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                    >
                        © 2020 Copyright:
                        <a class="text-dark" href="https://mdbootstrap.com/"
                        >MDBootstrap.com</a
                        >
                    </div>
                    {/* <!-- Copyright --> */}
                </footer >
                {/* <!-- Footer --> */}
            </div >
            {/* <!-- End of .container --> */}
        </>
    )
}