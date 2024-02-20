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
  };
};
