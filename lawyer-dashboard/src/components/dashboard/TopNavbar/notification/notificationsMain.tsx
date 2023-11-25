import { GetNotifications, UpdateNotifications } from "@/server/notifications/notifications"
import NotificationsSection from "./Notification"
import { revalidateTag } from "next/cache";


async function updateRead(notificationId: string) {
  "use server";
  await UpdateNotifications(notificationId);
  revalidateTag('notifications')
 
}

export default async function NotificationsComponent({notificationData}:{notificationData:any}) {
  return (
    <NotificationsSection notificationsData={notificationData} Update={updateRead}  />
  )
}
