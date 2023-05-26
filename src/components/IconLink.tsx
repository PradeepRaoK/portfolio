import NextLink from "next/link";
import Icon from "./Icon";

import { type icons } from "./Icon";

interface IconLinkProps {
  url: string;
  icon: keyof icons;
}

export const IconLink = ({ url, icon }: IconLinkProps) => {
  return (
    <div className="flex flex-col items-center w-36 mb-4">
      <NextLink href={url}>
        <Icon icon={icon} />
      </NextLink>
    </div>
  );
};