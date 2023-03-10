import Footer from "./Footer";
import Navigation from "./Navigation";
import React, { useEffect, useState } from "react";
import getData from "./Utilities/Data";

function Menupage() {
  const API = ` https://www.jsonkeeper.com/b/D0UI`;
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData(API).then((data) => {
      console.log(data);
      setItems(
        data.filter(
          (item) =>
            item.cuisine_type === "Italian" ||
            item.cuisine_type === "French" ||
            item.cuisine_type === "Mediterranean"
        )
      );
    });
  }, [API]);
  console.log(items);

  return (
    <>
      <Navigation />
      <h1 className="header">D I N N E R &nbsp; & &nbsp; D E S S E R T S</h1>
      <div className="menu container p-3 justify-content-center ">
        <div className="d-flex row gy-5 justify-content-center ">
          {items.map((item) => (
            <div
              key={item.id}
              className="card col-md-3 justify-content-center intro py-5"
              style={{ width: "18rem" }}
            >
              <img
                src={item.image}
                className="card-img-top"
                alt="food"
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
export default Menupage;
