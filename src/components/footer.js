import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="site-footer border-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="row">
                <div class="col-md-12">
                  <h3 class="footer-heading mb-4">Navigations</h3>
                </div>
                <div class="col-md-6 col-lg-4">
                  <ul class="list-unstyled">                   
                    <li>
                    <Link to="/home">Home</Link>
                    </li>
                    <li>
                    <Link to="/products">Categories</Link>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 col-lg-4">
                  <ul class="list-unstyled">
                    <li>
                      <a href="tel://23923929210">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 col-lg-4">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Features</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <h3 class="footer-heading mb-4">Promo</h3>
              <a href="#" class="block-6">
                <img
                  src="images/Untitled-1.jpg"
                  alt="Image placeholder"
                  class="img-fluid rounded mb-4"
                />
                <h3 class="font-weight-light  mb-0" style= {{color:'#12727d'}}>
                  Finding Your Perfect Shoes
                </h3>
                <p>Promo from January 15 &mdash; June 25, 2023</p>
              </a>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="block-5 mb-5">
                <h3 class="footer-heading mb-4">Contact Info</h3>
                <ul class="list-unstyled">
                  <li class="address">
                  Manila North Cemetery, Andrés, A. Bonifacio Ave, Santa Cruz, Manila, 1014 Metro Manila
                  </li>
                  <li class="phone">
                    <a href="tel://23923929210">+2 392 3929 210</a>
                  </li>
                  <li class="email">emailaddress@domain.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row pt-5 mt-5 text-center"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
