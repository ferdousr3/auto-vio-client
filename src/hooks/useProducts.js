const { useState, useEffect } = require("react");

const useProducts=()=>{
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // const url = "http://localhost:5000/product";
    const url = `https://auto-vio.onrender.com/product`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return [products, setProducts];


}

export default useProducts;
