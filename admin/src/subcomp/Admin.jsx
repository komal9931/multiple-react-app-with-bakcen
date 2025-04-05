// // import React, { useState } from "react";

// // const Admin = () => {
// //   // State to hold form values
// //   const [productTitle, setProductTitle] = useState("");
// //   const [price, setPrice] = useState("");
// //   const [offerPrice, setOfferPrice] = useState("");
// //   const [productCategory, setProductCategory] = useState("");
// //   const [productImage, setProductImage] = useState(null);

// //   // Handle form submission
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Here you can handle the form submission, e.g., send data to an API
// //     console.log({
// //       productTitle,
// //       price,
// //       offerPrice,
// //       productCategory,
// //       productImage,
// //     });
// //   };

// //   // Handle file input change
// //   const handleFileChange = (e) => {
// //     setProductImage(e.target.files[0]);
// //   };

// //   return (
// //     <div>
// //       <h2>Product Admin Form</h2>
// //       <form onSubmit={handleSubmit}>
// //         {/* Product Title input */}
// //         <div>
// //           <label htmlFor="productTitle">Product Title</label>
// //           <input
// //             type="text"
// //             id="productTitle"
// //             value={productTitle}
// //             onChange={(e) => setProductTitle(e.target.value)}
// //             required
// //           />
// //         </div>

// //         {/* Price input */}
// //         <div>
// //           <label htmlFor="price">Price</label>
// //           <input
// //             type="number"
// //             id="price"
// //             value={price}
// //             onChange={(e) => setPrice(e.target.value)}
// //             required
// //           />
// //         </div>

// //         {/* Offer Price input */}
// //         <div>
// //           <label htmlFor="offerPrice">Offer Price</label>
// //           <input
// //             type="number"
// //             id="offerPrice"
// //             value={offerPrice}
// //             onChange={(e) => setOfferPrice(e.target.value)}
// //             required
// //           />
// //         </div>

// //         {/* Product Category dropdown */}
// //         <div>
// //           <label htmlFor="productCategory">Product Category</label>
// //           <select
// //             id="productCategory"
// //             value={productCategory}
// //             onChange={(e) => setProductCategory(e.target.value)}
// //             required
// //           >
// //             <option value="" style={{ visibility: "hidden" }}>
// //               Select Category
// //             </option>
// //             <option value="Electronics">Men</option>
// //             <option value="Clothing">Women</option>

// //             {/* Add more categories as needed */}
// //           </select>
// //         </div>

// //         {/* Product Image upload */}
// //         <div>
// //           <label htmlFor="productImage">Product Image</label>
// //           {/* <input
// //             type="file"
// //             id="productImage"
// //             onChange={handleFileChange}
// //             required
// //           /> */}
// // <img
// //   src="https://via.placeholder.com/300x200"
// //   alt="Dummy product"
// //   id="productImage"
// // />
// //           {/* <img
// //             src={image ? URL.createObjectURL(image) : upload_area}
// //             alt=""
// //             className="addproduct-thumnail-img"
// //           /> */}
// //         </div>

// //         {/* Submit button */}
// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Admin;

// // import React, { useRef, useState } from "react";

// // const Admin = () => {
// //   const [formData, setFormData] = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //     contact: "",
// //     city: "",
// //     gender: "",
// //     hobbies: [],
// //   });

// //   //   const [name, setName] = useState("");

// //   //   const name = useRef(null);
// //   //   const email = useRef(null);
// //   //   console.log(name);
// //   const handlechange = (e) => {
// //     // console.log(e.target.value);
// //     const { name, value, type, checked } = e.target;
// //     if (type === "checkbox") {
// //       setFormData((preData) => ({
// //         ...preData,
// //         hobbies: checked
// //           ? [...preData.hobbies, value]
// //           : preData.hobbies.filter((hobby) => hobby !== value),
// //       }));
// //     } else {
// //       setFormData({ ...formData, [name]: value });
// //     }
// //   };
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("jdjsdf", formData);
// //     // console.log(name, email);

// //     // console.log(name.current.value, email.current.value);
// //   };

