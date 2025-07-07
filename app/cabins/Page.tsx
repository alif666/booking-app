import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import { CabinProvider } from "../providers/CabinContext";


function Page(){
    return (
        <CabinProvider>
        <div>
            <ProductForm />
            <ProductList />
        </div>
        </CabinProvider>
    );
}


export default Page;
