import React from "react";

interface MotionComponentProps {
  children: React.ReactNode;
}

const MotionComponent: React.FC<MotionComponentProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default MotionComponent;
