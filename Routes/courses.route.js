import express from "express";
const routes = express.Router();
import dotenv from "dotenv";
dotenv.config();

routes.get("/", (req, res) => {
  res.send("courses routes Working");
});

routes.get("/top-courses", (req, res) => {
  const topCourses = [
    {
      imgUrl:
        "https://www.trycatchclasses.com/wp-content/uploads/2024/02/Full-stack-web-development.webp",
      title: "Full Stack Web Development",
      topicCovered: [
        "MERN Stack",
        "JAVA Stack",
        "Python Stack",
        "DOTNET Stack",
        "MEAN Stack",
        "Many More",
      ],
    },
    {
      imgUrl:
        "https://www.trycatchclasses.com/wp-content/uploads/2024/02/Mobile-app-development.webp",
      title: "Mobile App Development",
      topicCovered: [
        "Android",
        "IOS",
        "Fultter",
        "React Native",
        "Augmented Reality",
        "Many More",
      ],
    },
    {
      imgUrl:
        "https://www.trycatchclasses.com/wp-content/uploads/2024/02/Data-science.webp",
      title: "Data Science",
      topicCovered: [
        "Machine Learning",
        "Python",
        "NLP",
        "Deep Learning",
        "MySQL",
        "Many More",
      ],
    },
    {
      imgUrl:
        "https://www.trycatchclasses.com/wp-content/uploads/2024/02/uxui.webp",
      title: "UI-UX Designing",
      topicCovered: [
        "Figma",
        "Illustrator",
        "Wireframe",
        "Photoshop",
        "Adobe",
        "Many More",
      ],
    },
    {
      imgUrl:
        "https://www.trycatchclasses.com/wp-content/uploads/2024/02/software-testing.webp",
      title: "Software Testing",
      topicCovered: [
        "Manual Testing",
        "Selenium Testing",
        "Java",
        "Mobile Testing",
        "Api Testing",
        "Many More",
      ],
    },
    {
      imgUrl:
        "https://www.trycatchclasses.com/wp-content/uploads/2024/02/cyber-security.webp",
      title: "Cyber Security",
      topicCovered: [
        "Cyber Security",
        "Bug Bounty",
        "Linux",
        "CCNA",
        "Live Cases",
        "Many More",
      ],
    },
  ];

  return res.status(200).json({ isOk: true, courses: topCourses });
});

export default routes;