// //   return (
// //     <>
// //       <div className="container border w-50">
// //         <div className="row">
// //           <div className="col">
// //             <form action="" onSubmit={handleSubmit}>
// //               <p>
// //                 <input
// //                   type="text"
// //                   name="username"
// //                   value={formData.username}
// //                   id=""
// //                   placeholder="Name..."
// //                   //   ref={name}
// //                   //   onChange={(e) => setName(e.target.value)}
// //                   onChange={handlechange}
// //                 />
// //               </p>
// //               <p>
// //                 <input
// //                   //   ref={email}
// //                   type="email"
// //                   name="email"
// //                   id=""
// //                   placeholder="email..."
// //                   onChange={handlechange}
// //                 />
// //               </p>
// //               <p>
// //                 <input
// //                   type="number"
// //                   name="contact"
// //                   id=""
// //                   placeholder="Contact..."
// //                   onChange={handlechange}
// //                 />
// //               </p>
// //               <p>
// //                 <input
// //                   type="password"
// //                   name="password"
// //                   id=""
// //                   placeholder="password..."
// //                   onChange={handlechange}
// //                 />
// //               </p>
// //               <p>
// //                 <input
// //                   type="text"
// //                   name="city"
// //                   id=""
// //                   list="demo"
// //                   placeholder="city..."
// //                   value={formData.city}
// //                   onChange={handlechange}
// //                   //   autoComplete="off"
// //                 />
// //                 <p>
// //                   <img
// //                     src="https://via.placeholder.com/300x200"
// //                     alt="Dummy product"
// //                     id="productImage"
// //                   />
// //                 </p>
// //                 <datalist id="demo">
// //                   <option value="Delhi" />
// //                   <option value="Mumbai" />
// //                   <option value="Kolkata" />
// //                   <option value="Chennai" />
// //                   <option value="Bangalore" />
// //                 </datalist>
// //               </p>
// //               <p>
// //                 <input
// //                   type="checkbox"
// //                   value="reading"
// //                   name="reading"
// //                   onChange={handlechange}
// //                   id=""
// //                 />{" "}
// //                 &nbsp;Reading&nbsp;
// //                 <input
// //                   type="checkbox"
// //                   value="travelling"
// //                   name="travelling"
// //                   onChange={handlechange}
// //                   id=""
// //                 />
// //                 &nbsp; Travelling&nbsp;
// //                 <input
// //                   type="checkbox"
// //                   value="painting"
// //                   onChange={handlechange}
// //                   name="painting"
// //                   id=""
// //                 />
// //                 &nbsp; Painting&nbsp;
// //                 <input
// //                   type="checkbox"
// //                   value="singing"
// //                   name="singing"
// //                   onChange={handlechange}
// //                   id=""
// //                 />
// //                 &nbsp; Singing&nbsp;
// //               </p>
// //               <p>
// //                 <input
// //                   type="radio"
// //                   value="male"
// //                   name="gender"
// //                   id=""
// //                   onChange={handlechange}
// //                 />
// //                 &nbsp; Male&nbsp;
// //                 <input
// //                   type="radio"
// //                   value="female"
// //                   name="gender"
// //                   id=""
// //                   onChange={handlechange}
// //                 />
// //                 &nbsp; Female&nbsp;
// //                 <input
// //                   type="radio"
// //                   value="others"
// //                   name="gender"
// //                   id=""
// //                   onChange={handlechange}
// //                 />
// //                 &nbsp; Others
// //               </p>
// //               <p>
// //                 <input type="submit" value="Submit" />
// //               </p>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Admin;

// import React, { useState } from "react";

// const Admin = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     contact: "",
//     city: "",
//     gender: "",
//     hobbies: [],
//     productTitle: "",
//     price: "",
//     offerPrice: "",
//     productCategory: "",
//     productImage: "",
//   });

//   const handlechange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox" && name === "hobbies") {
//       setFormData((preData) => ({
//         ...preData,
//         hobbies: checked
//           ? [...preData.hobbies, value]
//           : preData.hobbies.filter((hobby) => hobby !== value),
//       }));
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted data:", formData);
//   };

