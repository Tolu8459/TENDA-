"use client"
import { supabase } from "@/lib/supabaseClient"
import Link from "next/link"
export default function Page(){
   
  

    return(
        <div className="flex flex-col px-4 py-4 items-center justify-center">
            <h1>Links to pages already being worked on</h1>
            
            
            <Link href="/sales">Sales</Link>
            <Link href="/customers">customers</Link>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
            <Link href="/dashboard"> dashboard</Link>
            <Link  href="/customers/addCustomers"> add customers</Link>

           
            

        </div>
    )
}