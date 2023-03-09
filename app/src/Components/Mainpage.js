import "./css/style.css";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Mainpage() {
  return (
    <>
      <Navigation />
      <div className="frame">
        <div className="container">
          <div className="first row">
            
            <div className=" headerimage col d-flex justify-content-center">
              <img src="./IMAGE/patio.jpg" height="500" width="900" alt="Mona Lisa" />
            </div>
            
          </div>

          <div className="second row">
            <div className="col-2"></div>

            <div className="quote col-10 justify-content-right">
              {" "}
              <h2 className="mainQuote">STRAIGHT FROM NONNA'S KITCHEN </h2>{" "}
            </div>
          </div>

          <div className="third row">
            <div className="col-8 ">
              <h3>ABOUT US</h3>
              <p>
                Mona Lisa Bistro is a family owned and operated traditional
                Italian Restaurant since 1930. It has been our dream and passion
                since day one to prepare the best homemade traditional Italian
                cuisine.
              </p>
            </div>

            <div className="col-4">
              {" "}
              <img
                src="./IMAGE/Mona Lisa.jpeg"
                className="monaLisa"
                alt="Mona Lisa"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Mainpage;
