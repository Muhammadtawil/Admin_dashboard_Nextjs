import { GetNotifications, UpdateNotifications } from "@/server/notifications/notifications"
import NotificationsSection from "./Notification"


async function updateRead(notificationId: string) {
  "use server";
  await UpdateNotifications(notificationId);
 
}

export default async function NotificationsComponent() {
    const notifications=await GetNotifications()
  return (
    <NotificationsSection notificationsData={notifications} Update={updateRead}  />
  )
}
