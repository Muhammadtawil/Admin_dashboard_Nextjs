"use client"
import { useSession } from "next-auth/react";


export default function MainComponent({ text }: { text: string }) {
    const { data: session } = useSession();
  return (


      
  
        <h1>{`${text} ${session?.userName}`}</h1>
    );
}
