import { UserIcon } from "@heroicons/react/16/solid";

type CoverLetterProps = {
  children: string;
};

export function CoverLetter(props: CoverLetterProps) {
  const { children } = props;
  return (
    <>
      <div className="flex flex-row items-center space-x-2">
        <UserIcon className="h-4 w-4" />
        <span className="text-lg font-semibold">Profile</span>
      </div>
      <p className="text-xs w-2/3">{children}</p>
    </>
  );
}
