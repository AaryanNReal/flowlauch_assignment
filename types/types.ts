export type Profile = {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  image: string;
};

export type Academic = {
  university: string;
  college: string;
  degree: string;
  year: string;
  gpa: string;
};

export type Experience = {
  company: string;
  position: string;
  year: string;
  description: string;
};

export type Skills = {
  languages: string[];
  web: string[];
  tools: string[];
  databases: string[];
};

export type DashboardData = {
  profile: Profile;
  academics: Academic[];
  experience: Experience[];
  skills: Skills;
  hobbies: string[];
  certifications: string[];
};