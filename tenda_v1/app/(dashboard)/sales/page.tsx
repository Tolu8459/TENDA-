"use client"; // <--- THIS LINE FIXES THE ERROR
import { supabase } from '@/lib/supabaseClient';

import React, { useEffect, useState } from 'react';

// Types for your data (Good practice for robustness)
interface Sale {
  id: string;
  customerName: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending';
}

export default function SalesPage() {
  // Placeholder Data
  const [sales] = useState<Sale[]>([
    { id: '1', customerName: 'Amina Styles', amount: 15000, date: '2023-10-24', status: 'completed' },
    { id: '2', customerName: 'John Doe', amount: 5500, date: '2023-10-23', status: 'completed' },
    { id: '3', customerName: 'Mama Nkechi', amount: 25000, date: '2023-10-22', status: 'pending' },
  ]);

  useEffect(()=>{
    const test = async ()=>{
      const {data,error} = await supabase.auth.getUser()
      console.log(data,error)
    }
    test()
  },[]) 

  // Calculate totals dynamically
  const totalRevenue = sales.reduce((acc, sale) => acc + sale.amount, 0);
  const count = sales.length;

  return (
    <div className="space-y-6 animate-in fade-in duration-500  h-full">
      
      {/* 1. Page Title & Action */}
      <div className="flex flex-col space-y-4 ">
        <h2 className="text-2xl font-bold text-slate-900">Sales Dashboard</h2>
        
        {/* Mobile-First "Log Sale" Button */}
        <button 
          onClick={() => alert("Open Log Sale Modal")} // Added simple interaction
          className="w-full bg-slate-900 text-white font-semibold py-4 rounded-xl shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
        >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Log New Sale
        </button>
      </div>

      {/* 2. Financial Overview Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-28">
           <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">This Month</span>
           <div>
             <span className="text-2xl font-mono font-bold text-slate-900">₦{totalRevenue.toLocaleString()}</span>
             <div className="text-[10px] text-green-600 flex items-center mt-1">
                <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                +12% vs last wk
             </div>
           </div>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-28">
           <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Total Sales</span>
           <div>
             <span className="text-2xl font-mono font-bold text-slate-900">{count}</span>
             <div className="text-[10px] text-slate-400 mt-1">
                Transactions logged
             </div>
           </div>
        </div>
      </div>

      {/* 3. Recent Transactions List */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-slate-800">Recent Transactions</h3>
          <button className="text-sm text-slate-500 hover:text-slate-900">View All</button>
        </div>

        {sales.length > 0 ? (
          <div className="space-y-3">
            {sales.map((sale) => (
              <div key={sale.id} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex justify-between items-center active:bg-slate-50 transition-colors cursor-pointer">
                {/* Left: Info */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${sale.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {sale.customerName.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900 text-sm">{sale.customerName}</span>
                    <span className="text-xs text-slate-400">{sale.date}</span>
                  </div>
                </div>

                {/* Right: Amount */}
                <div className="text-right">
                  <span className="block font-mono font-bold text-slate-800">
                    ₦{sale.amount.toLocaleString()}
                  </span>
                  <span className={`text-[10px] uppercase font-bold ${sale.status === 'completed' ? 'text-green-600' : 'text-orange-500'}`}>
                    {sale.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-10 opacity-60">
            <div className="w-16 h-16 bg-slate-200 rounded-full mb-4"></div>
            <p className="text-slate-500">No sales recorded yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}