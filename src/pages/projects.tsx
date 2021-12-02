import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { useRef, useState, Fragment } from 'react';
import { NextComponentType, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { PageLayout } from '../layouts/page.layout';
import { Button } from '../components/button';
import { IconButton } from '../components/icon-button';
import { Divider } from '../components/divider';
import { IProject, projects } from '../data/projects.data';
import { Container } from '../components/container';
import { SectionLayout } from '../layouts/section.layout';
import { FlipCard } from 'src/components/flip-card';

const PortfolioPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title="tatSmartDev - Portfolio"
        description="A page which showcases all of my personal projects."
      />
      <PageLayout title="Portfolio" subtitle="Showcasing some of my best work">
        <Container>
          <SectionLayout>
            {projects.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-0 lg:grid-cols-3 justify-center gap-8">
                {projects.map((project) => (
                  <ProjectItem key={project.title} project={project} />
                ))}
              </div>
            ) : (
              <h2 className="typography-h6 typography-secondary">
                Sorry, there is no project available...
              </h2>
            )}
          </SectionLayout>
        </Container>
      </PageLayout>
    </>
  );
};

export const ProjectItem: NextComponentType<{}, {}, { project: IProject }> = ({
  project,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleModal = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="square bg-darkgray text-center">
        <FlipCard>
          <FlipCard.Front>
            <div className="w-full h-full flex flex-col items-center justify-center bg-darkgray p-12 xs:p-20">
              <div className="w-full relative">
                <Image
                  layout="intrinsic"
                  src={project.imgUrl}
                  alt={project.title}
                  width={200}
                  height={200}
                />
              </div>
              <div className="mt-4">
              <p className="typography-p typography-secondary">{project.title}</p>
              </div>
            </div>
          </FlipCard.Front>
          <FlipCard.Back>
            <div className="w-full h-full flex flex-col items-center justify-center space-y-4 bg-darkgray">
              <h1 className="typography-h5">{project.title}</h1>
              <Button variant="ghost" onClick={() => handleModal()}>
                More Info
              </Button>
            </div>
          </FlipCard.Back>
        </FlipCard>
      </div>
      <ProjectModal open={open} handleModal={handleModal} project={project} />
    </>
  );
};

type ProjectModalProps = {
  open: boolean;
  handleModal: () => void;
  project: IProject;
};

export const ProjectModal: NextComponentType<{}, {}, ProjectModalProps> = ({
  open,
  handleModal,
  project,
}) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition as={Fragment} show={open}>
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
            as={Fragment}
            enter="duration-200 ease-in-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-500 ease-in-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-darkgray/50 backdrop-blur-xl" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="duration-300 ease-in-out"
            enterFrom="opacity-0 -translate-y-12"
            enterTo="opacity-100 translate-y-0"
            leave="duration-300 ease-in-out"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-12"
          >
            <div className="overflow-hidden w-full max-w-screen-sm shadow-xl transform bg-darkgray rounded">
              <div className="flex justify-between items-center p-4">
                <Dialog.Title as="h1" className="typography-h5">
                  {project.title}
                </Dialog.Title>
                <IconButton onClick={handleModal}>
                  <XIcon className="w-6 h-6" />
                </IconButton>
              </div>
              <Divider className="w-full h-[1px]" color="secondary" />
              <Dialog.Description as="div" className="p-12">
                <div className="flex flex-col items-center space-y-16">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    width={128}
                    height={128}
                    src={project.imgUrl}
                    alt={project.title}
                  />
                  <div className="space-y-6 w-full text-center">
                    <h2 className="underline typography-h5">Technologies</h2>
                    <ul className="grid grid-cols-1 gap-2 mx-auto text-center sm:grid-cols-3">
                      {project.technologies.map((tech) => (
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
                          href={project.repo}
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
                          href={project.link}
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
};

export default PortfolioPage;
