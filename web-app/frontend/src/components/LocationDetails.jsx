import { useEffect, useState, useRef } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import { useParams } from "react-router-dom";
import FAST from "../assets/flythroughs/fast.mp4";
import MINAR from "../assets/flythroughs/minar.mp4";
import MASJID from "../assets/flythroughs/masjid.mp4";
import ISLAMIA from "../assets/flythroughs/islamia.mp4";

import ShowImages from "./ShowImages";
import Panorama from "./Panorama";
const API_URL = "/api/details/";

export default function LocationDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState(null);
  const [image, setImage] = useState(null);
  const url = useParams();
  const new_url = API_URL + url.id;

  useEffect(() => {
    const fetchlocationDetails = async () => {
      try {
        const response = await axios.get(new_url);
        const detailsData = response.data;
        setDetails(detailsData);
        setImage(details?.flythrough);
      } catch (error) {
        console.log(error);
      }
    };

    fetchlocationDetails();
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [new_url, useRef]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="bg-white ">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{details?.name}</h2>
                <p className="mt-4 text-gray-500">{details?.desc}</p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-lg text-gray-900">Type</dt>
                    <dd className="mt-2 text-sm text-gray-500">{details?.type}</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-lg text-gray-900">Best time to visit</dt>
                    <dd className="mt-2 text-sm text-gray-500">{details?.btime}</dd>
                  </div>{" "}
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-lg text-gray-900">Established</dt>
                    <dd className="mt-2 text-sm text-gray-500">{details?.established}</dd>
                  </div>{" "}
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-lg text-gray-900">Recognized for</dt>
                    <dd className="mt-2 text-sm text-gray-500">{details?.recognized}</dd>
                  </div>{" "}
                </dl>
              </div>

              <div className=" grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">{details && <ShowImages imageName={details?.flythrough.toLowerCase()} />}</div>
            </div>
            <div className="text-center mt-[5rem]">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-5">AI Generated Model using NeRF</h2>
            </div>
            {/* <div className="text-center mt-[5rem]">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">AI Rendered Model</h2>
            </div> */}
            <div className="grid place-items-center mb-[5rem]"> {details && <video src={require(`../assets/flythroughs/${details.flythrough.toLowerCase()}.mp4`)} autoPlay controls loop muted />}</div>
            {/* <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-[5rem]">Map View</h2> */}
            <div className="grid place-items-center mt-[5rem] mb-[5rem]">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-5">Google Map View</h2>

              {details?.flythrough === "MINAR" ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.5086510220963!2d74.30691007627!3d31.592519343572715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c82d18c2ced%3A0x1aa4688a984fdde1!2sMinar-e-Pakistan!5e0!3m2!1sen!2sil!4v1684257661831!5m2!1sen!2sil"
                  width="1280"
                  height="720"
                  styles="border:0;"
                  allowFollowScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : null}

              {details?.flythrough === "ISLAMIA" ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7186224010084!2d71.47581152634041!3d33.99976047049868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d910d324a9cf0d%3A0xf2df847901c6501!2sIslamia%20College%20University%20Peshawar!5e0!3m2!1sen!2sil!4v1684258018665!5m2!1sen!2sil"
                  width="1280"
                  height="720"
                  styles="border:0;"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : null}

              {details?.flythrough === "FAST" ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.4758832102048!2d71.4250802763398!3d33.980308421524214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9105fb03d7d69%3A0xa6e5687326894f74!2sNational%20University%20of%20Computer%20%26%20Emerging%20Sciences%20-%20FAST%20Peshawar%20Campus!5e0!3m2!1sen!2sil!4v1684258865663!5m2!1sen!2sil"
                  width="1280"
                  height="720"
                  styles="border:0;"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : null}

              {details?.flythrough === "MASJID" ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.2046340810352!2d73.03457867633226!3d33.72952423470087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbefce01e6917%3A0x3e66e0de3e2598c0!2sShah%20Faisal%20Masjid!5e0!3m2!1sen!2sil!4v1684258957325!5m2!1sen!2sil"
                  width="1280"
                  height="720"
                  styles="border:0;"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : null}
            </div>

            <div className="grid place-items-center mt-[5rem]">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-5">Interactive View</h2>

              <div className="bg-white w-[100%] h-[80px] absolute bottom-[0px]"></div>
              {details?.flythrough === "ISLAMIA" ? (
                <iframe
                  src="https://captures.lumalabs.ai/embed/revel-amazed-a-774585?mode=lf&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false"
                  width="1280"
                  height="720"
                  frameborder="0"
                  styles="border: none;"
                ></iframe>
              ) : null}

              {details?.flythrough === "MINAR" ? (
                <iframe
                  width="1280"
                  src="https://captures.lumalabs.ai/embed/problem-solver-ecstasies-0d-241982?mode=lf&background=%23ffffff&color=%23000000&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false"
                  height="720"
                  frameborder="0"
                  styles="border: none;"
                ></iframe>
              ) : null}

              {details?.flythrough === "FAST" ? (
                <iframe
                  width="1280"
                  src="https://captures.lumalabs.ai/embed/better-loved-yq-237867?mode=lf&background=%23000000&color=%23FFFFFF&showTitle=false&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false"
                  height="720"
                  frameborder="0"
                  styles="border: none;"
                ></iframe>
              ) : null}
              {details?.flythrough === "MASJID" ? (
                <iframe
                  width="1280"
                  src="https://captures.lumalabs.ai/embed/paradise-dashing-cd-777400?mode=lf&background=%23000000&color=%23FFFFFF&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false"
                  height="720"
                  frameborder="0"
                  styles="border: none;"
                ></iframe>
              ) : null}
            </div>

            {/* <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[52.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
