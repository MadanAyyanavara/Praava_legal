"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FloatingCardProps {
    color?: string;
    rotation?: string;
    icon?: React.ReactNode;
    label?: string;
    children?: React.ReactNode;
    className?: string;
    delay?: number;
}

export function FloatingCard({
    color = "bg-white text-black",
    rotation = "rotate-0",
    icon,
    label,
    children,
    className,
    delay = 0,
}: FloatingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: delay,
            }}
            // Add a continuous floating motion
            whileInView={{
                y: [0, -6, 0],
                transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay % 2, // stagger the float animation slightly
                },
            }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className={cn(
                "rounded-full flex items-center cursor-pointer",
                color,
                // The rotation is applied here. On hover, we might want to straighten it or keep it.
                // Tailwind allows arbitrary rotations like rotate-[12deg]
                rotation,
                className,
            )}
        >
            {children ? (
                children
            ) : (
                <div className="flex items-center gap-3 w-full justify-center px-4">
                    {icon && (
                        <span className="flex items-center justify-center shrink-0">
                            {icon}
                        </span>
                    )}
                    {label && (
                        <span className="font-bold text-[26px] tracking-wide">
                            {label}
                        </span>
                    )}
                </div>
            )}
        </motion.div>
    );
}
