import React, { useEffect } from "react";
import axios from "axios";

function getProducts() {
  axios.get(`/api/products`);
}
export default function HomeScreen() {
  useEffect(() => {
    getProducts();
  }, []);
  return <div>Home screen</div>;
}
