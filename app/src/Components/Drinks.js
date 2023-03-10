import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import getData from "./Utilities/Data";

function Drinks() {
  const API = ` https://www.jsonkeeper.com/b/E76G`;
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    getData(API).then((data) => {
      console.log(data);
      setDrinks(
        data.filter(
          (item) =>
            item.cuisine_type === "Italian" ||
            item.cuisine_type === "French" ||
            item.cuisine_type === "Mediterranean"
        )
      );
    });
  }, []);


  return (
    <>
   <Navigation />

      <h1 className="header">C O C K T A I L S</h1>

      <div className="menu container p-3 justify-content-center ">
        <div className="d-flex row gy-5 justify-content-center ">
          {drinks.map((item) => (
            <div
              key={item.id}
              className="card col-md-3 justify-content-center intro ign-items-center py-5"
              style={{ width: "18rem" }}
            >
              <img
                src={item.image}
                // height="290"
                // width="auto"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-center align-items-center py-3 ">
                  {item.title}
                </h5>
                <p className="card-text d-flex justify-content-center align-items-center py-3">
                  {item.description}
                </p>
                <p className="card-text d-flex justify-content-center align-items-center py-3">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
  <Footer />
    </>
  );
}
export default Drinks;
