import Header from "./components/header";
import Footer from "./components/footer";
import Productlist from "./components/product";
import "./components/app.css";

function App() {
  const products = [
    {
      id: 101,
      name: "Wireless Mouse",
      category: "Electronics",
      price: "$25.99"
    },
    {
      id: 102,
      name: "Bluetooth Headphones",
      category: "Electronics",
      price: "$49.99"
    },
    {
      id: 103,
      name: "Desk Chair",
      category: "Furniture",
      price: "$89.99"
    },
    {
      id: 104,
      name: "Water Bottle",
      category: "Accessories",
      price: "$12.50"
    },
  ];
  return (
    <>
      <div>
        <Header />
        <main className="container">
          <h1 className="mainheading">Product List</h1>
          <Productlist products={products} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
