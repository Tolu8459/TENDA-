"use client"
import CustomerSnapshot from "../components/customerSnapshot";
import RevenueChart from "../components/RevenueChart";
import CustomerTopProducts from "../components/CustomerTopProducts";
import RecentActivity from "../components/recentActivityFeed";
import QuickActions from "../components/QuickActions";
import { useParams } from "next/navigation"

export default function IndividualCustomer(){
    const params = useParams();
    return(
        <div className="flex flex-col w-full bg-violet- min-h-screen px-4 text-white">

            <h1 className="text-white font-bold mt-2 ">Customer snapshot </h1>
          
          {/*name and id*/}
            <CustomerSnapshot/>

            {/*Revenue over time and top products purchased*/}
            <div className="w-full flex flex-row mt-4 font-semibold">
                <RevenueChart/>
                <CustomerTopProducts/>
            </div>

           {/*Recent activity feed and quick actions*/}
            <div className="w-full flex flex-row mt-4 ">
                <RecentActivity/>
                <QuickActions/>
                
 
            </div>


    
    
        </div>
    )
}

