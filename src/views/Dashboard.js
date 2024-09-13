/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import hombre from "hombre.png";
import mujer from "mujer.webp";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart
} from "variables/charts.js";

import arturo from "../assets/students/ArturoGarcia.jpeg";
import alo from "../assets/students/Alo_Mtz.jpg";
import adalid from "../assets/students/Adalid Herrera Ruiz_.jpg";
import castro from "../assets/students/Castro.jpeg";
import compean from "../assets/students/CompeanMacias.jpeg";
import contreras from "../assets/students/ContrerasVasquez.jpeg";
import davila from "../assets/students/dávila.jpeg";
import garcia from "../assets/students/Eduardo_Garcia.png";
import elizalde from "../assets/students/Elizalde Barboza Diego Efren.jpeg";
import erick from "../assets/students/ErickMeraz.jpeg";
import evelyn from "../assets/students/EvelynGallegos.jpg";
import yahir from "../assets/students/YahirHernandez.jpeg";
import mafe from "../assets/students/Fernanda_Santillan.jpg";
import haro from "../assets/students/Haro.jpg";
import hector from "../assets/students/Hector.png";
import jared from "../assets/students/JaredFrias.jpg";
import jessica from "../assets/students/jessicontreras.jpg";
import kennya from "../assets/students/Kennya_prof.jpg";
import martin from "../assets/students/MartinMoreno.png";
import moran from "../assets/students/miguelmoranv.jpg";
import roman from "../assets/students/Roman.jpg";
import gus from "../assets/students/Screenshot_20240912_223634_Microsoft 365 (Office).jpg";
import uriel from "../assets/students/Urielgonzalez.PNG";

const alumnos = [
  {
    nombre: "García Cervantes Arturo",
    imagen: arturo,
  },
  {
    nombre: "Martinez Monarrez Alondra",
    imagen: alo,
  },
  {
    nombre: "Herrera Ruiz Adalid",
    imagen: adalid
  },
  {
    nombre: "Castro Iturbide Luis Antonio",
    imagen: castro,
  },
  {
    nombre: "Compean Macias Gerardo Daniel",
    imagen: compean,
  },
  {
    nombre: "Contreras Vasquez Juan Pablo",
    imagen: contreras,
  },
  {
    nombre: "Dávila Barrios David",
    imagen: davila,
  },
  {
    nombre: "Garcia Flores Eduardo",
    imagen: garcia,
  },
  {
    nombre: "Elizalde Barboza Diego Efrén",
    imagen: elizalde,
  },
  {
    nombre: "Meraz Solis Erick Yahir",
    imagen: erick,
  },
  {
    nombre: "Gallegos Valdez Evelyn Michell",
    imagen: evelyn,
  },
  {
    nombre: "Hernandes Escamilla Yahir Antonio",
    imagen: yahir,
  },
  {
    nombre: "Santillán Ledesma María Fernanda",
    imagen: mafe,
  },
  {
    nombre: "Haro Sierra Jocelyne",
    imagen: haro,
  },
  {
    nombre: "Galarza Carreño Hector Fernando",
    imagen: hector,
  },
  {
    nombre: "Frias Aguilar Jared Emiliano",
    imagen: jared,
  },
  {
    nombre: "Contreras Aguilar Jessica",
    imagen: jessica,
  },
  {
    nombre: "Orona Cumplido Kennya Alexandra",
    imagen: kennya,
  },
  {
    nombre: "Moreno López Martin",
    imagen: martin,
  },
  {
    nombre: "Moran Vazquez Miguel Angel",
    imagen: moran,
  },
  {
    nombre: "Roman Hernández Martha Andrea",
    imagen: roman,
  },
  {
    nombre: "Heredia Nuñez Gustavo",
    imagen: gus,
  },
  {
    nombre: "González Urrutia Ángel Uriel",
    imagen: uriel,
  },
];

function Dashboard() {
  return (
    <>
      <div className="content">
      <Row>
      {alumnos.map((alumno, index) => (
        <Col lg="3" md="6" sm="6" key={index}>
          <Card className="card-stats">
            <CardBody>
              <Row>
                <Col md="4" xs="5">
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-globe text-warning" />
                  </div>
                </Col>
                <Col md="8" xs="7">
                  <div className="numbers">
                    <p className="card-category">ALUMNO {index + 1}</p>
                    <CardTitle tag="p">{alumno.nombre}</CardTitle>
                    <p />
                  </div>
                </Col>
              </Row>
            </CardBody>
            <CardFooter>
                <hr />
                <div className="stats">
                </div>
                <a
                  href="/"
                  className="simple-text logo-mini"
                >
                  <div className="logo-img">
                    <img src={alumno.imagen} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
      </div>
    </>
  );
}

export default Dashboard;
