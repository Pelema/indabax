import { pricedeta } from "@/app/api/data";
import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";

const sponsors = [
  {
    title: "mtc",
    imgUrl: "/images/hero/mtc_logo.jpeg",
  },
  {
    title: "indaba",
    imgUrl: "/images/hero/dl_indaba_logo.png",
  },
  {
    title: "deep learning indaba",
    imgUrl: "",
  },
  {
    title: "unam",
    imgUrl: "/images/hero/unam_logo_white.png",
  },
];

const CardSlider = () => {
  return (
    <div className="mt-16 flex justify-center">
      {sponsors.map((item, index) => (
        <div key={index} className="pr-6">
          <div className="bg-dark_grey bg-opacity-80 rounded-lg overflow-hidden w-[200px]">
            <img
              src={`${getImagePrefix()}${item.imgUrl}`}
              alt="icon"
              className="h-full aspect-video object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
