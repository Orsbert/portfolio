import { motion, useMotionValue, useViewportScroll } from "framer-motion";
import { observer } from "mobx-react-lite";
import { Icon } from "@iconify/react";
import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import isElementInViewport from "../scripts/isElementInViewPort";
import UserContext from "../scripts/Store";
import mailFilled from "@iconify/icons-ant-design/mail-filled";
import getClosestPlaceholder from "../scripts/getClosestPlaceholder";
import ContactForm from "./ContactForm";

const animationDuration = 0.25;

export const MailButton = observer(() => {
  const modalInView = useMotionValue(false);

  const context = useContext(UserContext);

  const {
    placeholderXPos,
    placeholderXPosB4,
    placeholderYPos,
    placeholderYPosB4,
    isVisible,
  } = context.user;
  const ref = useRef(null);

  const variants = {
    visible: {
      opacity: [1, 1, 0],
      top: placeholderYPos,
      left: placeholderXPos,
    },
    notVisible: {
      borderRadius: ["2%", "5%", "50%"],
      top: placeholderYPos,
      left: placeholderXPos,
      innerWidth: 20,
      display: "flex",
    },
  };

  return (
    <>
      <motion.div
        className={`button primary mail-button`}
        ref={ref}
        initial='visible'
        animate={isVisible ? "visible" : "notVisible"}
        variants={variants}
        transition={{
          duration: animationDuration,
          times: [0, 0.9, 1],
        }}
        onClick={() => modalInView.set(true)}
      >
        <div role='button'>
          {!isVisible && (
            <Icon
              icon={mailFilled}
              style={{
                fontSize: "28px",
                margin: "0px 2.625px", // square out
              }}
            />
          )}
        </div>
      </motion.div>
      <MailButtonContactForm modalInView={modalInView} />
    </>
  );
});

let data = {};

let scrollTimer = null;

// @ts-ignore
export const MailButtonPlaceholder = observer(({ tag }) => {
  const ref = useRef(null);
  const modalInView = useMotionValue(false);

  const context = useContext(UserContext);
  const { isVisible = false } = context.user;

  // listen for changes in y postion change
  const { scrollYProgress } = useViewportScroll();
  useEffect(
    () =>
      scrollYProgress.onChange(() => {
        const { clientHeight, clientWidth } = document.documentElement;

        const padding = clientWidth * 0.01;

        const cornerPoint = {
          placeholderXPos: clientWidth - 65 - padding,
          placeholderYPos: clientHeight - 65 - padding,
        };

        const { isVisible } = context.user;

        if (ref.current) {
          var rect = ref.current.getBoundingClientRect();

          // store the data
          if (!data[tag]) {
            // initialise data
            data[tag] = {};
          }
          data[tag] = {
            placeholderXPos: rect.left,
            placeholderYPos: rect.top,
          };

          // get the tag of the closest placeholder
          const closestPlaceholder = getClosestPlaceholder(data);

          const isRectInViewport = isElementInViewport(ref.current);

          if (tag === closestPlaceholder) {
            if (isRectInViewport) {
              if (isVisible === false) {
                // no first timers

                const updateState = () => {
                  context.setUser({
                    placeholderXPos: data[closestPlaceholder].placeholderXPos,
                    placeholderYPos: data[closestPlaceholder].placeholderYPos,
                    placeholderXPosB4: cornerPoint.placeholderXPos,
                    placeholderYPosB4: cornerPoint.placeholderYPos,
                    isVisible: isRectInViewport,
                  });
                };

                // since this is  a moving target, we are only doing it on scroll stop
                if (scrollTimer !== null) {
                  clearTimeout(scrollTimer);
                }
                scrollTimer = setTimeout(updateState, 150);
              }
            } else {
              if (isVisible === undefined || isVisible === true) {
                // first time ?
                context.setUser({
                  placeholderXPos: cornerPoint.placeholderXPos,
                  placeholderYPos: cornerPoint.placeholderYPos,
                  placeholderXPosB4: rect.left,
                  placeholderYPosB4: rect.top,
                  isVisible: isRectInViewport,
                });
              }
            }
          }
        }
      }),
    [isVisible]
  );

  const variants = {
    visible: {
      opacity: [0, 1],
      transition: {
        duration: 0.3,
        delay: animationDuration,
      },
    },
    notVisible: {
      opacity: 0,
    },
  };

  return (
    <>
      <motion.div
        ref={ref}
        className='button primary mail-button'
        style={{
          position: "static",
        }}
        initial={"visible"}
        animate={
          isVisible === undefined || isVisible ? "visible" : "notVisible"
        }
        variants={variants}
        role='button'
        onClick={() => modalInView.set(true)}
      >
        Leave a Message
      </motion.div>
      <MailButtonContactForm modalInView={modalInView} />
    </>
  );
});

const MailButtonContactForm = ({ modalInView }) => {
  const color1 = "white";
  const color2 = "#111010";

  return (
    <Modal inView={modalInView}>
      <ModalContentWrapper>
        <div
          className='relative w-full grid place-items-center normal-text p-20'
          style={{
            backgroundColor: color2,
            color: color1,
          }}
        >
          <div className=''>
            <h2
              className='heading4-text'
              style={{
                fontWeight: "bold",
                paddingTop: "5vh",
                paddingBottom: "2vh",
              }}
            >
              Contact Form
            </h2>
            <ContactForm />
          </div>
        </div>
      </ModalContentWrapper>
    </Modal>
  );
};

const Modal = ({ children, inView }) => {
  const [isClient, setIsClient] = useState(false);
  // @ts-ignore
  const left = useMotionValue("150vw");

  useEffect(() => {
    setIsClient(true);
  }, []);

  // inView change
  useEffect(() => {
    return inView.onChange((latest) => {
      left.set(latest ? "0vw" : "150vw");
    });
  }, [inView, left]);

  // update motion values on visible change
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        inView.set(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [inView]);

  const modalContent = (
    <motion.div
      className='has-bg modal backdrop-blur-sm transition-all grid place-items-center'
      style={{
        left: left,
        zIndex: 4,
        position: "fixed",
        top: 0,
        width: "100vw",
        height: "calc(100 * var(--vh, 1vh))",
        y: 0,
        transition: "left 0.5s ease-out",
      }}
      onClick={(e) => {
        // close if clicked outside the content
        if (e.target.classList.contains("modal")) {
          inView.set(false);
        }
      }}
    >
      {children}
      <CloseButton handlerClose={() => inView.set(false)} />
    </motion.div>
  );

  return isClient && ReactDOM.createPortal(modalContent, document.body);
};

const CloseButton = ({ handlerClose }) => {
  return (
    <motion.div
      className='absolute top-4 right-4 bg-white text-black rounded-sm text-5xl p-5 cursor-pointer transition-all hover:bg-gray-800 hover:text-white'
      role='button'
      onClick={handlerClose}
    >
      ✖
    </motion.div>
  );
};

const ModalContentWrapper = observer(({ children }) => {
  return (
    <motion.div
      style={{
        position: "relative",
        // block when is mobile and grid on else
        display: "block",
        // gridTemplateColumns: "50% 49%",
        textAlign: "left",
        overflow: "auto",
      }}
    >
      {children}
    </motion.div>
  );
});
