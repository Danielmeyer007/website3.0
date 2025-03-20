"use client";

import React, { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

interface AnimatedDivProps extends MotionProps {
  children?: ReactNode;
  className?: string;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  className,
  ...motionProps
}) => {
  return (
    <motion.div className={className} {...motionProps}>
      {children ? children : <div>No content</div>}
    </motion.div>
  );
};

export default AnimatedDiv;
