import { Link } from "react-router-dom";
import ScrollToTop from "../scrolltotop";



const Home = () => {
  return (
    <>
      <div
        class="site-blocks-cover"
        style={{
          backgroundImage: `url("images/357556652_1518729445324584_6418838644192182599_n.jpg")`,
        }}
        data-aos="fade"
      >
        <div class="container">
          <div class="row align-items-start align-items-md-center justify-content-end">
            <div class="col-md-5 text-center text-md-left pt-5 pt-md-0">
              <h1 class="mb-2">Finding Your Perfect Shoes</h1>
              <div class="intro-text text-center text-md-left">
                <p class="mb-4">
                  Step into the world of hype and style with Monkicks, where
                  finding your perfect shoes becomes an exhilarating journey.
                  Our exclusive collection showcases the latest and most coveted
                  lifestyle kicks, designed to make heads turn and hearts skip a
                  beat.{" "}
                </p>
                <p>
                  <Link to="/products" className="btn btn-sm btn-dark">
                    Shop Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section site-section-sm site-blocks-1">
        <div class="container">
          <div class="row">
            <div
              class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"
              data-aos="fade-up"
              data-aos-delay=""
            >
              <div class="icon mr-4 align-self-start">
                <span class="icon-truck"></span>
              </div>
              <div class="text">
                <h2 class="text-uppercase">Free Shipping</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </p>
              </div>
            </div>
            <div
              class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="icon mr-4 align-self-start">
                <span class="icon-refresh2"></span>
              </div>
              <div class="text">
                <h2 class="text-uppercase">Free Returns</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </p>
              </div>
            </div>
            <div
              class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="icon mr-4 align-self-start">
                <span class="icon-help"></span>
              </div>
              <div class="text">
                <h2 class="text-uppercase">Customer Support</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section site-blocks-2">
        <div class="container">
        <div class="row">
            <div class="col-md-12">
              <div class="site-section site-blocks-2">
                <div class="row justify-content-center text-center mb-5">
                  <div class="col-md-7 pt-4">
                    <h2 style={{ color: "black" }}>Categories</h2>
                  </div>
                </div>
                <div class="row">
                  <div
                    class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"
                    data-aos="fade"
                    data-aos-delay="200"
                  >
                    <Link to="/products" className="block-2-item">
                      <div class="image">
                        <img src="images/men.jpg" alt="" class="img-fluid" />
                      </div>
                      <div class="text">
                        <span class="text-uppercase">Collections</span>
                        <h3>Men</h3>
                      </div>
                      </Link>
                  </div>
                  <div
                    class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"
                    data-aos="fade"
                    data-aos-delay="100"
                  > <Link to="/products" className="block-2-item">
                      <div class="image">
                        <img
                          src="images\WeStrive Blog Cover - webflow + Trainer photo.png"
                          alt=""
                          class="img-fluid"
                        />
                      </div>
                      <div class="text">
                        <span class="text-uppercase">Collections</span>
                        <h3>Unisex</h3>
                      </div>
                    </Link>
                  </div>

                  <div
                    class="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0"
                    data-aos="fade"
                    data-aos-delay=""
                  >
                    <Link to="/products" className="block-2-item">
                      <div class="image">
                        <img src="images/women.jpg" alt="" class="img-fluid" />
                      </div>
                      <div class="text">
                        <span class="text-uppercase">Collections</span>
                        <h3>Women</h3>
                      </div>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section block-8">
        <div class="container">
          <div class="row justify-content-center  mb-5">
            <div class="col-md-7 text-center pt-4">
              <h2 style={{ color: "black" }}>Big Sale!</h2>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-md-12 col-lg-7 mb-5">
              <a href="#">
                <img
                  src="images/shoes.jpg"
                  alt="Image placeholder"
                  class="img-fluid rounded"
                />
              </a>
            </div>
            <div class="col-md-12 col-lg-5 text-center pl-md-5">
              <h2>
                <a href="#" style={{ color: "black" }}>
                  50% less in all items
                </a>
              </h2>
              <p>
                Exciting news for hype shoe lovers! We're thrilled to offer up
                to 50% off on shipping fees for your first order!
              </p>
              <p>
                <Link to="/products" class="btn btn-dark btn-sm">
                  Shop Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
