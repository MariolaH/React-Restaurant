import Footer from "./Footer";
import Navigation from "./Navigation";
import React, { useEffect, useState } from "react";
import getData from "./Utilities/Data";

function Menupage() {
  const API = `https://www.jsonkeeper.com/b/HEP6`;
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
  }, []);
  console.log(items);

  //   create statement filer through item and pull title
  //    create statement filer through item and pull description
  //  create statement filer through item and pull price

  return (
    <>
      <Navigation />
      <div className="container">
        <div className="d-flex row">
          {items.map((item) => (
            <div
              key={item.id}
              className="card col-4 justify-content-center intro ign-items-center py-5"
              style={{ width: "18rem" }}
            >
              <img src={item.image} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.price}</p>
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
