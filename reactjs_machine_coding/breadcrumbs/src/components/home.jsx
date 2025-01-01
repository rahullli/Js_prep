import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setTrendingProducts(data.products.slice(0, 6));
  };
  useEffect(() => {
    fetchProducts();
  });
  return (
    <div>
      <h2>Home Page</h2>
      <span>Trending Products</span>
      <div className="product-grid">
        {trendingProducts?.map((item) => {
          return (
            <div className="product-card" key={item.id}>
              <Link to={`/products/${item.id}`}>
                <img src={item.thumbnail} alt={item.title} />
                <h3>{item.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
