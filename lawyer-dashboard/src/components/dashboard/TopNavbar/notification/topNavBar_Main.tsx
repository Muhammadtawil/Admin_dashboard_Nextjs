import TopNavbar from "../TopNavBar";
import NotificationsComponent from "./notificationsMain";


   
    export default function TopNavBarMain({toogleActive, children, onSignOut}: { toogleActive: any, children: any, onSignOut: any;}) {
  return (
    <TopNavbar toogleActive={toogleActive} children={children} onSignOut={onSignOut} />
  )
}
