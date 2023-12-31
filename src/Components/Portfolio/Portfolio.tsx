import React, { useState } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { WhatsApp } from "@mui/icons-material";
import { IconButton, Link as MaterialLink } from "@mui/material";
import img1 from "../../Assets/Images/Core Values/integrity.png";
import img2 from "./images1/1666806006839.jpg";
import img3 from "./images1/NCYH12 (1).jpg";
import img4 from "./images1/1667126091575.jpg";
import img5 from "./images2/IMG_6497.jpg";
import img6 from "./images2/Screenshot 2022-09-26 232805.jpg";
import img7 from "./images2/GHS05.jpg";
import img8 from "./images2/VIlla3.jpg";
import img9 from "./images2/Plant12.jpg";
import img10 from "./images2/01.jpg";
import img11 from "./images2/Con Ed NYC_06.jpg";
import img12 from "./images2/378 West End Ave_Facade_10.jpg";
import img13 from "./images2/75 Varick 08.jpg";
import img14 from "./images2/329&331 Main Street_03.jpg";
import img15 from "./images2/JJ Render.jpg";
import img16 from "./images2/414 Flushing Ave_05.jpg";
import img17 from "./images2/Model 2.jpg";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
import projectsData from "../../Constants/projectsData";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Model from "../../Constants/Model";
// import Model from "../../Constants/Model";
import "./port.css";
// import "./images1";

