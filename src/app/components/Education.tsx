import { BuildingLibraryIcon } from "@heroicons/react/16/solid";

type EducationProps = {
  name: string;
  label: string;
  degree: string;
  city: string;
};

export function Education(props: EducationProps) {
  const { name, label, degree } = props;
  return (
    <>
      <div className="flex flex-row items-center space-x-2">
        <BuildingLibraryIcon className="h-4 w-4" />
        <span className="text-lg font-semibold">Formación</span>
      </div>
      <div className="flex flex-col items-start ml-6">
        <span className="text-sm">{name} - {degree}</span>
        <span className="text-xs text-gray-500">{label}</span>
      </div>
    </>
  );
}
