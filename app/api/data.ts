import { DashboardData } from '@/types/types';

const data: DashboardData = {
  profile: {
    name: "Aaryan Sharma",
    title: "Computer Science Student",
    bio: "Passionate about web development and problem solving. Currently pursuing my Bachelor's degree in Computer Science while working on exciting projects to enhance my skills.",
    email: "aaryansharmawork@gmail.com",
    phone: "+91 9137933718",
    location: "Mumbai, India",
    image: "/Me.jpg"
  },
  academics: [
    {
      university: "Mumbai University",
      college: "Guru Nanak Khalsa College",
      degree: "B.Sc. Computer Science",
      year: "2022-2025",
      gpa: "9.1/10"
    }
  ],
  experience: [
    {
      company: "WeCofy",
      position: "Frontend Developer Intern",
      year: "May 2025",
      description: "Developed responsive web interfaces using modern web technologies"
    }
  ],
  skills: {
    languages: ["JavaScript", "Python", "Java", "C++"],
    web: ["HTML/CSS", "React", "Next.js", "Node.js"],
    tools: ["Git", "VS Code", "Figma", "Postman"],
    databases: ["Firebase"]
  },
  hobbies: [
    "Sports",
    "Chess",
    "Coding challenges",
    "Reading tech blogs"
  ],
  certifications: [
    "AWS Certified Cloud Practitioner",
    "Google Data Analytics Professional Certificate"
  ]
};

export default data;