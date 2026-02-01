export default function CustomerSnapshot(){
    return(
    <div className="bg-slate-900 w-full w-full h-40 mt-6 rounded-xl">

        <div className="w-full flex flex-col px-2 py-2">

            <div className="flex flex-row w-full">
                <span className="w-12 h-12 rounded-[50%] bg-slate-300"></span>
                <span className="w-full h-16 flex flex-col ">
                    <h1>Full name</h1>
                    <p>customer id</p>
                </span>
            </div>

            <span className="w-44 bg-slate-800 h-6 rounded-sm ml-2 flex justify-center items-center">active /at-risk/ inactive</span>
        </div>
    </div>
    )
}