"use client"
import { useSession } from "next-auth/react";
import BarsDataset from "./chart";
import { Stack } from "@mui/material";
import HorizontalBars from "./charttwo";


export default function MainComponent({ text }: { text: string }) {
    const { data: session } = useSession();
  return (

<>
<h1>{`${text} ${session?.userName}`}</h1>


          
</>
      
  
    );
}
