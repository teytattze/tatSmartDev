import { css } from '@emotion/react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import * as React from 'react';
import cx from 'clsx';
import { Button } from 'src/components/button';
import { Divider } from 'src/components/divider';
import { IconButton } from 'src/components/icon-button';
import { Section } from 'src/components/section';
import {
  portfolioProjects,
  IPortfolioProject,
} from '../personal-portfolio.data';
import { FlipCard } from 'src/components/flip-card';

const projectsContainer = css`
  grid-template-columns: repeat(1, minmax(0, 16rem));
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 18rem));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 20rem));
  }
`;

export function PersonalPortfolio() {
  return (
    <Section>
      {portfolioProjects.length ? (
        <div
          className={cx('grid justify-center gap-8')}
          css={projectsContainer}
        >
          {portfolioProjects.map((project) => (
            <PortfolioProjectItem
              key={project.title}
              title={project.title}
              imgUrl={project.imgUrl}
              link={project.link}
              repo={project.repo}
              technologies={project.technologies}
            />
          ))}
        </div>
      ) : (
        <h2 className="typography-h6 typography-secondary">
          Sorry, there is no project available...
        </h2>
      )}
      <div></div>
    </Section>
  );
}

type PortfolioProjectItemProps = IPortfolioProject;

export function PortfolioProjectItem({
  title,
  imgUrl,
  technologies,
  link,
  repo,
}: PortfolioProjectItemProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleModal = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <FlipCard
        frontContent={
          <FlipCard.Front className="w-full h-full flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img width={128} height={128} src={imgUrl} alt={title} />
          </FlipCard.Front>
        }
        backContent={
          <FlipCard.Back className="w-full h-full bg-darkgrey flex flex-col justify-center items-center space-y-4">
            <h1 className="typography-h5">{title}</h1>
            <Button onClick={handleModal} variant="ghost">
              More Info
            </Button>
          </FlipCard.Back>
        }
        className="flex overflow-hidden relative justify-center justify-self-center items-center w-64 h-64 group md:w-72 md:h-72 lg:w-80 lg:h-80 bg-darkgrey rounded-md"
      />

      <PortfolioProjectModal
        open={open}
        handleModal={handleModal}
        title={title}
        imgUrl={imgUrl}
        link={link}
        technologies={technologies}
        repo={repo}
      />
    </>
  );
}

type PortfolioProjectModalProps = IPortfolioProject & {
  open: boolean;
  handleModal: () => void;
};

export function PortfolioProjectModal({
  title,
  imgUrl,
  link,
  repo,
  technologies,
  open,
  handleModal,
}: PortfolioProjectModalProps) {
  const cancelButtonRef = React.useRef(null);

  return (
    <Transition as={React.Fragment} show={open}>
      <Dialog
        as="div"
        static
        className="overflow-y-auto fixed inset-0 z-50"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={handleModal}
      >
        <div className="flex justify-center items-center w-full h-full px-8">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-darkgrey/50 backdrop-blur-xl" />
          </Transition.Child>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="overflow-hidden w-full max-w-screen-sm shadow-xl transform bg-darkgrey rounded-md">
              <div className="flex justify-between items-center p-4">
                <Dialog.Title as="h1" className="typography-h5">
                  {title}
                </Dialog.Title>
                <IconButton onClick={handleModal}>
                  <XIcon className="w-6 h-6" />
                </IconButton>
              </div>
              <Divider className="w-full h-[1px]" color="secondary" />
              <Dialog.Description as="div" className="p-12">
                <div className="flex flex-col items-center space-y-16">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img width={128} height={128} src={imgUrl} alt={title} />
                  <div className="space-y-6 w-full text-center">
                    <h2 className="underline typography-h5">Technologies</h2>
                    <ul className="grid grid-cols-1 gap-2 mx-auto text-center sm:grid-cols-3">
                      {technologies.map((tech) => (
                        <li
                          className="typography-caption typography-secondary"
                          key={tech}
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-4">
                    <Button
                      variant="outlined"
                      aria-label="Repository link"
                      render={(renderProps) => (
                        <a
                          href={repo}
                          target="_blank"
                          rel="noreferrer noopener"
                          {...renderProps}
                        />
                      )}
                    >
                      Code
                    </Button>
                    <Button
                      variant="contained"
                      aria-label="Website link"
                      render={(renderProps) => (
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer noopener"
                          {...renderProps}
                        />
                      )}
                    >
                      Visit Site
                    </Button>
                  </div>
                </div>
              </Dialog.Description>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
