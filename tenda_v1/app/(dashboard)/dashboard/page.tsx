import Link from "next/link";
// import { createSupabaseServerClient } from "@/lib/supabaseServer"; 
import { 
  Wallet, 
  Users, 
  Bell, 
  TrendingUp, 
  Plus, 
  ChevronRight
} from "lucide-react";

export default async function Dashboard() {
    // --- BYPASS MODE (Mock User) ---
    const user = {
        user_metadata: { full_name: "Toluwani Arogundade" },
        email: "tolu@tenda.africa"
    };
    // -------------------------------

    const stats = {
        salesMonth: 450000,
        salesWeek: 85000,
        totalCustomers: 142,
        followUpsToday: 5,
    };

    const userName = user.user_metadata?.full_name || "Hustler";
    const today = new Date().toLocaleDateString('en-NG', { weekday: 'short', day: 'numeric', month: 'short' });

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-6 pb-24">
            
            {/* 1. SIMPLE HEADER */}
            <header className="flex justify-between items-center mb-6">
                <div>
                    <p className="text-slate-500 text-xs font-medium uppercase mb-1">{today}</p>
                    <h1 className="text-xl font-bold text-slate-900">
                        Hello, {userName.split(' ')[0]}
                    </h1>
                </div>
                <div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold">
                    {userName.charAt(0).toUpperCase()}
                </div>
            </header>

            <main className="space-y-4">

                {/* 2. SALES OVERVIEW (Primary Card) */}
                <div className="bg-slate-900 rounded-2xl p-5 text-white shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2 text-slate-400">
                            <Wallet className="w-4 h-4" />
                            <span className="text-xs font-medium uppercase tracking-wide">Sales This Month</span>
                        </div>
                    </div>
                    <div className="text-3xl font-mono font-bold mb-1">
                        ₦{stats.salesMonth.toLocaleString()}
                    </div>
                    <div className="text-sm text-green-400 font-medium">
                        +12% vs last month
                    </div>
                </div>

                {/* 3. KEY METRICS GRID (Uniform & Clean) */}
                <div className="grid grid-cols-2 gap-3">
                    
                    {/* Sales This Week */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg w-fit mb-3">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <p className="text-xs text-slate-500 font-medium mb-1">Sales This Week</p>
                        <p className="text-xl font-bold text-slate-900">₦{stats.salesWeek.toLocaleString()}</p>
                    </div>

                    {/* Follow-ups Due */}
                    <Link href="/follow-ups">
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm h-full active:bg-slate-50 transition-colors relative">
                            {stats.followUpsToday > 0 && (
                                <div className="absolute top-4 right-4 h-2 w-2 bg-red-500 rounded-full"></div>
                            )}
                            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg w-fit mb-3">
                                <Bell className="w-5 h-5" />
                            </div>
                            <p className="text-xs text-slate-500 font-medium mb-1">Due Today</p>
                            <p className="text-xl font-bold text-slate-900">{stats.followUpsToday}</p>
                        </div>
                    </Link>

                    {/* Total Customers (Full Width) */}
                    <Link href="/customers" className="col-span-2">
                        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between active:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-slate-900 leading-none mb-1">{stats.totalCustomers}</p>
                                    <p className="text-xs text-slate-500 font-medium">Total Customers</p>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-300" />
                        </div>
                    </Link>
                </div>

                {/* 4. QUICK ACTIONS (Simple List) */}
                <div className="pt-4">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Quick Actions</h3>
                    
                    <div className="grid grid-cols-2 gap-3">
                        <Link href="/sales/log" className="bg-white border border-slate-200 p-4 rounded-xl flex items-center justify-center gap-2 shadow-sm active:bg-slate-50">
                            <Plus className="w-5 h-5 text-slate-900" />
                            <span className="font-semibold text-sm text-slate-900">Log Sale</span>
                        </Link>
                        
                        <Link href="/customers/addCustomers" className="bg-white border border-slate-200 p-4 rounded-xl flex items-center justify-center gap-2 shadow-sm active:bg-slate-50">
                            <Users className="w-5 h-5 text-slate-900" />
                            <span className="font-semibold text-sm text-slate-900">Add Customer</span>
                        </Link>
                    </div>
                </div>

            </main>
        </div>
    );
}