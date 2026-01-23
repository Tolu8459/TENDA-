"use client"
import React, { useState } from "react"
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

import { useAuth } from "@/app/context/AuthContext"

export default function signupPage(){

    const router = useRouter();
    const {signup} = useAuth();
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");

    const handleSubmit = async(e:React.FormEvent) =>{
        e.preventDefault();
       const {data,error} = await supabase.auth.signUp({email,password,});

        if(error){
            console.error("signup error:", error);

            console.error("Message:",error.message);

            alert(error.message);
            return;
        }
       
        if (data.session){
             console.log("Signup successful",data);
        alert("signup succesful");

        router.push("/dashboard")
        } else {
            alert("you havent been signed up")
        }
       
        setPassword("");
        setEmail("");
    };

 



   return(
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950 to-black h-screen w-full">

            <form onSubmit={handleSubmit} className="flex flex-col items-center  
            bg-white/1 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-[20%] md:w-[600px]
             text-white h-[80%] rounded-4xl border border-white/30 bg-gradient-to=b from-white/15 to-white/5">

                <h1 className="text-3xl font-semibold text-white self-start mt-[20%] ml-16 ">Sign up</h1>
                <p className=" text-white/80 self-start ml-16 "></p>
                <p className=" text-white/60 self-start ml-16 text-sm">Manage you customers easily</p>

                <input type="email" 
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-[80%] px-16 bg-white/25 text-black mt-[8%] h-12 px-4
                 border border-white/30 rounded-2xl text-white placeholder:text-white/60 backdrop-blur-md 
                 focus:outline-none focus:ring-2 focus:ring-blue-500/40"/>

                <input type="password" 
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-[80%] px-16 bg-white/25 text-black mt-[8%] h-12 px-4
                 border border-white/30 rounded-2xl  text-white placeholder:text-white/60 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500/40"/>
                
                <button type="submit"
                    className="w-[80%] px-16 bg-gradient-to-r from-blue-700 to-indigo-600 text-black mt-[5%] h-12 px-4 rounded-2xl text-white font-medium shadow-lg shadow-emerald-400/30 from-cyan-400 to-blue-600"> Login
                </button>
                <p className="text-white/60 self-start ml-120 mt-4 ">Forgot Password?</p>
            </form>
        </div>
    )
}