//   return (
//     <>
//       <div className="container border w-50">
//         <div className="row">
//           <div className="col">
//             <form onSubmit={handleSubmit}>
//               <p>
//                 <input
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   placeholder="Name..."
//                   onChange={handlechange}
//                 />
//               </p>
//               <p>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   placeholder="Email..."
//                   onChange={handlechange}
//                 />
//               </p>
//               <p>
//                 <input
//                   type="number"
//                   name="contact"
//                   value={formData.contact}
//                   placeholder="Contact..."
//                   onChange={handlechange}
//                 />
//               </p>
//               <p>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   placeholder="Password..."
//                   onChange={handlechange}
//                 />
//               </p>
//               <p>
//                 <input
//                   type="text"
//                   name="city"
//                   list="demo"
//                   placeholder="City..."
//                   value={formData.city}
//                   onChange={handlechange}
//                 />
//                 <datalist id="demo">
//                   <option value="Delhi" />
//                   <option value="Mumbai" />
//                   <option value="Kolkata" />
//                   <option value="Chennai" />
//                   <option value="Bangalore" />
//                 </datalist>
//               </p>
//               {/* <h5>Product Details</h5> */}
//               <p>
//                 <input
//                   type="text"
//                   name="productTitle"
//                   value={formData.productTitle}
//                   placeholder="Product Title..."
//                   onChange={handlechange}
//                 />
//               </p>
//               <p>
//                 <input
//                   type="number"
//                   name="price"
//                   value={formData.price}
//                   placeholder="Price..."
//                   onChange={handlechange}
//                 />
//               </p>
//               <p>
//                 <input
//                   type="number"
//                   name="offerPrice"
//                   value={formData.offerPrice}
//                   placeholder="Offer Price..."
//                   onChange={handlechange}
//                 />
//               </p>
//               <p>
//                 <input
//                   type="text"
//                   name="productCategory"
//                   value={formData.productCategory}
//                   placeholder="Product Category..."
//                   onChange={handlechange}
//                 />
//               </p>
//               <p>
//                 <input
//                   type="text"
//                   name="productImage"
//                   value={formData.productImage}
//                   placeholder="Product Image URL..."
//                   onChange={handlechange}
//                 />
//               </p>
//               <p>
//                 {formData.productImage && (
//                   // <img
//                   //   src={formData.productImage}
//                   //   alt="Product Preview"
//                   //   style={{ width: "300px", height: "200px" }}

//                   // />
//                   <img
//                     src="https://via.placeholder.com/300x200"
//                     alt="Dummy product"
//                     id="productImage"
//                     style={{ width: "300px", height: "200px" }}
//                   />
//                 )}
//               </p>

//               <p>
//                 <label>Hobbies:</label>
//                 <br />
//                 <input
//                   type="checkbox"
//                   value="reading"
//                   name="hobbies"
//                   onChange={handlechange}
//                 />{" "}
//                 Reading
//                 <input
//                   type="checkbox"
//                   value="travelling"
//                   name="hobbies"
//                   onChange={handlechange}
//                 />{" "}
//                 Travelling
//                 <input
//                   type="checkbox"
//                   value="painting"
//                   name="hobbies"
//                   onChange={handlechange}
//                 />{" "}
//                 Painting
//                 <input
//                   type="checkbox"
//                   value="singing"
//                   name="hobbies"
//                   onChange={handlechange}
//                 />{" "}
//                 Singing
//               </p>
//               <p>
//                 <label>Gender:</label>
//                 <br />
//                 <input
//                   type="radio"
//                   value="male"
//                   name="gender"
//                   onChange={handlechange}
//                 />{" "}
//                 Male
//                 <input
//                   type="radio"
//                   value="female"
//                   name="gender"
//                   onChange={handlechange}
//                 />{" "}
//                 Female
//                 <input
//                   type="radio"
//                   value="others"
//                   name="gender"
//                   onChange={handlechange}
//                 />{" "}
//                 Others
//               </p>

//               <p>
//                 <input type="submit" value="Submit" />
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Admin;

