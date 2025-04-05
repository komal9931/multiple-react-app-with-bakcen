import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [data, setData] = useState([]);

  const apidata = async () => {
    const res = await fetch("/api/getdata");
    const data = await res.json();
    // console.log(data);
    setData(data);
  };
  const deleteitem = async (id) => {
    console.log(id);
    const res = await fetch(`/api/delete/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    console.log(data);
    // Remove the deleted item from the state without reloading the page
    // window.location.reload();
    setData((prevData) => prevData.filter((item) => item._id !== id));
  };

  const updatedata = (id) => {
    console.log(id);
  };

  useEffect(() => {
    apidata();
  }, []);
  return (
    <>
      <div className="parent">
        {data.map((ele) => {
          // console.log(ele);
          return (
            // <div key={ele._id} className="card">
            //   <img src={ele.image} alt="Comfortable Running Shoes" />
            //   <h3>{ele.title}</h3>
            //   <p>{ele.description}</p>
            //   <div className="price-container">
            //     <span className="price">₹ {ele.price}</span>
            //     <span className="offer-price">
            //       offerPrice: {ele.OfferPrice}
            //     </span>{" "}
            //     <div className="btns">
            //       <button>Update</button>
            //       <button
            //         onClick={() => {
            //           deleteitem(ele._id);
            //         }}
            //       >
            //         Delete
            //       </button>
            //     </div>
            //     {/* This can be replaced with an actual offer price if available */}
            //   </div>
            // </div>
            <div key={ele._id} className="card">
              <div className="image-container">
                <img src={ele.image} alt="Comfortable Running Shoes" />
                <div className="image-overlay"></div>{" "}
                {/* Overlay for gradient */}
                <span className="offer-price">
                  OfferPrice: ₹{ele.OfferPrice}
                </span>
              </div>
              <h3>{ele.title}</h3>
              <p>{ele.description}</p>
              <div className="price-container">
                <span className="price">₹{ele.price}</span>
                <div className="btns">
                  <button
                    onClick={() => {
                      updatedata(ele._id);
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      deleteitem(ele._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
