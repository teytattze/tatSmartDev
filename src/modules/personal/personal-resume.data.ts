export interface IResumeExperience {
  title: string;
  location: string;
  duration: string;
  desc: string;
}

export const resumeEducationExperiences: IResumeExperience[] = [
  {
    title: 'Software Engineering Degree (Level 1 & 2)',
    location: 'Asia Pacific University (APU)',
    duration: '2019 - 2021',
    desc: 'During my first and second levels at APU, I have enhanced my knowledge which is related to the fundamental of software development.',
  },
  {
    title: 'Software Enginnering Degree (Level 3)',
    location: 'Middlesex University',
    duration: '2021 - 2022',
    desc: 'During the Software Engineering Degree level three, I have decided to continue my tertiary education at Middlesex University London. Therefore, I can broaden my horizons.',
  },
  {
    title: 'Rocheston Certified Cybersecurity Engineer',
    location: 'Rocheston',
    duration: '2019 - 2020',
    desc: 'Security is a crucial part of every software product. Therefore, I had taken this cybersecurity course in order to develop a more secure application..',
  },
];

export const resumeWorkingExperiences: IResumeExperience[] = [
  {
    title: 'Internship',
    location: 'Setel Ventures Sdn Bhd',
    duration: 'April 2021 - August 2021',
    desc: 'During the whole intern, my task was focusing on the web admin portal migration (Angular to ReactJS). The tools or technologies that I have learned during the internship are including TypeScript, ReactJS, TailwindCSS, Testing Library, NestJS, etc...',
  },
  {
    title: 'Mentoring',
    location: 'Self-employed',
    duration: 'January 2020 - Current',
    desc: 'To improve my skills, I have decided to start teaching/mentoring other people. While mentoring others, I am able to refresh/revise the fundamental part of software engineering and web development. Just as the saying goes, the best way to learn is to teach other people.',
  },
];

export interface IResumeSkill {
  title: string;
  progress: number;
}

export const resumeSkills: IResumeSkill[] = [
  {
    title: 'HTML/CSS',
    progress: 95,
  },
  {
    title: 'JavaScript',
    progress: 88,
  },
  {
    title: 'TypeScript',
    progress: 85,
  },
  {
    title: 'Golang',
    progress: 80,
  },
  {
    title: 'Java',
    progress: 80,
  },
  {
    title: 'Python',
    progress: 75,
  },
  {
    title: 'ReactJS',
    progress: 90,
  },
  {
    title: 'NextJS',
    progress: 85,
  },
  {
    title: 'ExpressJS',
    progress: 80,
  },
  {
    title: 'NestJS',
    progress: 80,
  },
  {
    title: 'SQL',
    progress: 85,
  },
  {
    title: 'Docker',
    progress: 65,
  },
];
