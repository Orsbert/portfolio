import React, { useContext, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { getTagsList, portfolioDataList } from "../scripts/portfolioData";
import { observer } from "mobx-react-lite";
import UserContext from "../scripts/Store";
import { motion } from "framer-motion";

// @ts-ignore
export const Tag = observer(({ tag }) => {
  const context = useContext(UserContext);
  const { selectedTag, tagsTagged } = context.user;
  let tagged = false;

  if (tagsTagged) {
    tagged = tagsTagged.includes(tag);
  }

  const handleClick = () => {
    context.setUser({ selectedTag: tag });
  };

  return (
    <div
      className={`tag ${
        tag === selectedTag ? "selected" : tagged ? "tagged" : ""
      }`}
      role='button'
      key={tag}
      onClick={handleClick}
    >
      {tag}
    </div>
  );
});

const tagsList = getTagsList();

export const Tags = () => {
  return (
    <div className='tags-wrapper container'>
      {/* @ts-ignore */}
      <Tag tag={"show all"} />
      {tagsList.map((tag) => (
        // @ts-ignore
        <Tag tag={tag} key={tag} />
      ))}
    </div>
  );
};

// @ts-ignore
export const PortfolioThumbnail = ({
  slug,
  title,
  description,
  thumbnail,
  hoverVideo,
  tags,
}) => {
  const videoRef = useRef(null);
  const thumbnailImageRef = useRef(null);
  const context = useContext(UserContext);
  const { current: playHoverVideoTimeout } = useRef(null);

  const hasHoverVideo = hoverVideo !== "";

  const handleMouseEnter = () => {
    context.setUser({ tagsTagged: tags });

    if (playHoverVideoTimeout) clearTimeout(playHoverVideoTimeout);

    playHoverVideoTimeout = setTimeout(() => {
      if (hasHoverVideo && videoRef.current) {
        // hide imagea
        thumbnailImageRef.current.style.display = "none";
        videoRef.current.play();
      }
    }, 200);
  };

  const handleMouseLeave = () => {
    context.setUser({ tagsTagged: [] });

    if (playHoverVideoTimeout) clearTimeout(playHoverVideoTimeout);

    if (hasHoverVideo && videoRef.current) {
      // show image
      thumbnailImageRef.current.style.display = "block";
      // move to start
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  return (
    <Link href={`/portfolio/${slug}`}>
      <a>
        <motion.div
          className='portfolio-thumbnail'
          role='button'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          layout
        >
          <div
            className='thumbnail'
            style={{
              position: "relative",
              height: 150,
              width: "100%",
              overflow: "hidden",
            }}
          >
            {hasHoverVideo && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <video
                  ref={videoRef}
                  src={hoverVideo}
                  style={{
                    width: "100%",
                    // height: "100%",
                  }}
                  loop
                  muted
                ></video>
              </div>
            )}
            <div
              ref={thumbnailImageRef}
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <Image src={thumbnail} layout={"fill"} alt={slug} />
            </div>
          </div>
          <div className='title'>
            <strong>{title}</strong>
            <br />
            <div className='sub-title'>
              {description.substring(0, 50)}...
              <span className='target'> Read more</span>
            </div>
          </div>
        </motion.div>
      </a>
    </Link>
  );
};

export const PortfolioThumbnails = observer(() => {
  const context = useContext(UserContext);
  const { selectedTag } = context.user;

  const filtered =
    selectedTag === "show all"
      ? portfolioDataList
      : portfolioDataList.filter((portfolio) =>
          portfolio.tags.includes(selectedTag)
        );

  return (
    <motion.ul className='portfolio-thumbnails-wrapper' layout>
      {filtered.map(
        ({ slug, title, description, thumbnail, hoverVideo, tags }) => (
          <PortfolioThumbnail
            slug={slug}
            title={title}
            description={description}
            thumbnail={thumbnail}
            hoverVideo={hoverVideo}
            tags={tags}
            key={slug}
          />
        )
      )}
    </motion.ul>
  );
});

export const PortfolioList = () => {
  return (
    <div className='portfolio-list'>
      <div className='container'>
        <div id='portfolio-list-heading' className='heading'>
          Web developer portfolio
        </div>
        <br />
        <div className='normal'>
          From 3D landing pages to fully-blown CAD applications. Check out my
          latest portfolio projects.
        </div>
        <br />
      </div>
      <Tags />
      <div className='container'>
        <PortfolioThumbnails />
      </div>
    </div>
  );
};
