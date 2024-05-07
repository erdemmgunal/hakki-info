"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef(
  function Avatar({ className, ...props }, ref) {
    return React.createElement(
      AvatarPrimitive.Root,
      {
        ref: ref,
        className: cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-xl",
          className
        ),
        ...props,
      }
    );
  }
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef(
  function AvatarImage({ className, ...props }, ref) {
    return React.createElement(
      AvatarPrimitive.Image,
      {
        ref: ref,
        className: cn("aspect-square h-full w-full", className),
        ...props,
      }
    );
  }
);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef(
  function AvatarFallback({ className, ...props }, ref) {
    return React.createElement(
      AvatarPrimitive.Fallback,
      {
        ref: ref,
        className: cn(
          "flex h-full w-full items-center justify-center rounded-xl bg-muted",
          className
        ),
        ...props,
      }
    );
  }
);
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };