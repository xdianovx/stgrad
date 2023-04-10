import { useContext, useEffect } from "react";
import gsap from "gsap-trial/dist/gsap";
import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { useRouter } from "next/router";
import SmootherContext from "../context/SmootherContext";
import { Footer, Header } from ".";

const LayoutWrapper = ({ children, ...props }) => {
  const router = useRouter();
  const { toggleSmootherReady } = useContext(SmootherContext);
  const onPageEnter = (node) => {
    gsap.fromTo(
      node,
      {
        y: 50,
        autoAlpha: 0,
        ease: "power3",
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3",
      }
    );
  };

  const onPageExit = (node) => {
    gsap.fromTo(
      node,
      {
        y: 0,
        autoAlpha: 1,
        ease: "power3.out",
      },
      {
        y: -50,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.inOut",
      }
    );
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: true,
        effects: true,
        smoothTouch: 0,
      });
    });
    toggleSmootherReady(true);

    return () => ctx.revert();
  }, []);

  return (
    <div id="smooth-wrapper" className="dark:bg-black" {...props}>
      <div id="smooth-content">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default LayoutWrapper;
