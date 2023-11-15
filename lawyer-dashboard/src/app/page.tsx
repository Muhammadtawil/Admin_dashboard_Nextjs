
import { redirect } from "next/navigation";
import LogRocket from 'logrocket';
LogRocket.init('clickers/lawfirm');
export default function Home() {

return ( 
    <>
        {redirect('ar/home')}
        
    </>
       )
  
}
