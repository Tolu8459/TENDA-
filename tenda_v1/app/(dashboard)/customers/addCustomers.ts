"use server"
import { cookies } from "next/headers";
import { createSupabaseServerClient } from "@/lib/supabaseServer";

export async function addCustomer(formData:FormData){
    const name = formData.get("name") as string;
    const number = formData.get("number");
    const email = formData.get('email') as string;

    const supabase = await createSupabaseServerClient();

    const {
        data:{user},
    error:authError
    } = await supabase.auth.getUser();

    if(!user||!user.id ){
        console.log("no user at time", user)
        throw new Error("user not authenticated")
    }

  

 

    if(authError){
        console.log("DEBUG AUTH ERROR:", authError.message)
         console.log("DEBUG AUTH STATUS:", authError.status)
    }

    console.log("USER ID", user.id,typeof user.id)
   


    const {data,error} = await supabase
    .from("Customers")
    .insert([{user_id:user.id,name,phone_number:number,email }])
    .select()
    .single();

    console.log("INSERT DATA",data);



    if (error){
     throw error
    }else {
        console.log("customer added")
    }


   
    return data;
    
    
}