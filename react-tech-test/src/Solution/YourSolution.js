import "../AdditionalFiles/App.css";
import * as React from "react";
import { useState, useEffect } from "react";
import { mockFetch } from "../AdditionalFiles/mockFetch";
import { useParams } from "react-router-dom";

//This is the API url to fetch from
const API_URL = "https://matchesfashion.com/api/products";
const TAX_RATE = 0.08;

function YourSolution() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  // Fetch the product data
  useEffect(() => {
    mockFetch(`${API_URL}?page=${page}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result, "<<<result");
          setProducts(result.products);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [page]);

  console.log(products, "<<<<products");

  return (
    <div className="App">
      <table id="products">
        <thead>
          <tr>
            <th>Id</th>
            <th>Brand</th>
            <th>Name</th>
            <th>Quantity Sold</th>
            <th>Sold Price</th>
            <th>Cost To Business</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.brand}</td>
                <td>{product.name}</td>
                <td>{product.quantitySold}</td>
                <td>{product.soldPrice}</td>
                <td>{product.costToBusiness}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button>First Page</button>
      <button>Previous Page</button>
      <button>Next Page</button>
      <button>Last Page</button>
    </div>
  );
}

export default YourSolution;
