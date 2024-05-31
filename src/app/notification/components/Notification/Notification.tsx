import React, { FC } from "react";
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from "react-icons/ai";

import "./notification.css";
import { NotificationTypes } from "../../types";

interface NotificationProps {
  type: NotificationTypes;
  message: string;
  onClose: () => void;
}

const Notification: FC<NotificationProps> = ({ type = "info", message, onClose = () => {} }) => {
  const icon = {
    info: <AiOutlineInfoCircle />,
    success: <AiOutlineCheckCircle />,
    warning: <AiOutlineWarning />,
    error: <AiOutlineCloseCircle />,
  };

  return (
    <div className={`notification ${type}`}>
      {icon[type]}
      {message}
      <AiOutlineClose className="closeIcon" onClick={() => onClose()} />
    </div>
  );
};

export default Notification;
