"use server";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import { CabinProvider } from "../providers/CabinContext";




function CabinPage() {
    return (
        <CabinProvider>
        <div>
            <ProductForm />
            <ProductList />
        </div>
        </CabinProvider>
    );
}

export default CabinPage;