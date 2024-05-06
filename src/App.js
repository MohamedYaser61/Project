// import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";
import About from "./components/About";
import ProductDetals from "./components/ProductDetals";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar />
            
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Slider />
                            <ProductList />
                        </>
                    }
                ></Route>
                <Route
                    path="about"
                    element={
                        <>
                            <About />
                        </>
                    }
                ></Route>
                <Route
                    path="Product/:ProductId"
                    element={
                        <>
                            <ProductDetals />
                        </>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
