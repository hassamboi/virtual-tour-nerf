import { useState, useEffect } from "react";
import fast from "../../assets/imgs/fast.jpg";
import minar from "../../assets/imgs/minar.jpg";
import islamia from "../../assets/imgs/islamia.jpg";
import masjid from "../../assets/imgs/masjid.jpg";
import { Listbox } from "@headlessui/react";
import CheckIcon from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RenderOptions = ({ name, selected }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (name.avatar === "FAST") {
      setImage(fast);
    }
    if (name.avatar === "MINAR") {
      setImage(minar);
    }
    if (name.avatar === "ISLAMIA") {
      setImage(islamia);
    }
    if (name.avatar === "FAISAL") {
      setImage(masjid);
    }
  }, [image]);

  return (
    <div>
      {/* <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"> */}
      <Listbox.Option key={name.id} className={({ active }) => classNames(active ? "bg-indigo-600 text-white" : "text-gray-900", "relative cursor-default select-none py-2 pl-3 pr-9")} value={name}>
        {({ selected, active }) => (
          <>
            <div className="flex items-center">
              <img src={image} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
              <span className={classNames(selected ? "font-semibold" : "font-normal", "ml-3 block truncate")}>{name.lname}</span>
            </div>

            {selected ? (
              <span className={classNames(active ? "text-white" : "text-indigo-600", "absolute inset-y-0 right-0 flex items-center pr-4")}>
                <CheckIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            ) : null}
          </>
        )}
      </Listbox.Option>
      {/* </Listbox.Options> */}
    </div>
  );
};

export default RenderOptions;
