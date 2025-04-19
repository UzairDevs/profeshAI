"use client"
import { FileText } from "lucide-react"
import { signIn,signOut, useSession } from "next-auth/react"

    function AuthButton(){
        const {data :session} = useSession()
        if (session){
            return (
                <>
                
                <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
                <div className="flex items-center space-x-2">
                  <FileText className="h-8 w-8 text-indigo-600" />
                  <span className="text-2xl font-bold text-white-800">ResumeAI</span>
                </div>
                
                <div className="flex space-x-4">
                {session?.user?.name} <br />

                  <button onClick={ ()=> signOut( {callbackUrl: "/  "}) } className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">Sign out</button>
                </div>
              </nav>
              </>
            )
        }
    
    return (
        <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <FileText className="h-8 w-8 text-indigo-600" />
          <span className="text-2xl font-bold text-white-800">ResumeAI</span>
        </div>
        
        <div className="flex space-x-4">
          <button onClick={()=> signIn("github", {callbackUrl: "/api/auth/chat"})} className="px-4 py-2 text-white-600 hover:text-indigo-600 transition">Log in</button>

        </div>
      </nav>
    )
    }
    export default function NavBar (){
        return (
            <div>
                <AuthButton />
            </div>
        )
    }