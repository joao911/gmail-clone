import React from "react";
import { Image, ImageProps } from "react-native";
import clsx from "clsx";

interface AvatarProps extends ImageProps {
  size?: "small" | "medium";
}
export const Avatar: React.FC<AvatarProps> = ({ size = "medium", ...rest }) => {
  return (
    <Image
      className={clsx("rounded-full", {
        "w-8 h-8": size === "small",
        "w-10 h-10": size === "medium",
      })}
      {...rest}
    />
  );
};
