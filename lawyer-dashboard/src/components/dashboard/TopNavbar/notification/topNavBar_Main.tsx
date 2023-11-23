import TopNavbar from "../TopNavBar";
import NotificationsComponent from "./notificationsMain";


export default function TopNavBarMain({toogleActive, children}: { toogleActive: any, children: any}) {
  return (
    <TopNavbar toogleActive={toogleActive} children={children} />
  )
}
