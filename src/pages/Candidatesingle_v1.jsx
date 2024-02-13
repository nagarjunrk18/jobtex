import React from "react";
import PropTypes from "prop-types";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Progress from "../components/progressBar/DonutProgress";
import Gotop from "../components/gotop";
import Video from "../components/popup/Video";
import Gallery from "../components/popup/Gallery";
import { Collapse } from "react-collapse";
import logo from "../assets/images/logo.png";
import Header4 from "../components/header/Header4";
import { Modal, Button, FormLabel } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import monthsjson from "../json/months.json";

Candidatesingle_v1.propTypes = {};

function Candidatesingle_v1(props) {
  const progressRef = useRef();
  const [targetHeight, setTargetHeight] = useState(0);

  const [toggle, setToggle] = useState({
    key: "",
    status: false,
  });
  const [isShowMobile, setShowMobile] = useState(false);
  // model for about
  const [addAbout, setAddAbout] = useState(false);
  const [editAbout, setEditAbout] = useState(false);

  const openAddAbout = () => setAddAbout(true);
  const closeAddAbout = () => setAddAbout(false);

  const openEditAbout = () => setEditAbout(true);
  const closeEditAbout = () => setEditAbout(false);

  //model for education
  const [addEducation, setAddEducation] = useState(false);
  const [editEducation, setEditEducation] = useState(false);

  const openAddEducation = () => setAddEducation(true);
  const closeAddEducation = () => setAddEducation(false);

  const openEditEducation = () => setEditEducation(true);
  const closeEditEducation = () => setEditEducation(false);

  //model for experience
  const [addExperience, setAddExperience] = useState(false);
  const [editExperience, setEditExperience] = useState(false);

  const openAddExperience = () => setAddExperience(true);
  const closeAddExperience = () => setAddExperience(false);

  const openEditExperience = () => setEditExperience(true);
  const closeEditExperience = () => setEditExperience(false);

  //model for skills
  const [addSkill, setAddSkill] = useState(false);
  const [editSkill, setEditSkill] = useState(false);

  const openAddSkill = () => setAddSkill(true);
  const closeAddSkill = () => setAddSkill(false);

  const openEditSkill = () => setEditSkill(true);
  const closeEditSkill = () => setEditSkill(false);

  //model for Career Break
  const [addCareerBreak, setAddCareerBreak] = useState(false);
  const [editCareerBreak, setEditCareerBreak] = useState(false);

  const openAddCareerBreak = () => setAddCareerBreak(true);
  const closeAddCareerBreak = () => setAddCareerBreak(false);

  const openEditCareerBreak = () => setEditCareerBreak(true);
  const closeEditCareerBreak = () => setEditCareerBreak(false);

  const handleToggle = (key) => {
    if (toggle.key === key) {
      setToggle({
        status: false,
      });
    } else {
      setToggle({
        status: true,
        key,
      });
    }
  };

  const custon_margin = {
    marginTop: "24px",
    // Add more style properties as needed
  };

  //month
  const months = monthsjson.months;

  //years
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => currentYear - index);

  //file upload
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // You can perform further actions like uploading the file to a server here
      console.log("Selected file:", selectedFile);
    } else {
      console.log("No file selected");
    }
  };

  const handleMobile = () => {
    const getMobile = document.querySelector(".menu-mobile-popup");
    setShowMobile(!isShowMobile);
    !isShowMobile
      ? getMobile.classList.add("modal-menu--open")
      : getMobile.classList.remove("modal-menu--open");
  };

  useEffect(() => {
    if (progressRef?.current) {
      const offsetHeight = progressRef?.current?.offsetTop;
      setTargetHeight(offsetHeight);
    }
  }, [progressRef]);

  return (
    <>
      <div className="menu-mobile-popup">
        <div className="modal-menu__backdrop" onClick={handleMobile}></div>
        <div className="widget-filter">
          <div className="mobile-header">
            <div id="logo" className="logo">
              <Link to="/">
                <img className="site-logo" src={logo} alt="Image" />
              </Link>
            </div>
            <Link className="title-button-group" onClick={handleMobile}>
              <i className="icon-close"></i>
            </Link>
          </div>

          <Tabs className="tf-tab">
            <TabList className="menu-tab">
              <Tab className="user-tag">Menu</Tab>
              <Tab className="user-tag">Categories</Tab>
            </TabList>

            <div className="content-tab">
              <TabPanel className="header-ct-center menu-moblie animation-tab">
                <div className="nav-wrap">
                  <nav className="main-nav mobile">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("home");
                          }}
                        >
                          Home
                        </Link>
                        <Collapse isOpened={toggle.key === "home"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "home" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/">Home Page 01 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v2">Home Page 02 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v3">Home Page 03 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v4">Home Page 04 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v5">Home Page 05 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v6">Home Page 06 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v7">Home Page 07 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v8">Home Page 08 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v9">Home Page 09 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v10">Home Page 10 </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>

                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("job");
                          }}
                        >
                          Find jobs
                        </Link>
                        <Collapse isOpened={toggle.key === "job"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "job" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v1">List Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/job-grid">Grid Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/job-list-sidebar">List Sidebar</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/job-grid-sidebar">Grid Sidebar</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v5">
                                List Sidebar Fullwidth
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v6">
                                Grid Sidebar Fullwidth
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v7">Top Map</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v8">Top Map Sidebar</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v9">Half Map - V1</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/joblist_v10">Half Map - V2</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/jobsingle_v1">Jobs Single - V1</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/jobsingle_v2">Jobs Single - V2</Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>

                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("employers");
                          }}
                        >
                          Employers
                        </Link>
                        <Collapse isOpened={toggle.key === "employers"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "employers" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item">
                              <Link to="/employers_v1">List Layout</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v2">Grid Layout</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v3">List Sidebar</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v4">Grid Sidebar</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v5">Full Width</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v6">Top Map</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employers_v7">Half Map</Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employersingle_v1">
                                Employers Single - V1
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employersingle_v2">
                                Employers Single - V2
                              </Link>
                            </li>

                            <li className="menu-item">
                              <Link to="/employerreview">
                                Employers Reviews
                              </Link>
                            </li>
                            <li className="menu-item">
                              <Link to="/employernotfound">
                                Employers Not Found
                              </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                      <li className="menu-item menu-item-has-children-mobile current-item">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("candidate");
                          }}
                        >
                          Candidates
                        </Link>
                        <Collapse isOpened={toggle.key === "candidate"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "candidate" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v1">List Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v2">Grid Layout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v3">List Sidebar</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v4">Top Map</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v5">Half Map</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v6">No Available V1</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidates_v7">No Available V2</Link>
                            </li>
                            <li className="menu-item menu-item-mobile current-item">
                              <Link to="/candidatesingle_v1">
                                Candidate Single - V1
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/candidatesingle_v2">
                                Candidate Single - V2
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/samplecv">Sample CV</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/samplecvslidebar">
                                Sample CV Sidebar
                              </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/samplecvdetails">CV Details</Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("blog");
                          }}
                        >
                          Blog
                        </Link>
                        <Collapse isOpened={toggle.key === "blog"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "blog" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blog_v1">Blog List </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blog_v2">Blog Grid</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blog_v3">Blog Masonry</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blogsingle_v1">Blog Details - V1</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blogsingle_v2">Blog Details - V2</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/blogsingle_v3">
                                Blog Details Sidebar
                              </Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                      <li className="menu-item menu-item-has-children-mobile">
                        <Link
                          to="#"
                          className="iteam-menu"
                          onClick={() => {
                            handleToggle("pages");
                          }}
                        >
                          Pages
                        </Link>
                        <Collapse isOpened={toggle.key === "pages"}>
                          <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "pages" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/aboutus">About Us</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/faqs">FAQS</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/termsofuse">Terms Of Use</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/pricing">Pricing</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/shop">Shop List</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/shoppingcart">Shopping Cart</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/shopsingle">Shop Single</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/checkout">Checkout</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/login">Login</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/createaccount">Create Account</Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/contactus">Contact Us</Link>
                            </li>
                          </ul>
                        </Collapse>
                      </li>
                    </ul>
                  </nav>
                </div>
              </TabPanel>

              <TabPanel className="categories animation-tab">
                <div className="sub-categorie-mobile">
                  <ul className="pop-up">
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-1"></span>Design &
                        Creative
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-8"></span>Digital
                        Marketing
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-2"></span>Development &
                        IT
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-3"></span>Music & Audio
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-4"></span>Finance &
                        Accounting
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-5"></span>Programming &
                        Tech
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-6"></span>Video &
                        Animation
                      </Link>
                    </li>
                    <li className="categories-mobile">
                      <Link to="/jobsingle_v1">
                        <span className="icon-categorie-7"></span>Writing &
                        translation
                      </Link>
                    </li>
                  </ul>
                </div>
              </TabPanel>
            </div>
          </Tabs>

          <div className="header-customize-item button">
            <Link to="/">Upload Resume</Link>
          </div>

          <div className="mobile-footer">
            <div className="icon-infor d-flex aln-center">
              <div className="icon">
                <span className="icon-call-calling">
                  <span className="path1"></span>
                  <span className="path2"></span>
                  <span className="path3"></span>
                  <span className="path4"></span>
                </span>
              </div>
              <div className="content">
                <p>Need help? 24/7</p>
                <h6>
                  <Link to="tel:0123456678">001-1234-88888</Link>
                </h6>
              </div>
            </div>
            <div className="wd-social d-flex aln-center">
              <ul className="list-social d-flex aln-center">
                <li>
                  <Link to="#">
                    <i className="icon-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-linkedin2"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-pinterest"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-instagram1"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="icon-youtube"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Header4 clname="actCan3" handleMobile={handleMobile} />

      <section className="wrapper-author-page-title style2 stc form-sticky fixed-space">
        <div className="tf-container">
          <div className="wd-author-page-title">
            <div className="author-archive-header">
              <img
                src={require("../assets/images/user/avatar/avt-author-1.jpg")}
                alt="jobtex"
                className="logo-company"
              />
              <div className="content">
                <Link to="#" className="tag-head">
                  Available now
                </Link>
                <h4>
                  <Link to="#">Computer Systems Analyst</Link>
                </h4>
                <h3>
                  <Link to="#">Maverick Nguyen</Link>
                  <span className="icon-bolt"></span>
                </h3>
                <ul className="author-list">
                  <li className="tag"> Blender </li>
                  <li className="tag"> Sketch </li>
                  <li className="tag"> Adobe XD </li>
                  <li className="tag"> Figma </li>
                  <li className="map">
                    <span className="icon-map-pin"></span>&nbsp; Tokyo, Japan
                  </li>
                  <li className="price">
                    <span className="icon-dolar1"></span>&nbsp; $300/day
                  </li>
                </ul>
              </div>
            </div>
            <div className="author-archive-footer">
              <button className="tf-btn btn-popup">DownLoad CV</button>
              <button className="tf-btn btn-author">Message</button>
            </div>
          </div>
        </div>
      </section>

      <section className="candidates-section">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-8">
              <Tabs className="job-article stc tf-tab single-job">
                <TabList className="menu-tab stc">
                  <Tab className="ct-tab">Resumes</Tab>
                  <Tab className="ct-tab">Portfolio</Tab>
                  <Tab className="ct-tab">Contact</Tab>
                </TabList>
                <div className="content-tab">
                  <TabPanel className="inner-content animation-tab">
                    <div class="d-flex">
                      <div class="p-2 custom_margin">
                        <h5>About me</h5>
                      </div>
                      <div class="p-2 ">
                        {" "}
                        <a onClick={openAddAbout}>
                          <i class="icon-plus"></i>
                        </a>
                      </div>
                      <div class="p-2 ">
                        {" "}
                        <a onClick={openEditAbout}>
                          <i class="bi bi-pencil"></i>
                        </a>
                      </div>
                      {/*  <div class="p-2 bg-primary">Flex item 3</div> */}
                    </div>

                    <p>
                      Are you a User Experience Designer with a track record of
                      delivering intuitive digital experiences that drive
                      results? Are you a strategic storyteller and systems
                      thinker who can concept and craft smart, world-class
                      campaigns across a variety of mediums?
                    </p>
                    {/*  <p className="mg-39">
                      Deloitte's Green Dot Agency is looking to add a Lead User
                      Experience Designer to our experience design team. We want
                      a passionate creative who's inspired by new trends and
                      emerging technologies, and is able to integrate them into
                      memorable user experiences. A problem solver who is
                      entrepreneurial, collaborative, hungry, and humble; can
                      deliver beautifully designed, leading-edge experiences
                      under tight deadlines; and who has demonstrated proven
                      expertise.
                    </p> */}
                    {/* Button to open the modal */}

                    {/* Modal component */}
                    <Modal show={addAbout} onHide={closeAddAbout}>
                      <Modal.Header closeButton>
                        <Modal.Title>Add about</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {/* Content for the modal */}
                        <FormLabel>
                          <form method="">
                            <Row>
                              <Col xs={12} md={12}>
                                <div className="ip out group-note">
                                  <label>
                                    You can write about your years of
                                    experience, industry, or skills. People also
                                    talk about their achievements or previous
                                    job experiences
                                  </label>
                                  <textarea
                                    placeholder="Write note"
                                    id="editabttxtarea"
                                  ></textarea>
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </FormLabel>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={closeAddAbout}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={closeAddAbout}>
                          Save
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <Modal show={editAbout} onHide={closeEditAbout}>
                      <Modal.Header closeButton>
                        <Modal.Title>Edit about</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {/* Content for the modal */}
                        <FormLabel>
                          <form method="">
                            <Row>
                              <Col xs={12} md={12}>
                                <div className="ip out group-note">
                                  <label>
                                    You can write about your years of
                                    experience, industry, or skills. People also
                                    talk about their achievements or previous
                                    job experiences
                                  </label>
                                  <textarea
                                    placeholder="Write note"
                                    id="addabttxtarea"
                                  ></textarea>
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </FormLabel>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={closeEditAbout}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={closeEditAbout}>
                          Save
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    <div class="d-flex">
                      <div class="p-2 custom_margin">
                        <h5>Education</h5>
                      </div>
                      <div class="p-2 ">
                        {" "}
                        <a onClick={openAddEducation}>
                          <i class="icon-plus"></i>
                        </a>
                      </div>
                      <div class="p-2 ">
                        {" "}
                        <a onClick={openEditEducation}>
                          <i class="bi bi-pencil"></i>
                        </a>
                      </div>
                      {/*  <div class="p-2 bg-primary">Flex item 3</div> */}
                    </div>
                    <Modal show={addEducation} onHide={closeAddEducation}>
                      <Modal.Header closeButton>
                        <Modal.Title>Add education</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {/* Content for the modal */}
                        <FormLabel>
                          <form method="">
                            <Row>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>School</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Boston University"
                                    id="addeduscl"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Degree</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Bachelor's"
                                    id="addedudegree"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Field of study</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Business"
                                    id="addedufieldofstudy"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <label>Start date</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="addedusdatemonth"
                                  >
                                    <option>Select</option>
                                    {months.map((a) => (
                                      <option key={a.value} value={a.value}>
                                        {a.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="addedusdateyr"
                                    style={custon_margin}
                                  >
                                    <option>Select</option>
                                    {years.map((year, index1) => (
                                      <option
                                        key={`year${index1}`}
                                        value={year}
                                      >
                                        {year}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <label>End date (or expected)</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="addeduendmonth"
                                  >
                                    <option>Select</option>
                                    {months.map((b) => (
                                      <option key={b.value} value={b.value}>
                                        {b.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="addeduendyr"
                                    style={custon_margin}
                                  >
                                    <option>Select</option>
                                    {years.map((year, index2) => (
                                      <option
                                        key={`year${index2}`}
                                        value={year}
                                      >
                                        {year}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Grade</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Bachelor's"
                                    id="addedugrade"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Activities and societies</label>
                                  <textarea
                                    placeholder="Write note"
                                    id="addeduactivities"
                                  ></textarea>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Description</label>
                                  <textarea
                                    placeholder="Write note"
                                    id="addedudescription"
                                  ></textarea>
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </FormLabel>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={closeAddEducation}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={closeAddEducation}>
                          Save
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <Modal show={editEducation} onHide={closeEditEducation}>
                      <Modal.Header closeButton>
                        <Modal.Title>Edit education</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {/* Content for the modal */}
                        <FormLabel>
                          <form method="">
                            <Row>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>School</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Boston University"
                                    id="editeduscl"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Degree</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Bachelor's"
                                    id="editedudegree"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Field of study</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Business"
                                    id="editedufieldofstudy"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <label>Start date</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="editedusdatemonth"
                                  >
                                    <option>Select</option>
                                    {months.map((c) => (
                                      <option key={c.value} value={c.value}>
                                        {c.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="editedusdateyr"
                                    style={custon_margin}
                                  >
                                    <option>Select</option>
                                    {years.map((year, index3) => (
                                      <option
                                        key={`year${index3}`}
                                        value={year}
                                      >
                                        {year}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <label>End date (or expected)</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="editeduendmonth"
                                  >
                                    <option>Select</option>
                                    {months.map((d) => (
                                      <option key={d.value} value={d.value}>
                                        {d.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="editeduendyr"
                                    style={custon_margin}
                                  >
                                    <option>Select</option>
                                    {years.map((year, index4) => (
                                      <option
                                        key={`year${index4}`}
                                        value={year}
                                      >
                                        {year}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Grade</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Bachelor's"
                                    id="editedugrade"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Activities and societies</label>
                                  <textarea
                                    placeholder="Write note"
                                    id="editeduactivities"
                                  ></textarea>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Description</label>
                                  <textarea
                                    placeholder="Write note"
                                    id="editedudescription"
                                  ></textarea>
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </FormLabel>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={closeEditEducation}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={closeEditEducation}>
                          Save
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <div className="group-infor">
                      <div className="inner">
                        <div className="sub-heading">
                          FPT University <span>2019 - 2021</span>
                        </div>
                        <div className="heading">Graphic Design</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                      <div className="inner">
                        <div className="sub-heading">
                          TB Course <span>2019 - 2021</span>
                        </div>
                        <div className="heading">UX Design</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="p-2 custom_margin">
                        <h5>Experience</h5>
                      </div>
                      <div class="p-2 ">
                        {" "}
                        <a onClick={openAddExperience}>
                          <i class="icon-plus"></i>
                        </a>
                      </div>
                      <div class="p-2 ">
                        {" "}
                        <a onClick={openEditExperience}>
                          <i class="bi bi-pencil"></i>
                        </a>
                      </div>
                      {/*  <div class="p-2 bg-primary">Flex item 3</div> */}
                    </div>
                    <Modal show={addExperience} onHide={closeAddExperience}>
                      <Modal.Header closeButton>
                        <Modal.Title>Add experience</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {/* Content for the modal */}
                        <FormLabel>
                          <form method="">
                            <Row>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Title*</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Business"
                                    id="addexptitle"
                                    required
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Employment type</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="addexpemptype"
                                  >
                                    <option>Select</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Company name*</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Business"
                                    id="addexpcmname"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Location</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Business"
                                    id="addexplocation"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Location type</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="addexplocationtype"
                                  >
                                    <option>Select</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <input
                                    type="checkbox"
                                    className="mr-3"
                                    id="addexpworkingrole"
                                  />
                                  <label>
                                    {" "}
                                    I am currently working in this roles
                                  </label>
                                </div>
                              </Col>

                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <label>Start date</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="addexpsdatemonth"
                                  >
                                    <option>Select</option>
                                    {months.map((c) => (
                                      <option key={c.value} value={c.value}>
                                        {c.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="addexpsdateyr"
                                    style={custon_margin}
                                  >
                                    <option>Select</option>
                                    {years.map((year, index3) => (
                                      <option
                                        key={`year${index3}`}
                                        value={year}
                                      >
                                        {year}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <label>End date (or expected)</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="addexpendmonth"
                                  >
                                    <option>Select</option>
                                    {months.map((d) => (
                                      <option key={d.value} value={d.value}>
                                        {d.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="addexpendyr"
                                    style={custon_margin}
                                  >
                                    <option>Select</option>
                                    {years.map((year, index4) => (
                                      <option
                                        key={`year${index4}`}
                                        value={year}
                                      >
                                        {year}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Industry*</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Business"
                                    id="addexpindustry"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Description</label>
                                  <textarea
                                    placeholder="Write note"
                                    id="addexpdescription"
                                  ></textarea>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Profile headline</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Business"
                                    id="addexpproheadline"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div class="p-2">
                                  <h6>Skills</h6>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>
                                    We recommend adding your top 5 used in this
                                    role. They’ll also appear in your Skills
                                    section.
                                  </label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="addexpskill"
                                  >
                                    <option>Select</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div class="p-2">
                                  <h6>Media</h6>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>
                                    Add media like images, documents, sites or
                                    presentations
                                  </label>
                                  <input
                                    type="file"
                                    onChange={handleFileChange}
                                    id="addexpfileupload"
                                  />
                                  <button onClick={handleFileUpload}>
                                    Upload
                                  </button>
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </FormLabel>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={closeAddExperience}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={closeAddExperience}>
                          Save
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <Modal show={editExperience} onHide={closeEditExperience}>
                      <Modal.Header closeButton>
                        <Modal.Title>Edit experience</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {/* Content for the modal */}
                        <FormLabel>
                          <form method="">
                            <Row>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Title*</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Business"
                                    id="editexptitle"
                                    required
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Employment type</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="editexpemptype"
                                  >
                                    <option>Select</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Company name*</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Business"
                                    id="editexpcmname"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Location</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Business"
                                    id="editexplocation"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Location type</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="editexplocationtype"
                                  >
                                    <option>Select</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <input
                                    type="checkbox"
                                    className="mr-3"
                                    id="editexpworkingrole"
                                  />
                                  <label>
                                    {" "}
                                    I am currently working in this roles
                                  </label>
                                </div>
                              </Col>

                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <label>Start date</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="editexpsdatemonth"
                                  >
                                    <option>Select</option>
                                    {months.map((c) => (
                                      <option key={c.value} value={c.value}>
                                        {c.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="editexpsdateyr"
                                    style={custon_margin}
                                  >
                                    <option>Select</option>
                                    {years.map((year, index3) => (
                                      <option
                                        key={`year${index3}`}
                                        value={year}
                                      >
                                        {year}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <label>End date (or expected)</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="editexpendmonth"
                                  >
                                    <option>Select</option>
                                    {months.map((d) => (
                                      <option key={d.value} value={d.value}>
                                        {d.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="editexpendyr"
                                    style={custon_margin}
                                  >
                                    <option>Select</option>
                                    {years.map((year, index4) => (
                                      <option
                                        key={`year${index4}`}
                                        value={year}
                                      >
                                        {year}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Industry*</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Business"
                                    id="editexpindustry"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Description</label>
                                  <textarea
                                    placeholder="Write note"
                                    id="editexpdescription"
                                  ></textarea>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Profile headline</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Business"
                                    id="editexpproheadline"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div class="p-2">
                                  <h6>Skills</h6>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>
                                    We recommend adding your top 5 used in this
                                    role. They’ll also appear in your Skills
                                    section.
                                  </label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="editexpskill"
                                  >
                                    <option>Select</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div class="p-2">
                                  <h6>Media</h6>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>
                                    Add media like images, documents, sites or
                                    presentations
                                  </label>
                                  <input
                                    type="file"
                                    onChange={handleFileChange}
                                    id="editexpfileupload"
                                  />
                                  <button onClick={handleFileUpload}>
                                    Upload
                                  </button>
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </FormLabel>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={closeEditExperience}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={closeEditExperience}>
                          Save
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    <div className="group-infor">
                      <div className="inner">
                        <div className="sub-heading">
                          FPT University <span>2019 - 2021</span>
                        </div>
                        <div className="heading">Graphic Design</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                      <div className="inner">
                        <div className="sub-heading">
                          TB Course <span>2019 - 2021</span>
                        </div>
                        <div className="heading">UX Design</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                    </div>

                    <div class="d-flex">
                      <div class="p-2 custom_margin">
                        <h5>Career Break</h5>
                      </div>
                      <div class="p-2 ">
                        {" "}
                        <a onClick={openAddCareerBreak}>
                          <i class="icon-plus"></i>
                        </a>
                      </div>
                      <div class="p-2 ">
                        {" "}
                        <a onClick={openEditCareerBreak}>
                          <i class="bi bi-pencil"></i>
                        </a>
                      </div>
                    </div>

                    <Modal show={addCareerBreak} onHide={closeAddCareerBreak}>
                      <Modal.Header closeButton>
                        <Modal.Title>Add CareerBreak</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {/* Content for the modal */}
                        <FormLabel>
                          <form method="">
                            <Row>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <p>
                                    Experiences outside a linear career path can
                                    make people better colleagues, thought
                                    partners, and leaders. Share these moments
                                    that make you unique.
                                  </p>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Type</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="addcarbrktype"
                                  >
                                    <option>Select</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Location</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Business"
                                    id="addcarbrklocation"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <input
                                    type="checkbox"
                                    className="mr-3"
                                    id="addcarbrkcheck"
                                  />
                                  <label>
                                    {" "}
                                    I am currently on this career break
                                  </label>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <label>Start date</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="addcarbrksdatemonth"
                                  >
                                    <option>Select</option>
                                    {months.map((c) => (
                                      <option key={c.value} value={c.value}>
                                        {c.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="addcarbrksdateyr"
                                    style={custon_margin}
                                  >
                                    <option>Select</option>
                                    {years.map((year, index3) => (
                                      <option
                                        key={`year${index3}`}
                                        value={year}
                                      >
                                        {year}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <label>End date (or expected)</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="addcarbrkendmonth"
                                  >
                                    <option>Select</option>
                                    {months.map((d) => (
                                      <option key={d.value} value={d.value}>
                                        {d.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="addcarbrkendyr"
                                    style={custon_margin}
                                  >
                                    <option>Select</option>
                                    {years.map((year, index4) => (
                                      <option
                                        key={`year${index4}`}
                                        value={year}
                                      >
                                        {year}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>

                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Description</label>
                                  <textarea
                                    placeholder="Write note"
                                    id="addcarbrkdescription"
                                  ></textarea>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Profile headline</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Retail"
                                    id="addcarbrkproheadline"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div class="p-2">
                                  <h6>Media</h6>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>
                                    Add media like images, documents, sites or
                                    presentations
                                  </label>
                                  <input
                                    type="file"
                                    onChange={handleFileChange}
                                    id="addcarbrkfileupload"
                                  />
                                  <button onClick={handleFileUpload}>
                                    Upload
                                  </button>
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </FormLabel>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={closeAddCareerBreak}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={closeAddCareerBreak}>
                          Save
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    <Modal show={editCareerBreak} onHide={closeEditCareerBreak}>
                      <Modal.Header closeButton>
                        <Modal.Title>Edit CareerBreak</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {/* Content for the modal */}
                        <FormLabel>
                          <form method="">
                            <Row>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <p>
                                    Experiences outside a linear career path can
                                    make people better colleagues, thought
                                    partners, and leaders. Share these moments
                                    that make you unique.
                                  </p>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Type</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="editcarbrktype"
                                  >
                                    <option>Select</option>
                                    <option>Select</option>
                                    <option>Select</option>
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Location</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Business"
                                    id="editcarbrklocation"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <input
                                    type="checkbox"
                                    className="mr-3"
                                    id="editcarbrkcheck"
                                  />
                                  <label>
                                    {" "}
                                    I am currently on this career break
                                  </label>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <label>Start date</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="editcarbrksdatemonth"
                                  >
                                    <option>Select</option>
                                    {months.map((c) => (
                                      <option key={c.value} value={c.value}>
                                        {c.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="editcarbrksdateyr"
                                    style={custon_margin}
                                  >
                                    <option>Select</option>
                                    {years.map((year, index3) => (
                                      <option
                                        key={`year${index3}`}
                                        value={year}
                                      >
                                        {year}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <label>End date (or expected)</label>
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="editcarbrkendmonth"
                                  >
                                    <option>Select</option>
                                    {months.map((d) => (
                                      <option key={d.value} value={d.value}>
                                        {d.name}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>
                              <Col xs={12} md={6}>
                                <div className="ip p-2">
                                  <Form.Select
                                    aria-label="Default select example"
                                    id="editcarbrkendyr"
                                    style={custon_margin}
                                  >
                                    <option>Select</option>
                                    {years.map((year, index4) => (
                                      <option
                                        key={`year${index4}`}
                                        value={year}
                                      >
                                        {year}
                                      </option>
                                    ))}
                                  </Form.Select>
                                </div>
                              </Col>

                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Description</label>
                                  <textarea
                                    placeholder="Write note"
                                    id="editcarbrkdescription"
                                  ></textarea>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>Profile headline</label>
                                  <input
                                    type="text"
                                    placeholder="EX: Retail"
                                    id="editcarbrkproheadline"
                                  />
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div class="p-2">
                                  <h6>Media</h6>
                                </div>
                              </Col>
                              <Col xs={12} md={12}>
                                <div className="ip p-2">
                                  <label>
                                    Add media like images, documents, sites or
                                    presentations
                                  </label>
                                  <input
                                    type="file"
                                    onChange={handleFileChange}
                                    id="editcarbrkfileupload"
                                  />
                                  <button onClick={handleFileUpload}>
                                    Upload
                                  </button>
                                </div>
                              </Col>
                            </Row>
                          </form>
                        </FormLabel>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={closeEditCareerBreak}>
                          Close
                        </Button>
                        <Button
                          variant="primary"
                          onClick={closeEditCareerBreak}
                        >
                          Save
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    <div className="group-skill group-col-2" ref={progressRef}>
                      <div className="inner cl2">
                        <div class="d-flex">
                          <div class="p-2 custom_margin">
                            <h5>management skills</h5>
                          </div>
                          <div class="p-2 ">
                            {" "}
                            <a onClick={openAddSkill}>
                              <i class="icon-plus"></i>
                            </a>
                          </div>
                          <div class="p-2 ">
                            {" "}
                            <a onClick={openEditSkill}>
                              <i class="bi bi-pencil"></i>
                            </a>
                          </div>
                        </div>

                        <Modal show={addSkill} onHide={closeAddSkill}>
                          <Modal.Header closeButton>
                            <Modal.Title>Add skills</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            {/* Content for the modal */}
                            <FormLabel>
                              <form method="">
                                <Row>
                                  <Col xs={12} md={12}>
                                    <div className="ip p-2">
                                      <label>Skill</label>
                                      <Form.Select
                                        aria-label="Default select example"
                                        id="addskillsskil"
                                      >
                                        <option>Select</option>
                                        <option>Select</option>
                                        <option>Select</option>
                                      </Form.Select>
                                    </div>
                                  </Col>
                                </Row>
                              </form>
                            </FormLabel>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="danger" onClick={closeAddSkill}>
                              Close
                            </Button>
                            <Button variant="primary" onClick={closeAddSkill}>
                              Save
                            </Button>
                          </Modal.Footer>
                        </Modal>
                        <Modal show={editSkill} onHide={closeEditSkill}>
                          <Modal.Header closeButton>
                            <Modal.Title>Edit skills</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            {/* Content for the modal */}
                            <FormLabel>
                              <form method="">
                                <Row>
                                  <Col xs={12} md={12}>
                                    <div className="ip p-2">
                                      <label>Skill</label>
                                      <Form.Select
                                        aria-label="Default select example"
                                        id="editskillsskil"
                                      >
                                        <option>Select</option>
                                        <option>Select</option>
                                        <option>Select</option>
                                      </Form.Select>
                                    </div>
                                  </Col>
                                </Row>
                              </form>
                            </FormLabel>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="danger" onClick={closeEditSkill}>
                              Close
                            </Button>
                            <Button variant="primary" onClick={closeEditSkill}>
                              Save
                            </Button>
                          </Modal.Footer>
                        </Modal>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">HTML & cSS</div>
                              <Progress targetHeight={targetHeight} done="60" />
                            </div>
                          </div>
                        </div>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">word</div>
                              <Progress targetHeight={targetHeight} done="90" />
                            </div>
                          </div>
                        </div>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">Excel</div>
                              <Progress targetHeight={targetHeight} done="90" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="inner cl2">
                        <h5>Design</h5>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">Figma</div>
                              <Progress targetHeight={targetHeight} done="80" />
                            </div>
                          </div>
                        </div>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">Photoshop</div>
                              <Progress targetHeight={targetHeight} done="70" />
                            </div>
                          </div>
                        </div>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">
                                Ilustration
                              </div>
                              <Progress targetHeight={targetHeight} done="90" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h5>Portfolio</h5>
                    <div className="video-thumb">
                      <div className="content-tab2">
                        <div className="inner">
                          <div className="thumb">
                            <img
                              src={require("../assets/images/review/thumbv3.jpg")}
                              alt="images"
                            />
                            <Video />
                          </div>
                        </div>
                      </div>
                      <Gallery />
                    </div>

                    <div className="form-candidate">
                      <h5>Contact Candidate</h5>
                      <form>
                        <div className="group-input">
                          <div className="ip">
                            <label>Subject</label>
                            <input type="text" placeholder="Subject" />
                          </div>
                          <div className="ip">
                            <label>Name</label>
                            <input
                              type="text"
                              placeholder="Name"
                              value="Tony Nguyen |"
                            />
                          </div>
                        </div>
                        <div className="ip out">
                          <label>Email</label>
                          <input
                            type="email"
                            placeholder="Email"
                            value="jobtex@mail.com"
                          />
                        </div>
                        <div className="ip out">
                          <label>Message</label>
                          <textarea placeholder="Message..."></textarea>
                        </div>
                        <button>Send Private Message</button>
                      </form>
                    </div>
                    {/*   <h5>Experience</h5>
                    <div className="group-infor">
                      <div className="inner">
                        <div className="sub-heading">
                          FPT University <span>2019 - 2021</span>
                        </div>
                        <div className="heading">Graphic Design</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                      <div className="inner">
                        <div className="sub-heading">
                          TB Course <span>2019 - 2021</span>
                        </div>
                        <div className="heading">UX Design</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc vulputate libero et velit interdum, ac
                          aliquet odio mattis. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos.
                        </p>
                      </div>
                    </div>

                    <div className="group-skill group-col-2" ref={progressRef}>
                      <div className="inner cl2">
                        <h5>management skills</h5>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">HTML & cSS</div>
                              <Progress targetHeight={targetHeight} done="60" />
                            </div>
                          </div>
                        </div>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">word</div>
                              <Progress targetHeight={targetHeight} done="90" />
                            </div>
                          </div>
                        </div>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">Excel</div>
                              <Progress targetHeight={targetHeight} done="90" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="inner cl2">
                        <h5>Design</h5>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">Figma</div>
                              <Progress targetHeight={targetHeight} done="80" />
                            </div>
                          </div>
                        </div>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">Photoshop</div>
                              <Progress targetHeight={targetHeight} done="70" />
                            </div>
                          </div>
                        </div>
                        <div className="wd-cv-skill">
                          <div className="progress-item">
                            <div className="progress-heading">
                              <div className="heading-progress">
                                Ilustration
                              </div>
                              <Progress targetHeight={targetHeight} done="90" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </TabPanel>
                  <TabPanel className="inner-content animation-tab">
                    <h5>About me</h5>
                    <p>
                      Are you a User Experience Designer with a track record of
                      delivering intuitive digital experiences that drive
                      results? Are you a strategic storyteller and systems
                      thinker who can concept and craft smart, world-class
                      campaigns across a variety of mediums?
                    </p>
                  </TabPanel>
                  <TabPanel className="inner-content animation-tab">
                    <h5>About Company</h5>
                    <p>
                      Are you a User Experience Designer with a track record of
                      delivering intuitive digital experiences that drive
                      results? Are you a strategic storyteller and systems
                      thinker who can concept and craft smart.
                    </p>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
            <div className="col-lg-4">
              <div className="cv-form-details stc po-sticky job-sg">
                <ul className="list-infor">
                  <li>
                    <div className="category">Career Finding</div>
                    <div className="detail">UI UX Designer</div>
                  </li>
                  <li>
                    <div className="category">Location</div>
                    <div className="detail">Hanoi City, VietNam</div>
                  </li>
                  <li>
                    <div className="category">Phone Number</div>
                    <div className="detail">123 456 7890 </div>
                  </li>
                  <li>
                    <div className="category">Email</div>
                    <div className="detail">hi.avitex@gmail.com</div>
                  </li>
                  <li>
                    <div className="category">Offered Salary</div>
                    <div className="detail">$2500/Month</div>
                  </li>
                  <li>
                    <div className="category">Experience time</div>
                    <div className="detail">5 Years</div>
                  </li>
                  <li>
                    <div className="category">Language</div>
                    <div className="detail">English, Vietnamese </div>
                  </li>
                  <li>
                    <div className="category">Age</div>
                    <div className="detail">26 Years Old</div>
                  </li>
                  <li>
                    <div className="category">Qualification</div>
                    <div className="detail">Master Degree</div>
                  </li>
                </ul>

                <div className="wd-social d-flex aln-center">
                  <span>Socials:</span>
                  <ul className="list-social d-flex aln-center">
                    <li>
                      <Link to="#">
                        <i className="icon-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icon-linkedin2"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icon-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icon-pinterest"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icon-instagram1"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="icon-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="preview-cv mgt-32">
                  <div className="title">Samle_cv_jobitex</div>
                  <div className="category">PDF</div>
                  <div className="icon icon-file-pdf"></div>
                </div>
                <a className="btn-dowload">
                  <i className="icon-download"></i> Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Gotop />
    </>
  );
}

export default Candidatesingle_v1;
