import { BuildingLibraryIcon, LanguageIcon, MapPinIcon } from "@heroicons/react/16/solid";

type LanguagesProps = {
  name: string;
  level: string;
};

export function Languages(props: LanguagesProps) {
  const { name, level } = props;
  return (
    <>
      <div className="flex flex-row items-center space-x-2">
        <LanguageIcon className="h-4 w-4" />
        <span className="text-lg font-semibold">Languages</span>
      </div>
      <div className="flex flex-row items-center space-x-3 ml-6">
        <span className="text-sm">{name}</span>
        <span className="text-xs text-gray-500 font-bold">{level}</span>
      </div>
    </>
  );
}
