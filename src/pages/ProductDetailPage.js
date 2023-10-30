import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductDetalis from "../features/product-list/components/ProductDetails";
// import Footer from "../features/common/Footer";

function ProductDetailPage() {
    return ( 
        <div>
            <NavBar>
                <ProductDetalis/>
            </NavBar>
            {/* <Footer></Footer> */}
        </div>
     );
}

export default ProductDetailPage;