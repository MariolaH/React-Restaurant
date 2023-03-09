import React from "react";

function Footer() {
  return (
    <>
      <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div class="col mb-3">
            <a
              href="/"
              class="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <svg class="bi me-2" width="40" height="32"></svg>
            </a>
            <p class="text-muted">© 2022</p>
          </div>

          <div class="col mb-3"></div>

          <div class="col mb-3">
            <h3>
              <b>A D D R E S S </b>
            </h3>{" "}
            <br />
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <h6>348 E Main Street</h6>
              </li>
              <li class="nav-item mb-2">
                <h6>Lexington, Kentucky</h6>
              </li>
              <li class="nav-item mb-2">
                <h6>40507</h6>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h3>
              <b>H O U R S </b>
            </h3>{" "}
            <br />
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <h6>Sunday: 5:00 PM - 10:10 PM</h6>
              </li>
              <li class="nav-item mb-2">
                <h6>Monday: 5:00 PM - 10:10 PM</h6>
              </li>
              <li class="nav-item mb-2">
                <h6>Tuesday: 5:00 PM - 10:10 PM</h6>
              </li>
              <li class="nav-item mb-2">
                <h6>Wednesday: 5:00 PM - 11:10 PM</h6>
              </li>
              <li class="nav-item mb-2">
                <h6>Thursday: 5:00 PM - 11:10 PM</h6>
              </li>
              <li class="nav-item mb-2">
                <h6>Friday: 5:00 PM - 12:10 PM</h6>
              </li>
              <li class="nav-item mb-2">
                <h6>Saturday: 5:00 PM - 12:10 PM</h6>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About
                </a>
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
