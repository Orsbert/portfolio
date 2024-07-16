export const Portfolio = ({
  slug = "",
  title = "",
  thumbnail = "",
  logo = "",
  description = "",
  informationList = [],
  techUsed = [],
  tags = [],
  videoId = "",
  hoverVideo = "",
  fullVideo = "",
}) => {
  return {
    slug,
    title,
    thumbnail,
    logo,
    description,
    informationList,
    techUsed,
    tags,
    videoId,
    hoverVideo,
    fullVideo,
  };
};
