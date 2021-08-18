import { Divider } from 'src/components/divider';
import { ProgressBar } from 'src/components/progress-bar';
import { Section } from 'src/components/section';
import {
  resumeEducationExperiences,
  resumeWorkingExperiences,
  IResumeExperience,
  IResumeSkill,
  resumeSkills,
} from '../personal-resume.data';

export function PersonalResume() {
  return (
    <>
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ExperiencesSection
            title="Educations"
            experiences={resumeEducationExperiences}
          />
          <ExperiencesSection
            title="Working Experiences"
            experiences={resumeWorkingExperiences}
          />
        </div>
      </Section>
      <Section title="My Skills" subtitle="My level of knowledge in some tools">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {resumeSkills.map((skill) => (
            <SkillItem
              key={skill.title}
              title={skill.title}
              progress={skill.progress}
            />
          ))}
        </div>
      </Section>
    </>
  );
}

type ExperiencesSectionProps = {
  title: string;
  experiences: IResumeExperience[];
};

function ExperiencesSection({ title, experiences }: ExperiencesSectionProps) {
  return (
    <div>
      <h1 className="mb-4 typography-h4 leading-title">{title}</h1>
      <div className="space-y-8">
        {experiences.map((experience) => (
          <ExprienceItem
            key={experience.title}
            title={experience.title}
            location={experience.location}
            duration={experience.duration}
            desc={experience.desc}
          />
        ))}
      </div>
    </div>
  );
}

type ExperienceItemProps = IResumeExperience;

function ExprienceItem({
  title,
  location,
  duration,
  desc,
}: ExperienceItemProps) {
  return (
    <div className="p-8 border-l-4 bg-darkgrey border-primary rounded-md">
      <h1 className="typography-h5 leading-title">{title}</h1>
      <div className="mt-2">
        <h2 className="inline-block typography-caption typography-secondary leading-title mr-2">
          {location}
        </h2>
        <h6 className="inline-block typography-caption typography-secondary leading-title">
          {duration}
        </h6>
      </div>
      <Divider className="w-12 h-0.5 my-4" color="primary" />
      <p className="typography-small typography-secondary leading-paragraph">
        {desc}
      </p>
    </div>
  );
}

type SkillItemProps = IResumeSkill;

function SkillItem({ title, progress }: SkillItemProps) {
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between" style={{ width: `${progress}%` }}>
        <h1 className="typography-p typography-secondary leading-desc">
          {title}
        </h1>
        <p className="typography-p typography-secondary leading-desc">
          {progress}%
        </p>
      </div>
      <ProgressBar completed={progress} />
    </div>
  );
}
