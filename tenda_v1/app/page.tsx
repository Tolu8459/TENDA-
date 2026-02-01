"use client"
import { supabase } from "@/lib/supabaseClient"
import Link from "next/link"
import Image from "next/image"
export default function Page(){
   
  

    return(
        <div className="w-full flex flex-col items-center min-h-screen">

            {/*Hero section*/}

            <div className="w-full bg-blue-500 h-100 flex flex-col items-center h-screen">

                <div className="w-[70%] h-10 mt-4 rounded-2xl flex flex-row items-center justify-between bg-white px-2 backdrop-blur-md bg-white/10 border border-white/10 shadow-lg">
                    <h1>TENDA</h1>

                    <span className=" flex flex-row space-x-4">
                        <p>products</p>
                        <p>features</p>
                        <p>pricing</p>
                        <p>Testimonial</p>
                    </span>

                    <p>Sign up</p>

                </div>

                <div className="flex flex-row w-full h-full mt-20">
                    <div className="w-160 flex flex-col w-[50%]  ml-18 h-screen">
                        <h1 className="text-5xl font-semibold text-slate-100 mt-18">Customer Inteligence At a Glance</h1>
                        <p className="text-slate-100 font-bold text-3xl">Sell smarter. </p>
                        <p className="text-slate-100 font-bold text-3xl"> Monitor your bussiness.</p>
                        <p className="text-slate-100 font-bold text-3xl">Grow without stress.</p>

                        <p className="inline-flex flex-col w-fit text-slate-100">
                            <span className="w-130"> Tenda heps bussinesses manage and get customers,track returns and see what actualy makes them money. </span>
                            <span className="">in one simple dashboard built accesible from any device</span>
                        </p>

                        <div className="w-70 h-12 mt-8 ml-10 shadow-xl flex flex-row rounded-3xl bg-blue-600">
                            <div className=" relative bg-slate-300 w-35 h-12 rounded-l-3xl text-blue-600 flex items-center justify-center font-semibold">watch the demo</div>
                            <div className="bg-blue-600 flex w-35 rounded-r-3xl text-white flex items-center justify-center font-semibold">Get started</div>
                        </div>
                    </div>

                   <div className="relative flex items-center 
                   justify-center w-100 h-100 mt-26 ml-8 drop-shadow-[0_0_120px_rgba(255,255,255,0.35)]
                   drop-shadow-[0_0_260px_rgba(99,102,241,0.45)]
                   drop-shadow-[0_0_420px_rgba(139,92,246,0.35)]
                   ">
                        {/* Base plane */}
                       
                        {/* Shadow */}
                        <div className="absolute bottom-8 w-[70%] h-10
                                        bg-black/40 blur-2xl rounded-full ">
                        </div>
                        {/* Mockup */}
                        <img
                            width={400}
                            height={400}
                            src="images/hero.jpeg"
                            alt="Dashboard preview"
                            className="relative z-10 w-[80%]
                                    rounded-2xl
                                    shadow-2xl
                                    -rotate-8
                                    translate-y-[-1rem]"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-full flex-1 bg-slate-200 h-screen">

                <h1 className="text-3xl w-full flex items-center justify-center mt-14">With Tenda you can...</h1>


                <div className="flex items-center justify-center self-center mt-12 gap-8 w-full">

                    <div className="w-74 bg-[#f1f5ff] h-68 rounded-xl shadow-xl border-2 border-blue-200 flex flex-col px-4 ">
                        <p className="font-bold mt-26">Turn past customers into repeat buyers</p>
                        <p className="">By spotting repeat-purchase patterns, TENDA helps you sell more to people who already trust you.</p>

                    </div>

                    <div className="w-74 bg-[#f1f5ff] h-68 rounded-xl shadow-lg border-2 border-blue-200 px-4 px-2">
                    <p className="font-bold mt-28 mb-4">Get Ready-to-Send Follow-Ups That Don’t Feel Salesy</p>
                    <p className="">TENDA prepares short, natural messages based on customer status, so following up feels like service, not pressure.</p>

                    </div>

                    <div className="w-74 bg-[#f1f5ff] h-68  rounded-xl shadow-lg ">
                    <p className="font-bold mt-28 mb-4">Shows You Which Products Really Make You Money</p>
                    <p className="">Track what actually sells(and what leads to repeat purchases)so you know which products to push and which to stop wasting effort on.</p>

                    </div>

                   
                </div>

                <span  className="flex items-center justify-center self-center mt-12 gap-8 w-full">
                    <div className="w-74 bg-[#f1f5ff] h-68  rounded-xl shadow-lg px-4">
                    <p className="font-bold mt-28">Monitor your bussiness from anywhere</p>
                    <p className="">Built for owners to use on-the-go,from any device. </p>
                    </div>
                    <div className="w-74 bg-[#f1f5ff] h-68  rounded-xl shadow-lg px-4"></div>
                </span>


            <span>
                <Link href="/sales">Sales</Link>
                <Link href="/customers">customers</Link>
                <Link href="/login">Login</Link>
                <Link href="/signup">Signup</Link>
                <Link href="/dashboard"> dashboard</Link>
                <Link  href="/customers/addCustomers"> add customers</Link>
            </span>

            </div>
            
            
            

           
            

        </div>
    )
}