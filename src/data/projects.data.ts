export interface IProject {
  title: string;
  imgUrl: string;
  link: string;
  repo: string;
  technologies: string[];
}

export const projects: IProject[] = [
  {
    title: 'Google Clone',
    imgUrl: '/images/projects/google.svg',
    repo: 'https://github.com/teytattze/google-clone',
    link: 'https://google-clone-eta.vercel.app',
    technologies: [
      'HTML',
      'CSS',
      'TypeScript',
      'NextJS',
      'TailwindCSS',
      'Google API',
    ],
  },
  {
    title: 'Hulu Clone',
    imgUrl: '/images/projects/hulu.svg',
    repo: 'https://github.com/teytattze/hulu-clone',
    link: 'https://hulu-clone-blond-rho.vercel.app',
    technologies: [
      'HTML',
      'CSS',
      'TypeScript',
      'NextJS',
      'TailwindCSS',
      'TMDB API',
    ],
  },
  {
    title: 'Amazon Clone',
    imgUrl: '/images/projects/amazon.svg',
    repo: 'https://github.com/teytattze/amazon-clone',
    link: 'https://amazon-clone-alpha-two.vercel.app',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'NextJS',
      'TailwindCSS',
      'Stripe',
      'Webhook',
      'Firebase',
    ],
  },
];
