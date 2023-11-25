"use client"
import styles from "./Notification.module.css";
import {
  IconButton,
  Typography,
  Tooltip,
  Menu,
  Badge,
} from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Image from 'next/image'
import dashboardLogo from '../../../../../public/dashboardLogo.png'
import { useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

const NotificationsSection = ({ notificationsData,Update }: { notificationsData: any ,Update:any}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
const router=useRouter()
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const locale = useLocale();
 // Calculate the count of unread notifications
 const unreadCount = notificationsData.filter((notification: any) => !notification.read).length;

  return (
    <>
      <Tooltip title="Notification" className="client-box">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{
            backgroundColor: "#f5f5f5",
            width: "40px",
            height: "40px",
            p: 0,
          }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          className="ml-2 for-dark-notification"
        >
           <Badge color="error" badgeContent={unreadCount}>
            <NotificationsActiveIcon className="notification-icon" />
          </Badge>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        // ... (rest of your code)
      >
     <div className={styles.header}>
          <Typography variant="h4" className={styles.notificationHead}>Notifications</Typography>
   
        </div>
        <div className={styles.notificationContainer}>
          <div className={styles.notification}>
            {notificationsData.length > 0 ? (
              // Render notifications if there are any
              notificationsData.map((notification: any, index: any) => (
                <div
              key={index}
              className={`${styles.notificationList} ${
                notification.read ? '' : styles.unreadNotification
                }`}
                  onClick={() => {
                    if (notification.title.includes('Task')) {
                      router.push(`/${locale}/dashboard/tasks`)
                    }
                    Update(notification.id)
                  }}
            >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "14px",
                      color: "#260944",
                      fontWeight: "500",
                      mb: 1,
                    }}
                  >
                    {notification.title}
                  </Typography>

                  <div className={styles.notificationListContent}>
                    <Image src={dashboardLogo} alt="Notification Icon" width={27} />
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "13px",
                        color: "#5B5B98",
                        fontWeight: "500",
                      }}
                      className="ml-1"
                    >
                      {notification.message}
                    </Typography>
                  </div>

                  <Typography sx={{ fontSize: "12px", color: "#A9A9C8", mt: 1 }}>
                    {new Date(notification.createdAt).toLocaleDateString(locale == 'ar' ? "ar-LB" : "en-US", {
                      day: "numeric",
                      month: "2-digit",
                      year: "2-digit",
                      hour: "numeric",
                    })}
                  </Typography>
                </div>
              ))
            ) : (
              // Render a default message if there are no notifications
              <div className={styles.notificationList}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "14px",
                    color: "#260944",
                    fontWeight: "500",
                    mb: 1,
                  }}
                >
                  You have no notifications
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "13px",
                    color: "#5B5B98",
                    fontWeight: "500",
                  }}
                  className="ml-1"
                >
                  {/* Empty message */}
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#A9A9C8", mt: 1 }}>
                  {/* Empty date */}
                </Typography>
              </div>
            )}
          </div>
        </div>
      </Menu>
    </>
  );
};

export default NotificationsSection;