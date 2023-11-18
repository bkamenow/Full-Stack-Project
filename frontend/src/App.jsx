import { Routes, Route } from "react-router-dom";
import "./App.css";
import CarouselCards from "./components/Carousel/CarouselCards";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import ShopsList from "./components/Shops/ShopsList";
import ShopItemsList from "./components/Shops/ShopItemsList";
import Home from "./components/Home";

function App() {
    return (
        <div className='back'>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shops-list' element={<ShopsList />} />
                <Route path='/items/:shopId' element={<ShopItemsList />} />
            </Routes>
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
