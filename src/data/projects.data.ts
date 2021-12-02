const BASE_PROJECT_IMG_URL = '/images/projects';

export interface IProject {
  title: string;
  imgUrl: string;
  link: string;
  repo: string;
  technologies: string[];
}

export const projects: IProject[] = [
  {
    title: 'Blog App',
    imgUrl: `${BASE_PROJECT_IMG_URL}/blog.png`,
    repo: 'https://github.com/teytattze/nextjs-blog.git',
    link: 'https://nextjs-blog-teytattze.vercel.app',
    technologies: [
      'TypeScript',
      'NextJS',
      'Material UI',
      'Firebase',
      'Cypress',
    ],
  },
];
