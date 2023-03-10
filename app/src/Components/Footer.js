import React from "react";

function Footer() {
  return (
    <>
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div className="col-4 mb-3">
            <img
              src="./IMAGE/Screen Shot 2023-03-08 at 9.05.56 PM.png"
              alt="react logo"
              style={{ width: "400px" }}
            />

            <a href="https://www.google.com/maps/place/348+E+Main+St,+Lexington,+KY+40507/@38.0421746,-84.4947276,17z/data=!3m1!4b1!4m6!3m5!1s0x884244e844532c33:0xb6919957af36b713!8m2!3d38.0421704!4d-84.4925389!16s%2Fg%2F11c5n2lnvk">
              {" "}
            </a>
            <svg className="bi me-2" width="40" height="32"></svg>

            <div className="d-grid gap-2 p-2">
              <a href="https://www.opentable.com/" target="_blank">
                <button className="btn btn-outline-danger btn-lg" type="button">
                  MAKE A RESERVATION
                </button>
              </a>
              <div className="p-2"></div>
              <button type="button" className="btn btn-outline-danger btn-lg">
                EMAIL US!
              </button>
            </div>
          </div>

          <div className="col-4 mb-3"></div>

          <div className="col mb-3"></div>

          <div className="col-4 mb-3">
            <h3>
              <b>A D D R E S S </b>
            </h3>{" "}
            <br />
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6>348 E Main Street</h6>
              </li>
              <li className="nav-item mb-2">
                <h6>Lexington, Kentucky</h6>
              </li>
              <li className="nav-item mb-2">
                <h6>40507</h6>
              </li>
            </ul>
          </div>

          <div className="col-4 mb-3">
            <h3>
              <b>H O U R S </b>
            </h3>{" "}
            <br />
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <h6>Sunday: 5 PM - 10 PM</h6>
              </li>
              <li className="nav-item mb-2">
                <h6>Monday: 5 PM - 10 PM</h6>
              </li>
              <li className="nav-item mb-2">
                <h6>Tuesday: 5 PM - 10 PM</h6>
              </li>
              <li className="nav-item mb-2">
                <h6>Wednesday: 5 PM - 11 PM</h6>
              </li>
              <li className="nav-item mb-2">
                <h6>Thursday: 5 PM-11PM</h6>
              </li>
              <li className="nav-item mb-2">
                <h6>Friday: 5 PM - 12 PM</h6>
              </li>
              <li className="nav-item mb-2">
                <h6>Saturday: 5 PM - 12 PM</h6>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      ;
    </>
  );
}

export default Footer;
