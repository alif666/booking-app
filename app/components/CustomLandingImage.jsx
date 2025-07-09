import Link from "next/link";
export default function CustomLandingImage(){
    return(
        <div className="text-center bg-blue font-weight-medium text-xl border-4 bg-[url('https://iiimywcrhwybichlzcyh.supabase.co/storage/v1/object/public/cabin-images//cabin_background.jpg')] bg-origin-content bg-center bg-no-repeat px-6 py-12 md:py-64">
            <Link href="#" className= "bg-blue">
                Book Now
            </Link>

        </div>
    );
}