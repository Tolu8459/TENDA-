import { createSupabaseServerClient } from "@/lib/supabaseServer";
import CustomersClient from "./CustomerClient";

export default async function CustomersPage(){

    const supabase = await createSupabaseServerClient();
    /*
    const {data: customers,error} = await supabase
    .from("Customers")
    .select("id,name,phone_number,email");

    if(error){
        throw error;
    };
    */

    return( 
        <div>
    <CustomersClient />
    </div>
)

}