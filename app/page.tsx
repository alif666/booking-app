import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import { CabinProvider } from "./providers/CabinContext";
import Cabins from "./cabins";
function Page() {
  return (
    <main>

    <Cabins/>

    </main>
  );
}

export default Page;
