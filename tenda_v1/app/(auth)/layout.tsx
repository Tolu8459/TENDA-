import React from "react";

export default function AuthLayout({children,}:{children:React.ReactNode}){
    return(
        <div>
            <header className="">
                <h1></h1>
            </header>
            <main>{children}</main>
        </div>
    )
}