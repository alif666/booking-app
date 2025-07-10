import Link from "next/link";
import UsernameInputField from "./UsernameInputFIeld";
export default function CustomLandingImage(){
    return(
        <div className="flex flex-col items-center text-center bg-blue font-weight-medium text-xl border-4 bg-[url('https://iiimywcrhwybichlzcyh.supabase.co/storage/v1/object/public/cabin-images//cabin_background.jpg')] bg-origin-content bg-center bg-no-repeat px-6 py-12 md:py-64">
           <UsernameInputField/>
            <Link href="#" className= "bg-blue">
                Book Now
            </Link>

        </div>
    );
}