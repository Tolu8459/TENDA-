
import Link from "next/link"
import { createSupabaseServerClient } from "@/lib/supabaseServer"

export default  async function dashboard(){

    const supabase = await createSupabaseServerClient();
    

    const {
        data : {user},
        error :userError,

    } = await supabase.auth.getUser()
    console.log(user);

    if (!user){
        console.error("no logged-in user")
        return
    }

  return(
        <div className="bg-slate-300 w-full flex flex-1 flex-">
            <button >TESTING</button>
           <Link href="/customers/addCustomers"> add customers</Link>
           hiiiii
        </div>
    )
}