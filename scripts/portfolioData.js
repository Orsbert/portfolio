import { Portfolio } from "./Portfolio";

const portfolioData = {
  o7ean3d: Portfolio({
    slug: "o7ean3d",
    title: "Agency Landing Page",
    thumbnail: "/images/o7ean3d.png",
    description: `3d website to showcase the different projects done by a client. 
		The website is designed like a road winding in a spiral form. The project demos are on the side of the road. These are videos which are demoing the different projects. This can be clicked on to view more details in that category.`,
    informationList: [
      `On this project, I was the developer, the design was already provided from a template 
			close to the client's desires.`,
      `My work was to customise the website and add features like mailing functionality that were
			 non inclusive in the template we chose`,
      `The home page welcomes the visitor with a carousel of offers from the restaurant that slide horizontally`,
    ],
    techUsed: [
      "React Three Fiber",
      "React",
      "Javascript",
      "Git",
      "GLSL",
      "tailwind css",
    ],
    tags: ["React Three Fiber", "Three js", "React", "raycasting"],
    videoId: "fLSJpkcPjIw",
    hoverVideo: "/videos/o7ean3d.mp4",
  }),
  facade: Portfolio({
    slug: "facade",
    title: "Facade Configurator",
    thumbnail: "/images/facade.png",
    description: `CAD web application that lets you design and configure your own facade.
		It provides a 3D editor that you can use to build a house from scratch or modify an existing one.
		You can add windows, doors, and other elements to the facade, and change the materials and colors of the walls.
		`,
    informationList: [
      `Led the technical development of the 3d portion of the configurator.`,
      `Implemented CAD features, leading to a 40% increase in user productivity.`,
      `Developed snap-to-grid and snap-to-object functionalities, improving alignment precision by 50%.`,
      `Integrated material selection options, enhancing user customization by 30%.`,
      `Implemented click-to-draw functionality for placing windows and doors, reducing placement time by 50%.`,
      `Supported drawing of multiple rooms and merging, streamlining design processes by 40%.`,
      `Automatically dimensioned different elements, reducing manual effort by 60%.`,
      `Allowed customization of wall materials and colors, increasing design flexibility by 40%.`,
      `Automatically detected and corrected element overlap and out-of-wall placement, reducing errors by 70%.`,
      `Ran heavy tasks like CSG operations in a worker pool, increasing overall performance by 50%.`,
      `Developed a process to convert SVG file drawings to geometry, effectively slashing modeling time by 50%.`,
      `Implemented a caching layer for the generated geometry, increasing rendering performance by 86%.`,
      `Used Delaunay triangulation to generate roof meshes, enhancing roof design options by 40%.`,
      `Developed a framework for managing state, raycasting and more, improving development efficiency by 30%.`,
    ],
    techUsed: ["Three js", "Vue js", "Javascript", "Git"],
    tags: ["Three js", "CAD", "raycasting", "Blender"],
    videoId: "xVzkwRsS728",
    hoverVideo: "/videos/facade.mp4",
  }),
  molyslip: Portfolio({
    slug: "molyslip",
    title: "Interactive Oil Rig Product guide",
    thumbnail: "/images/molyslip.png",
    description: `Oil rig, and be able to interact with it to show where the product would be used. 
		The model can be rotated around. the model spins slowly when idle to show off the different parts.
		The model has the parts highlighted to show areas where the client products can be applied.
		When a part in question is clicked on, a list of products that can be used on it is shown.
		The list items are hyperlinks to the given item’s product page on the client’s e-commerce shop.`,
    informationList: [
      `On this project, I was the developer, the design was already provided from a template 
			close to the client's desires.`,
      `My work was to customise the website and add features like dynamic page routing, mailing functionality that were
			non inclusive in the template we chose.`,
      `The website has insights on various tourist sites around the country with cards on the homepage`,
      `It also has insights on various projects perfomed under Mfrika sponsorship.`,
    ],
    techUsed: [
      "React Three Fiber",
      "React",
      "Javascript",
      "Git",
      "GLSL",
      "Blender",
    ],
    tags: ["React Three Fiber", "Three js", "React", "Blender", "raycasting"],
    videoId: "r5Wg3FmycCM",
    hoverVideo: "/videos/molyslip.mp4",
  }),
  o7ean2d: Portfolio({
    slug: "o7ean2d",
    title: "Corporate Web Presence",
    thumbnail: "/images/o7ean2d.png",
    description: `Comprehensive website aimed at enhancing the digital presence of the client's esteemed organization. 
		The project entailed the creation of a dynamic and visually captivating corporate website tailored to align seamlessly with the client's brand identity and objectives.`,
    informationList: [
      `Led the technical development of the website working closely with the client's design team.`,
      `The site takes you through a journey of the client's history, mission, vision, and values.`,
      `It does this with a combination of custom interactive 3d objects, text, images, and videos working together with scroll triggered animations.`,
    ],
    techUsed: [
      "React Three Fiber",
      "React - framed with Next js framework",
      "Javascript",
      "Git",
      "GLSL",
      "Blender",
      "CSS - scripted with SASS",
    ],
    tags: ["React Three Fiber", "Three js", "React", "Blender"],
    videoId: "Bnt1Si5mPaw",
    hoverVideo: "/videos/o7ean2d.mp4",
  }),
  toptear: Portfolio({
    slug: "toptear",
    title: "Metaverse multivendor e-commerce",
    thumbnail: "/images/toptear.png",
    description: `Comprehensive website aimed at enhancing the digital presence of the client's esteemed organization. 
		The project entailed the creation of a dynamic and visually captivating corporate website tailored to align seamlessly with the client's brand identity and objectives.`,
    informationList: [
      `Led the technical development of the website working closely with the client's design team.`,
      `The site is a concept of a metaverse multivendor e-commerce platform.`,
      `instead of the traditional e-commerce platform, this one is designed to be a 3d world where users can  interact with the products.`,
    ],
    techUsed: [
      "React Three Fiber",
      "React - framed with Next js framework",
      "Javascript",
      "Git",
      "GLSL",
      "Blender",
      "CSS - scripted with SASS",
    ],
    tags: ["React Three Fiber", "Three js", "React", "Blender", "raycasting"],
    videoId: "FJ4UIuB4O1k",
    hoverVideo: "/videos/toptear.mp4",
  }),
  portfolio: Portfolio({
    slug: "portfolio",
    title: "My Portfolio",
    thumbnail: "/images/portfolio.png",
    description: `This is my Web Development Portfolio website. It is basically where you are right now.`,
    informationList: [
      `On this project, I was the developer and UI/UX designer and client too.`,
      `I went for an intuitive, simple and smooth experience goal for my website viewers.`,
      `I also added some personality to the design in form of dark mode almost everywhere and a few 
			transition animations as the user interacts with the website.`,
    ],
    techUsed: [
      "CSS - scripted with SASS",
      "React js - framed with Next js framework",
      "Framer motion",
    ],
    tags: ["React"],
  }),
};

export const portfolioDataList = Object.values(portfolioData);

export const getPortfolio = (slug) => {
  if (portfolioData[slug]) {
    return portfolioData[slug];
  } else {
    return null;
  }
};

export const getTagsList = () => {
  const dataList = portfolioDataList;

  let tagsList = [];

  for (let index = 0; index < dataList.length; index++) {
    const { tags } = dataList[index];
    for (const i in tags) {
      if (!tagsList.includes(tags[i])) {
        tagsList.push(tags[i]);
      }
    }
  }

  return tagsList;
};

export default portfolioData;
