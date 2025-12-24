"use client"
import React, { useState,createContext,useContext } from "react"; 
import { useRouter } from "next/navigation";

type User = {
    email:string;
}

 type AuthContextType ={
    user: User | null;
    signup: (email:string,password:string) => void;
    login : (email:string,password:string) => void;
    logout :() => void;

 } 
 const AuthContext = createContext<AuthContextType|null>(null);

 export function AuthProvider({children}:{children:React.ReactNode}){
    const [user,setUser] =useState<User | null>(null);
    const router = useRouter();

    const signup = (email:string,password:string)=>{
        localStorage.setItem("user",JSON.stringify({email}));
        setUser({email});
        router.push("/dashboard");
        

    }
    const login = (email:string,password:string)=>{
        const storedUser = localStorage.getItem("user");

        if(!storedUser){
            alert('user not found')
            return;
        }
        setUser({email})
        router.push("/dashboard")

    }
    const logout =()=>{
        localStorage.removeItem("user");
        setUser(null);
        router.push('/login')
    }
    return(
        <AuthContext.Provider value ={{user,signup,login,logout}}>
            {children}
        </AuthContext.Provider>
    )

 }
 export function useAuth(){
    const context = useContext(AuthContext);
     if (!context){
        throw new Error("useAuth must be used inside AuthProvider")
     }
     return context
 }