import { MapPinIcon } from "@heroicons/react/16/solid";

type DetailsProps = {
  city: string;
  country: string;
  phone: string;
  email: string;
};

export function Details(props: DetailsProps) {
  const { city, phone, country, email } = props;
  return (
    <>
      <div className="flex flex-row items-center space-x-2">
        <MapPinIcon className="h-4 w-4" />
        <span className="text-lg font-semibold">Detalles</span>
      </div>
      <div className="flex flex-col items-start ml-6 text-wrap">
        <span className="text-sm">{city}</span>
        <span className="text-sm">{country}</span>
        <span className="text-sm">{phone}</span>
        <span className="text-sm">{email}</span>
      </div>
    </>
  );
}
