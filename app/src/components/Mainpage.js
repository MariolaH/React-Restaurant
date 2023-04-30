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
            <div className="headerimage col d-flex justify-content-center">
              <img src="./IMAGE/restaurant1.jpeg" alt="Mona Lisa" />
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
            <div className="col-md-2"></div>
            <div className="col-md-6 ">
              <h3>ABOUT US</h3>
              <p className="bio">
                The roots of our Italian restaurant date back to 1930, when it
                was first established as a family-owned and operated business.
                Since then, our passion for preparing the best homemade,
                traditional Italian cuisine has never wavered. Over the years,
                we have honed our craft and welcomed countless guests through
                our doors, all seeking a taste of the authentic Italian
                experience. From generation to generation, our commitment to
                quality, family values, and culinary excellence remains
                unwavering, as we continue to celebrate the rich history and
                heritage of Italian cuisine.
              </p>
            </div>
            {/* d-md-block d-none hides it on mobile devices */}
            <div className="col-md-4 d-md-block d-none">
              {" "}
              <img
                src="./IMAGE/Mona Lisa.jpeg"
                className="monaLisa"
                alt="Mona Lisa"
              />
            </div>
          </div>

          <div className="row d-md-none">
            <div className="col-12">
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
