"use client"
import { useState } from "react";
import { addCustomer } from "../addCustomers";

export default function AddCustomers(){

    const [number,setNumber] = useState("");
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");

    function clearFields(){
        setEmail("");
        setName("");
        setNumber("");
    }



    return(
        <div className=" flex flex-col items-center justify-center w-full h-full">
            <p className="text-3xl font-bold w-full flex items-center justify-center mt-16" >Add Customer</p>

                {/*add customer form */}
           <form action={addCustomer} className="flex flex-col w-full mt-12">

                <div className="flex flex-col w-full px-4 mt-4">
                    <label htmlFor=""> Customer name</label>
                    <input type="text"placeholder="Enter customer name"  name="name"  className="w-full border-1 border-slate rounded-xl h-14 px-4"/>
                </div>


                <div className="flex flex-col w-full px-4 mt-4">
                    <label htmlFor=""> Customer Email</label>
                    <input type="text"placeholder="Enter customer email" name="email"  className="w-full border-1 border-slate rounded-xl h-14 px-4"/>
                </div>

                <div className="flex flex-col w-full px-4 mt-4">
                    <label htmlFor=""> Customer Number</label>
                    <input type="number"placeholder="Enter customer phone number" name="number"   className="w-full border-1 border-slate rounded-xl h-14 px-4"/>
                </div> 

                <div className="flex flex-col w-full px-4 mt-4">
                   
                    <button type="submit"  className="w-full bg-blue-900 rounded-xl h-14 px-4 text-white font-bold text-xl" >Add customer</button>
                </div>

                

            </form>
            
            

        </div>
    )
}