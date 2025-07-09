"use server";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import { CabinProvider } from "./providers/CabinContext";
import Cabins from "./cabins/cabins";
import CustomLandingImage from "./components/CustomLandingImage";
import CustomResponsiveNavigations from "./components/CustomResponsiveNavigations";
function Page() {
  return (
    <main className="relative">
      <CustomResponsiveNavigations />

      <CustomLandingImage />
    </main>
  );
}

export default Page;
