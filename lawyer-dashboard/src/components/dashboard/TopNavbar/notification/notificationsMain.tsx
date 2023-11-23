import { GetNotifications } from "@/server/notifications/notifications"
import NotificationsSection from "./Notification"


export default async function NotificationsComponent() {
    const notifications=await GetNotifications()
  return (
    <NotificationsSection notificationsData={notifications}  />
  )
}
