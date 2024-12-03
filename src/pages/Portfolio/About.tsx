import React, { useEffect } from "react";
import { aboutSection } from "../../util/info";
import useOnScreen from "../../hooks/useOnScreen";

interface AboutProps {
  setActiveTab: (tab: string) => void;
}

const About: React.FC<AboutProps> = ({ setActiveTab }) => {
  const [ref, isIntersecting] = useOnScreen({ rootMargin: "0px 0px -50% 0px" });

  useEffect(() => {
    if (isIntersecting) {
      setActiveTab("About");
    }
  }, [isIntersecting, setActiveTab]);

  return (
    <div ref={ref}>
      <div dangerouslySetInnerHTML={{ __html: aboutSection }} />
    </div>
  );
};

export default About;
