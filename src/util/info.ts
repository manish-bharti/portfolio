import NaukriLogo from "../assets/images/Naukri.svg";
import DoselectLogo from "../assets/images/Doselect.webp";

interface InfoData {
  title: string;
  subTitle: string;
}

export const longText: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const aboutSection: string = `<p>
                                     I’m a curious learner who enjoys solving problems and figuring out 
                                     how things work. with a passion for building thoughtful solutions, 
                                     i’m always exploring new ideas and improving along the way.
                                      </p>
                                      <p>
                                      Currently I'm Senior Software Engineer at <strong>Doselect</strong>
                                      specializing in performance and accessibility in both desktop and web application.
                                      </p>
                                     
                                                                    

`;

export const personnelInfo: InfoData = {
  title: "Manish Bharti",
  subTitle: "Applied AI + Full Stack Developer",
};

export const experience = [
  {
    timeperiod: "May 2023 - Present",
    title: "Senior Software Engineer",
    company: "Doselect By Naukri",
    logoSrc: DoselectLogo,
    description: "Developed scalable web applications using React and Node.js.",
    technologies: [
      "React",
      "Web Worker",
      "Electron.Js",
      "Node.js",
      "Redis",
      "TypeScript",
      "Docker",
      "Nginx",
      "AWS",
      "ELK",
      "Redux toolkit",
    ],
  },
  {
    timeperiod: "May 2022 - May 2023",
    title: "Software Engineer",
    company: "Naukri.com",
    logoSrc: NaukriLogo,
    description: "Worked on mobile applications and backend services.",
    technologies: [
      "NextJs",
      "Redux",
      "ReactJs",
      "Material-Ui",
      "Webpack",
      "Javascript",
      "Jest & Enzyme",
    ],
  },
  {
    timeperiod: "Jan 2022 - May 2022",
    title: "Software Engineer",
    company: "Naukri.com",
    logoSrc: NaukriLogo,
    description: "Worked on mobile applications and backend services.",
    technologies: [
      "AMP",
      "Lighthouse",
      "Minification",
      "Bundle size",
      "Site.map",
      "Robots.txt",
    ],
  },
];