import React, { useState } from "react";

const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    offerPrice: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newprice = Number(formData.price);
  //   const newofferprice = Number(formData.offerPrice);
  //   let calculateofferce = 0;
  //   if (newofferprice > 0) {
  //     calculateofferce = newprice - (newprice * newofferprice) / 100;
  //   } else {
  //     calculateofferce = newprice;
  //   }
  //   const updateformat = {
  //     ...formData,
  //     OfferPrice: calculateofferce,
  //   };
  //   console.log(updateformat);
  //   try {
  //     const res = await fetch("/api/product", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(updateformat),
  //     });

  //     if (!res.ok) {
  //       const errorData = await res.json();
  //       alert(errorData.message);
  //       return;
  //     }
  //     const data = await res.json();
  //     console.log(data);
  //     alert("product added successfully");
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   // console.log(formData);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const originalPrice = Number(formData.price);
  //   const discountPercentage = Number(formData.offerPrice);

  //   let finalPrice = originalPrice;
  //   if (discountPercentage > 0) {
  //     finalPrice = originalPrice - (originalPrice * discountPercentage) / 100;
  //   }

  //   const updateformat = {
  //     ...formData,
  //     OfferPrice: finalPrice.toFixed(2), // rounding to 2 decimals
  //     DiscountPercentage: discountPercentage, // optional if you want to store original discount too
  //   };

  //   console.log(updateformat);

  //   try {
  //     const res = await fetch("/api/product", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(updateformat),
  //     });

  //     if (!res.ok) {
  //       const errorData = await res.json();
  //       alert(errorData.message);
  //       return;
  //     }

  //     const data = await res.json();
  //     // console.log(data);
  //     alert("Product added successfully");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newprice = Number(formData.price);
  //   const newofferprice = Number(formData.offerPrice);
  //   let calculateofferce = 0;

  //   if (newofferprice > 0) {
  //     calculateofferce = newprice - (newofferprice * newprice) / 100;
  //   } else {
  //     calculateofferce = newprice;
  //   }

  //   const updateformat = {
  //     ...formData,
  //     OfferPrice: calculateofferce.toFixed(2), // optional: keep 2 decimal places
  //   };

  //   console.log(updateformat);

  //   try {
  //     const res = await fetch("/api/product", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(updateformat),
  //     });

  //     if (!res.ok) {
  //       const errorData = await res.json();
  //       alert(errorData.message);
  //       return;
  //     }

  //     const data = await res.json();
  //     console.log(data);
  //     alert("product added successfully");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateformat = {
      title: formData.title,
      price: Number(formData.price),
      image: formData.image,
      description: formData.description,
      OfferPrice: Number(formData.offerPrice), // this is discount percentage
    };

    console.log(updateformat);

    try {
      const res = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateformat),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message);
        return;
      }

      const data = await res.json();
      console.log(data);
      alert("Product added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container border w-50 mt-4 p-4">
      <h3 className="mb-3">Add Product</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="Product Title"
            onChange={handleChange}
            required
            className="form-control"
          />
        </p>
        <p>
          <input
            type="number"
            name="price"
            value={formData.price}
            placeholder="Price"
            onChange={handleChange}
            required
            className="form-control"
          />
        </p>
        <p>
          <input
            type="number"
            name="offerPrice"
            value={formData.offerPrice}
            placeholder="Offer Price"
            onChange={handleChange}
            className="form-control"
          />
        </p>
        <p>
          <input
            type="text"
            name="image"
            value={formData.image}
            placeholder="Image URL"
            onChange={handleChange}
            className="form-control"
          />
        </p>
        {formData.image && (
          <p>
            <img
              src={formData.image}
              alt="Product Preview"
              style={{ width: "300px", height: "200px", objectFit: "cover" }}
            />
          </p>
        )}
        Description :
        <p>
          <textarea
            name="description"
            value={formData.description}
            placeholder="Product Description"
            onChange={handleChange}
            rows={4}
            className="form-control"
          />
        </p>
        <p className="btns">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </p>
      </form>
    </div>
  );
};

export default Admin;
