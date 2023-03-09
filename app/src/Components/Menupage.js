import Footer from "./Footer";
import Navigation from "./Navigation";
import React, { useEffect, useState } from "react";
import getData from "./Utilities/Data";

function Menupage() {
  const API = `https://www.jsonkeeper.com/b/MDXW`;
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
  return (
    <>
      <Navigation />
      <div className="frame">


        
      </div>
      <Footer />
    </>
  );
}
export default Menupage;
