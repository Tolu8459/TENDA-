
"use client"
import Link from "next/link";
type Customer ={
    id: string;
    name:string;
    email:string;
    phone_number:string;
}

export default function CustomersClient({customers,}:{customers:Customer[];}){


    return(
        <div className="w-full ">
            <div className="flex flex-col mt-4 items-center justify-center w-full">
                <input className=" h-10 bg-slate-200 w-full ml-4 rounded-xl flex  items-center text-black mb-4 px-4" placeholder="search customer"></input>
                 <button className=" h-16 bg-blue-800 w-full ml-4 rounded-xl flex font-semibold text-xl text-white items-center justify-center  text-black">Add new customer</button>
               
            </div>

           

           
           {
           customers.map((c)=>(

            <div key={c.id} className=" h-18 mr-8 ml-4 flex flex-1 items-center  text-black border-b-1 border-b-gray-400 flex flex-row justify-between mt-4">
                <div className="flex flex-row items-center justify-center">
                    <div className="rounded-[50%] w-14 h-14 bg-slate-400 mr-4 flex items-center justify-center text-slate-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <span>
                    <p>{c.name}</p>
                    <p>{c.phone_number}</p>
                    </span>
                    
                </div>

                <div className="flex flex-row items-center justify-center">
                   <p> Profile</p>
                    <Link href={`/customers/${c.id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                         <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>

            </div>
           
           
           )
            )}
             
            
           
        </div>
    )
}