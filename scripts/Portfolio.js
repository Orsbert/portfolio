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
  };
};
