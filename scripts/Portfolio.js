import React from "react";

export const Portfolio = ({
  slug = "",
  title = "",
  titleJsx = <></>,
  thumbnail = "",
  logo = "",
  description = "",
  informationList = [],
  techUsed = [],
  tags = [],
  videoId = "",
  hoverVideo = "",
  fullVideo = "",
  fullVideoDurationInMinutes = 1,
}) => {
  return {
    slug,
    title,
    titleJsx,
    thumbnail,
    logo,
    description,
    informationList,
    techUsed,
    tags,
    videoId,
    hoverVideo,
    fullVideo,
    fullVideoDurationInMinutes,
  };
};
