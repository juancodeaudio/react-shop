import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const response = await axios.get(API);
    setProducts(response.data);
  };
  useEffect(async () => {
    getData();
  }, []);

  return products;
};

export { useGetProducts };