const Portfolio = () => {
  // const [model, setModel] = React.useState(false);
  // const [tempdata, setTempdata] = React.useState<string[]>([]);
  // const [idValue, setIdvalue] = React.useState<number>();

  // const getData = (img: string, title: string, desc: string) => {
  //   let tempData = [img, title, desc];
  //   setTempdata((item) => ["1", ...tempData]);
  //   return setModel(true);
  // };
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = (id: number) => {
  //   setOpen(true);
  //   setIdvalue(id);
  // };
  // const handleClose = () => setOpen(false);

  return (
    <>
      <div className="container-fluid portfolio-container p-0">
        <Header />
        <div
          className="container img-container mt-5 mb-5"
          data-aos="zoom-in"
          data-aos-delay={700}
        >
          <h1 className="text-bold text-center">NineFive BIM Portfolio</h1>
          <h3 className="text-center">
            We have done projects across residential, commercial, industrial,
            institutional and other segments.
          </h3>
        </div>

        <div className="container text-center mt-5 mb-5">
          <button type="button" className="m-2 btn btn-outline-secondary">
            ALL
          </button>
          <button type="button" className="m-2 btn btn-outline-secondary">
            ARTS AND ENTERTAINMENT
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            COMMERCIAL
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            HEALTHCARE
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            HERITAGE
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            HOSPITALITY
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            INDUSTRIAL
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            INFRASTRUCTURAL
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            INSTITUTIONAL
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            MIXED USE DEVELOPMENT
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            PUBLIC WORK
          </button>
          <button type="button" className=" m-2 btn btn-outline-secondary">
            RESIDENTIAL
          </button>
        </div>
        {/* <div className="container">
          <div className="row">
            {projectsData.map((data, key) => {
              return (
                <div className="col-md-4 p-2">
                  <div
                    className="card"
                    style={{ width: "25rem", height: "35rem" }}
                    key={data.id}
                  >
                    <img src={data.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.description}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleOpen(data.id)}
                      >
                        Go somewhere
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* <div
          className="modal fade"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.8)" }}
        >
          {
            open && 
          }
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">bfrfv</h1>
                <button type="button" className="btn-close"></button>
              </div>
              <div className="modal-body">
                <img src={img1} alt="" />
                <p>hfvbwdrh</p>
              </div>
              <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
            </div>
          </div>
        </div> */}
        {/* <div className="container">
          <div className="row">
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
            <div className="col-md-4 p-2">
              <img
                src={img1}
                alt="img-1"
                style={{ width: "500px", height: "500px" }}
              />
            </div>
          </div>
        </div>*/}
      </div>

      <div className="main">
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img2} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Heritage church Facade model</h2>
                <br />
                <p className="card_text">
                  Project Over View: A detailed Facade Model of a heritage
                  <br />
                  Church Building From Given photographs and old drawings.
                  <br />
                  Type : BIM Models
                  <br />
                  Sector: Public Building
                  <br />
                  Scope : BIM Architecture
                  <br />
                  Deliverables: LOD 500 As-build Achitectural model with
                  surrounding building blocks.
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img3} />
              </div>
              <div className="card_content">
                <h2 className="card_title">City Hall Model</h2> <br />
                <p className="card_text">
                  <b>Project Over View:</b> Detailed Exterior model of a City
                  hall in New york
                  <br />
                  Type : BIM Models <br />
                  Sector: Public Building <br />
                  Scope : BIM Architecture
                  <br />
                  Deliverables: LOD 500 As-build Achitectural <br />
                  model. <br />
                  <br />
                  <br />
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img4} />
              </div>
              <div className="card_content">
                <h2 className="card_title">3D Dome Model</h2>
                <br />
                <p className="card_text">
                  Project Over View: To review caliber and skill of the team,
                  NineFive BIM's team has developed an incredible 3D model of a
                  Dome with detailed facade.
                  <br />
                  Building Type : BIM Models <br />
                  Sector: Public Building <br />
                  Scope : BIM Architecture <br />
                  Deliverables:
                  <br />
                  <br />
                  <br />
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img5} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Landsdale Park</h2>
                <br />
                <p className="card_text">
                  Project Over View: AS-build 3D model to use for renovation
                  work, based on CAD drawings and Photographs. Type : BIM Models
                  Sector: Residencial Building Scope : BIM Architecture &
                  Structure Deliverables: LOD 400 Model to be delivered Along
                  with quantity and Material take off. <br /> <br />
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img6} />
              </div>
              <div className="card_content">
                <h2 className="card_title">173 King's Rd.</h2>
                <br />
                <p className="card_text">
                  Project Over View: AS-build 3D model, based on CAD drawings
                  and Photographs. <br />
                  Type : BIM Models <br />
                  Sector: Residencial Building <br />
                  Scope : BIM Architecture <br />
                  Deliverables: LOD 300 3D Revit model with accurate landscape.
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img7} />
              </div>
              <div className="card_content">
                <h2 className="card_title">School Model</h2>
                <br />
                <p className="card_text">
                  Project Over View: 3D model of the School is to manage the
                  design, construction and renovation of school facilities in
                  New York City. <br />
                  Type : BIM Models <br />
                  Sector: Public Building <br />
                  Scope: BIM Architecture <br />
                  Deliverables:LOD 400 BIM Architectural Model
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img8} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Villa</h2>
                <br />
                <p className="card_text">
                  Project Over View: AS-build 3D model, based on CAD drawings
                  and Photographs. <br />
                  Type : BIM Models <br />
                  Sector: Residencial Building <br />
                  Scope : BIM Architecture <br />
                  Deliverables: LOD 300 3D Revit model with accurate materials.
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img9} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Chemical Refinery As-build</h2>
                <br />
                <p className="card_text">
                  Project Over View: As-build 3D model of a chemical refinery to
                  re-work and prefabrication of new piping during an upgrade.{" "}
                  <br />
                  Type : BIM MEP Models <br />
                  Sector: Industrail Building <br />
                  Scope : BIM MEP <br />
                  Deliverables: LOD 300 3D Revit MEP model with clash detection.
                  <br />
                  <br />
                  <br />
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img10} />
              </div>
              <div className="card_content">
                <h2 className="card_title">As-Build Chiller Plant</h2>
                <br />
                <p className="card_text">
                  Project Over View: As-build 3D model of chiller plant facility
                  where used to create as-built p&id drawings for engineering
                  design, clash detection, and coordination drawings. <br />
                  Type : BIM MEP Models <br />
                  Sector: Industrail Building <br />
                  Scope : BIM MEP <br />
                  Deliverables: LOD 300 3D Revit MEP model of piping, valves,
                  equipement, and structural steel using laser scan point
                  clouds.
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img11} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Process Plant As-Built</h2>
                <br />
                <p className="card_text">
                  Project Over View: As-build 3D model of Process plant where
                  used to connect tie-in points, clash detection of new piping,
                  and construction coordination drawings. <br />
                  Type : BIM MEP Models <br />
                  Sector: Industrail Building <br />
                  Scope : BIM MEP <br />
                  Deliverables: LOD 300 3D Revit MEP model of electrical
                  conduit, ductwork, hot and cold water piping, cable-tray, pipe
                  hangars, valves, equipement, and structural steel using laser
                  scan point clouds
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img12} />
              </div>
              <div className="card_content">
                <h2 className="card_title">West End Commercial</h2>
                <br />
                <p className="card_text">
                  Project Over View: AS-build 3D model of Exterior & Roof of
                  Commercial Building From laser scanned data. <br />
                  Type : Scan-To-BIM Models <br />
                  Sector: Commercial Building <br />
                  Scope : BIM Architecture <br />
                  Deliverables: LOD 400 3D Revit model with Accurate
                  Architectural Details in exterior.
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img13} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Varick Shopping Mall</h2>
                <br />
                <p className="card_text">
                  Project Over View: AS-build 3D model of complete Interior,
                  Exterior & Roof of a Shopping Mall From laser scanned data.
                  <br />
                  Type : Scan-To-BIM Models <br />
                  Sector: Commercial Building <br />
                  Scope : BIM Architecture <br />
                  Deliverables: LOD 400 3D Revit model with Accurate
                  Architectural Details.
                  <br />
                  <br />
                  <br />
                  <br />
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img14} />
              </div>
              <div className="card_content">
                <h2 className="card_title">329 Main St-Brooklyn NY.</h2>
                <br />
                <p className="card_text">
                  Project Over View: AS-build 3D model of complete Interior,
                  Exterior & Roof of a commerical Building From laser scanned
                  data. <br />
                  Type : Scan-To-BIM Models <br />
                  Sector: Commercial Building
                  <br />
                  Scope : BIM Architecture <br />
                  Deliverables: LOD 400 3D Revit model with precise exterior
                  details.
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img15} />
              </div>
              <div className="card_content">
                <h2 className="card_title">JJ Exterior Facade Model</h2>
                <br />
                <p className="card_text">
                  Project Over View: Exterior AS-build 3D model of JJ Library
                  Building From laser scanned data. <br />
                  Type : Scan-To-BIM Models
                  <br />
                  Sector: Public Building <br />
                  Scope : BIM Architecture <br />
                  Deliverables: LOD 400 3D Revit model with precise exterior
                  details.
                  <br />
                  <br />
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img16} />
              </div>
              <div className="card_content">
                <h2 className="card_title">Flushing Ave-Brooklyn NY.</h2>
                <br />
                <p className="card_text">
                  Project Over View: AS-build 3D model of complete Interior,
                  Exterior & Roof of a commerical Building From laser scanned
                  data. <br />
                  Type : Scan-To-BIM Models <br />
                  Sector: Commercial Building <br />
                  Scope : BIM Architecture <br />
                  Deliverables: LOD 400 3D Revit model with precise exterior
                  details.
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <img src={img17} />
              </div>
              <div className="card_content">
                <h2 className="card_title">6 Clark</h2>
                <br />
                <p className="card_text">
                  Project Over View: AS-build 3D model used for upgrade and
                  Renovation from 3D laser scanned Data and Photographs. <br />
                  Type : Scan-To-BIM Models <br />
                  Sector: Residencial Building <br />
                  Scope : BIM Architecture <br />
                  Deliverables: LOD 300 3D Revit model with accurate landscape.
                </p>
                <button className="btn card_btn">Read More</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={img1}
            alt="img-1"
            style={{ width: "500px", height: "500px" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

      {/* 
      <div className="container-fluid mt-5 mb-5">
   
      </div> */}

      {/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}

      {/* <Model /> */}

      <MaterialLink href="https://wa.me/7016591928" target="_blank">
        <IconButton
          size="large"
          className="bg-dark text-success"
          style={{ position: "fixed", bottom: 45, right: 40 }}
        >
          <WhatsApp />
        </IconButton>
      </MaterialLink>
      <Footer />
    </>
  );
};

export default Portfolio;
