import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import Notification from "../components/Notification/Notification";

const useNotification = (position) => {
  const [notifications, setNotifications] = useState([]);

  const triggerNotification = (type, message, duration) => {
    setNotifications((prev) => {
      return [...prev, { type, duration, message }];
    });
    setTimeout(
      () =>
        setNotifications((prev) => {
          return prev.filter((notification) => notification.message !== message);
        }),
      duration
    );
  };

  const NotificationComponent =
    notifications.length > 0
      ? () => (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {notifications.map((notification, idx) => (
              <Notification key={idx} type={notification.type} message={notification.message} onClose={() => {}} />
            ))}
          </div>
        )
      : null;
  return { triggerNotification, NotificationComponent };
};

export default useNotification;
