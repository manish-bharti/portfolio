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
    description:
      "Worked on Perfomance Enhancement by using modern Javascript techniques ie web workers , migrating some tasks to low prioirty , Resource optimization , Performance monitoring \n\nBuild cross platform desktop application for Windows, Linux, Mac to integrate web application inside Electron js with more focus on proctoring over candidate's environment",
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
    description:
      "Worked on migrating wordpress frontend to ReactJs to improve perfomance and user experience and SEO. Build custom react components and styling packages.\n\nMigrate the whole candidate experience from Angular-1.2 to React-16 to improve customization and performance.",
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
    title: "Internship",
    company: "Naukri.com",
    logoSrc: NaukriLogo,
    description:
      "Worked on Web application and learning their major flows \n\nResearch on increasing Lighthouse Score, Google Rank and other SEO parameters to boost organic traffic on across Naukri pages \n\nWorked on special AMP pages from mobile applications",
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
