type Skill = {
  name: string;
  average: number;
}

type SkillsProps = {
  skills: Skill[]
}

export function ProgressBar(props: Skill) {
  const { name, average} = props;

  const classnames: any = {
    0: '',
    25: 'w-1/4',
    50: 'w-1/2',
    75: 'w-3/4',
    100: 'w-full'
  }

  const classname: string = classnames[average];

  return (
    <div className="flex flex-col items-start space-y-2">
      <span className="text-sm text-gray-600">{name}</span>
      <div className="w-full bg-gray-200 h-1 ">
        <div className={`bg-blue-600 h-1 ${classname}`} />
      </div>
    </div>
  );

}

export function Skills(props: SkillsProps) {
  const { skills } = props;

  const skillsList = skills.map((skill, index) => skill.name && <ProgressBar key={`skill-${index}`} {...skill} />)

  return (
    <>
      <div className="flex flex-row items-center space-x-2">
        <span className="text-lg font-semibold">Skills</span>
      </div>
      {skillsList}
    </>
  );
}