import { type NextRequest } from "next/server";
import { updateSession } from "./lib/middleware";
import { supabase } from "./lib/supabaseClient";

export async function middleware(request: NextRequest){

    console.log("cookies present in a request:", request.cookies.getAll().length> 0)


   

    return await updateSession(request);
    

    

}

export const config = {
    matcher : [
        
     '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
 
    ],
}