import { BuildingOffice2Icon } from "@heroicons/react/16/solid";

type Experience = {
  startedDate: string;
  finishedDate: string;
  companyName: string;
  activities: string[];
  role: string;
  city: string;
};

type EmploymentHistoryProps = {
  experience: Experience[];
};

export function EmploymentHistoryItem(props: Experience) {
  const {startedDate, finishedDate, companyName, activities, role, city} = props;

  const activitiesList = activities.map((activity, index) => <li className="text-xs list-disc" key={`${index}-${companyName}`}>{activity}</li>)

  return (
    <div className="flex flex-col space-y-2">
      <h4 className="text-sm">{role} at {companyName}, {city}</h4>
      <span className="text-xs text-gray-500">{startedDate} - {finishedDate}</span>
      <ul className="list-outside ml-10">
        {activitiesList}
      </ul>
    </div>
  );
}

export function EmploymentHistory(props: EmploymentHistoryProps) {
  const { experience } = props;

  const experienceList = experience.map((job, index) => <EmploymentHistoryItem {...job} key={index}/>);

  return (
    <>
      <div className="flex flex-row items-center space-x-2">
        <BuildingOffice2Icon className="h-4 w-4" />
        <span className="text-lg font-semibold">Employment history</span>
      </div>
      {experienceList}
    </>
  );
}
