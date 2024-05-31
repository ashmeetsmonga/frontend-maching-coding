"use client";

import React from "react";
import useNotification from "./hooks/useNotification";

const NotificationPage = () => {
  const { triggerNotification, NotificationComponent }: any = useNotification({ position: "top-left" });

  return (
    <div>
      <button onClick={() => triggerNotification("info", "This is an info notification", 3000)}>Trigger Info Notification</button>
      <button onClick={() => triggerNotification("warning", "This is a warning notification", 3000)}>Trigger Warning Notification</button>
      <button onClick={() => triggerNotification("success", "This is a success notification", 3000)}>Trigger Success Notification</button>
      <button onClick={() => triggerNotification("error", "This is an error notification", 3000)}>Trigger Error Notification</button>
      {NotificationComponent && <NotificationComponent />}
    </div>
  );
};

export default NotificationPage;
