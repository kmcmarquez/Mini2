import { useEffect } from "react";
import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { Button, Modal } from "react-bootstrap";
import ScrollToTop from "../scrolltotop";
import { Link } from "react-router-dom";

const Products = () => {
  const [mendata, setmendata] = useState(0);
  const [unisexdata, setunixsexdata] = useState(0);
  const [alldata, setalldata] = useState(0);
  const [whatcategory, setwhatcategory] = useState("All");

  const [catfiltering, setcatfiltering] = useState(true);
  const [pricefiltering, setpricefiltering] = useState(false);
  const [ratingfiltering, setratingfiltering] = useState(false);

  const [xminprice, setxminprice] = useState(0);
  const [xmaxprice, setxmaxprice] = useState(0);
  const [xminrate, setxminrate] = useState(0);
  const [xmaxrate, setxmaxrate] = useState(0);

  let menslist = 0;
  let unisexlist = 0;
  let alllist = 0;

  const [listingofshoes, setlistofshoes] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const [prodname, setprodname] = useState("");
  const [proddesc, setproddesc] = useState("");
  const [prodprice, setprodprice] = useState("");
  const [prodimage, setprodimage] = useState("");

  const PullInformation = async (prodname, proddesc, prodprice, prodimage) => {
    setprodname(prodname);
    setproddesc(proddesc);
    setprodprice(prodprice);
    setprodimage(prodimage);
    setShow(true);
  };

  const getlistofmyshoes = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        setmendata(0);
        setunixsexdata(0);
        setalldata(0);
        menslist = 0;
        unisexlist = 0;
        alllist = 0;

        return response.json();
      })
      .then(function (myJson) {
        setlistofshoes(myJson);

        setmendata(0);
        setunixsexdata(0);
        setalldata(0);
        menslist = 0;
        unisexlist = 0;
        alllist = 0;

        Object.values(myJson).map((item) => {
          if (item.category == "Mens") {
            menslist = menslist + 1;
            setmendata(menslist);
            alllist = alllist + 1;
            setalldata(alllist);
          } else if (item.category == "Unisex") {
            unisexlist = unisexlist + 1;
            setunixsexdata(unisexlist);
            alllist = alllist + 1;
            setalldata(alllist);
          }
        });
      });
  };

  useEffect(() => {
    getlistofmyshoes();
  }, []);

  const CheckPrice = async (min, max) => {
    setxminprice(min);
    setxmaxprice(max);

    setcatfiltering(false);
    setpricefiltering(true);
    setratingfiltering(false);
  };

  const CheckRating = async (min, max) => {
    setxminrate(min);
    setxmaxrate(max);

    setcatfiltering(false);
    setpricefiltering(false);
    setratingfiltering(true);
  };

  const FilterData = async (key) => {
    setwhatcategory(key);
    setcatfiltering(true);
    setpricefiltering(false);
    setratingfiltering(false);
  };

  return (
    <>
      <ScrollToTop />
      <div class="site-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-9 order-2">
              <div class="row">
                <div class="col-md-12 mb-5">
                  <div class="float-md-left mb-4">
                    <h2 class="text-black h5">Shop All</h2>
                  </div>
                  <div class="d-flex">
                    <div class="dropdown mr-1 ml-md-auto">
                      <button
                        type="button"
                        class="btn btn-dark btn-sm dropdown-toggle"
                        id="dropdownMenuOffset"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Latest
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuOffset"
                      >
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={() => FilterData("Mens")}
                        >
                          Mens
                        </a>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={() => FilterData("Unisex")}
                        >
                          Unisex
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mb-5">
                {Object.values(listingofshoes).map((item) => {
                  if (catfiltering == true) {
                    if (whatcategory == "All") {
                      return (
                        <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                          <div class="block-4 text-center border">
                            <div
                              class="block-4-image"
                              onClick={() =>
                                PullInformation(
                                  item.name,
                                  item.description,
                                  item.price,
                                  item.image
                                )
                              }
                            >
                              <img
                                src={item.image}
                                alt="Image placeholder"
                                style={{ height: "250px", width: "250px" }}
                              />
                            </div>
                            <div class="block-4-text p-4">
                              <div style={{ height: "100px" }}>
                                <h3>{item.name}</h3>
                              </div>
                              <p
                                class="font-weight-bold"
                                style={{ color: "#816c61" }}
                              >
                                {item.category}
                              </p>
                              <p style={{ color: "black" }}>₱{item.price}</p>
                            </div>
                          </div>
                        </div>
                      );
                    } else if (whatcategory == "Mens") {
                      if (item.category == "Mens") {
                        return (
                          <div
                            class="col-sm-6 col-lg-4 mb-4"
                            data-aos="fade-up"
                          >
                            <div class="block-4 text-center border">
                              <div
                                class="block-4-image"
                                onClick={() =>
                                  PullInformation(
                                    item.name,
                                    item.descrption,
                                    item.price,
                                    item.image
                                  )
                                }
                              >
                                <img
                                  src={item.image}
                                  alt="Image placeholder"
                                  style={{ height: "250px", width: "250px" }}
                                />
                              </div>
                              <div class="block-4-text p-4">
                                <div style={{ height: "100px" }}>
                                  <h3>{item.name}</h3>
                                </div>
                                <p
                                  class="font-weight-bold"
                                  style={{ color: "#816c61" }}
                                >
                                  {item.category}
                                </p>
                                <p style={{ color: "black" }}>₱{item.price}</p>
                              </div>
                            </div>
                          </div>

                        );
                      } else {
                      }
                    } else if (whatcategory == "Unisex") {
                      if (item.category == "Unisex") {
                        return (
                          <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                          <div class="block-4 text-center border">
                            <div
                              class="block-4-image"
                              onClick={() =>
                                PullInformation(
                                  item.name,
                                  item.description,
                                  item.price,
                                  item.image
                                )
                              }
                            >
                              <img
                                src={item.image}
                                alt="Image placeholder"
                                style={{ height: "250px", width: "250px" }}
                              />
                            </div>
                            <div class="block-4-text p-4">
                              <div style={{ height: "100px" }}>
                                <h3>{item.name}</h3>
                              </div>
                              <p
                                class="font-weight-bold"
                                style={{ color: "#816c61" }}
                              >
                                {item.category}
                              </p>
                              <p style={{ color: "black" }}>₱{item.price}</p>
                            </div>
                          </div>
                        </div>
                        );
                      } else {
                      }
                    }
                  } else if (pricefiltering == true) {
                    if (item.price >= xminprice && item.price <= xmaxprice) {
                      return (
                        <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                          <div class="block-4 text-center border">
                            <div
                              class="block-4-image"
                              onClick={() =>
                                PullInformation(
                                  item.name,
                                  item.description,
                                  item.price,
                                  item.image
                                )
                              }
                            >
                              <img
                                src={item.image}
                                alt="Image placeholder"
                                style={{ height: "250px", width: "250px" }}
                              />
                            </div>
                            <div class="block-4-text p-4">
                              <div style={{ height: "100px" }}>
                                <h3>{item.name}</h3>
                              </div>
                              <p
                                class="font-weight-bold"
                                style={{ color: "#816c61" }}
                              >
                                {item.category}
                              </p>
                              <p style={{ color: "black" }}>₱{item.price}</p>
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                    }
                  } else if (ratingfiltering == true) {
                    if (
                      item.rating.rate >= xminrate &&
                      item.rating.rate <= xmaxrate
                    ) {
                      return (
                        <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                          <div class="block-4 text-center border">
                            <div
                              class="block-4-image"
                              onClick={() =>
                                PullInformation(
                                  item.name,
                                  item.description,
                                  item.price,
                                  item.image
                                )
                              }
                            >
                              <img
                                src={item.image}
                                alt="Image placeholder"
                                style={{ height: "250px", width: "250px" }}
                              />
                            </div>
                            <div class="block-4-text p-4">
                              <div style={{ height: "100px" }}>
                                <h3>{item.name}</h3>
                              </div>
                              <p
                                class="font-weight-bold"
                                style={{ color: "#816c61" }}
                              >
                                {item.category}
                              </p>
                              <p style={{ color: "black" }}>₱{item.price}</p>
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                    }
                  }
                })}
              </div>
              <div class="row" data-aos="fade-up">
                <div class="col-md-12 text-center">
                  <div class="site-block-27">
                    <ul>
                      <li>
                        <a href="#" style={{ color: "black" }}>
                          &lt;
                        </a>
                      </li>
                      <li class="active">
                        <span>1</span>
                      </li>
                      <li>
                        <a href="#" style={{ color: "black" }}>
                          2
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ color: "black" }}>
                          3
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ color: "black" }}>
                          4
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ color: "black" }}>
                          5
                        </a>
                      </li>
                      <li>
                        <a href="#" style={{ color: "black" }}>
                          &gt;
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3 order-1 mb-5 mb-md-0">
              <div class="border p-4 rounded mb-4">
                <h3 class="mb-3 h6 text-uppercase text-black d-block">
                  Categories
                </h3>
                <ul class="list-unstyled mb-0">
                  <li class="mb-1">
                    <a
                      href="#"
                      class="d-flex"
                      onClick={() => FilterData("Mens")}
                    >
                      <span style={{ color: "black" }}>Mens</span>{" "}
                      <span class="ml-auto" style={{ color: "black" }}>
                        ({mendata})
                      </span>
                    </a>
                  </li>
                  <li class="mb-1">
                    <a
                      href="#"
                      class="d-flex"
                      onClick={() => FilterData("Unisex")}
                    >
                      <span style={{ color: "black" }}>Unisex</span>{" "}
                      <span class="ml-auto" style={{ color: "black" }}>
                        ({unisexdata})
                      </span>
                    </a>
                  </li>
                  <li class="mb-1">
                    <a
                      href="#"
                      class="d-flex"
                      onClick={() => FilterData("All")}
                    >
                      <span style={{ color: "black" }}>All</span>{" "}
                      <span class="ml-auto" style={{ color: "black" }}>
                        ({alldata})
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="border p-4 rounded mb-4">
                <div class="mb-4">
                  <h3 class="mb-3 h6 text-uppercase text-black d-block">
                    Filter by Price
                  </h3>
                  <MultiRangeSlider
                    min={0}
                    max={1000}
                    onChange={({ minValue, maxValue }) =>
                      CheckPrice(minValue, maxValue)
                    }
                  />
                </div>

                <div class="mb-4">
                  <h3 class="mb-3 h6 text-uppercase text-black d-block">
                    Filter by Ratings
                  </h3>
                  <MultiRangeSlider
                    min={0}
                    max={5}
                    step={1}
                    onChange={({ minValue, maxValue }) =>
                      CheckRating(minValue, maxValue)
                    }
                  />
                </div>
              </div>
            </div>
          </div>

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
                    <a class="block-2-item" href="#">
                      <div class="image">
                        <img src="images/men.jpg" alt="" class="img-fluid" />
                      </div>
                      <div class="text">
                        <span class="text-uppercase">Collections</span>
                        <h3>Men</h3>
                      </div>
                    </a>
                  </div>
                  <div
                    class="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0"
                    data-aos="fade"
                    data-aos-delay="100"
                  >
                    <a class="block-2-item" href="#">
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
                    </a>
                  </div>

                  <div
                    class="col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0"
                    data-aos="fade"
                    data-aos-delay=""
                  >
                    <a class="block-2-item" href="#">
                      <div class="image">
                        <img src="images/women.jpg" alt="" class="img-fluid" />
                      </div>
                      <div class="text">
                        <span class="text-uppercase">Collections</span>
                        <h3>Women</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title style={{ color: "black" }}>{prodname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="site-section">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <img src={prodimage} alt="Image" class="img-fluid" />
                </div>
                <div class="col-md-6">
                  <h2 class="text-black">{prodname}</h2>
                  <p>{proddesc}</p>
                  <p>
                    <strong class="h4" style={{ color: "black" }}>
                      ₱ {prodprice}
                    </strong>
                  </p>
                  <div class="mb-5">
                    <div class="input-group mb-3" style={{ maxwidth: "120px" }}>
                      <div class="input-group-prepend">
                        <button
                          class="btn btn-outline-dark js-btn-minus"
                          type="button"
                        >
                          &minus;
                        </button>
                      </div>
                      <input
                        type="text"
                        class="form-control text-center"
                        value="1"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn btn-outline-dark js-btn-plus"
                          type="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <p>
                    <Link to="/cart" class="buy-now btn btn-sm btn-dark">
                      Add To Cart
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Products;
