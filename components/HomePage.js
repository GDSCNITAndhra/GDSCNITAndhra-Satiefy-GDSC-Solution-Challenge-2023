import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import intro1 from "../assets/image1.png";
import intro2 from "../assets/image2.png";
import intro3 from "../assets/image3.png";
import phone from "../assets/phone.svg";
import delivery from "../assets/delivery-truck.svg";
import badge from "../assets/badge.svg";
import locate from "../assets/location.svg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";

const Card = ({ img, title, content, email }) => {
  return (
    <div className="w-[17.5vw] min-h-[42vh] drop-shadow-lg bg-slate-100 text-center">
      <Image src={img} alt="img" className="w-[20%] mx-auto py-6" />
      <p className="text-2xl my-3 font-normal">{title}</p>
      <p className="px-8 text-sm pb-2">{content}</p>
      <Link href={`mailto:${email}`} className="text-[#1c7a27]">
        {email}
      </Link>
    </div>
  );
};

function HomePage() {
  const images = [intro3, intro1, intro2];
  return (
    <div id="#home" className="min-h-screen w-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {images.map((ele, ind) => {
          return (
            <SwiperSlide key={ind}>
              <Image
                priority
                className="h-screen object-cover"
                src={ele}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="min-h-[70vh] w-screen">
        <div className="text-3xl px-[20vw] text-center pt-10 pb-5">
          At Satiefy, we design interventions to{" "}
          <span className="text-[#167828]">reduce hunger</span> among
          underserved communities in India.
        </div>
        <div className="text-2xl text-center text-[#4a4a4a]">
          We work to ensure that no one sleeps hungry.
        </div>
        <div className="flex flex-row justify-between px-[10vw] my-20">
          <Card
            img={phone}
            title={"Get in touch"}
            email={"satiefy.donations@gmail.com"}
            content={
              "If you are looking forward to donate left over food. Do contact us at :"
            }
          />
          <Card
            img={delivery}
            title={"Deliver"}
            content={
              "We provide with transportation to ease the process of delivery of food."
            }
          />
          <Card
            img={badge}
            title={"Quality check"}
            content={
              "The Food to be delivered will be cross checked with our Food Standard Guidelines."
            }
          />
          <Card
            img={locate}
            title={"Locate"}
            content={"Find the nearest NGO to donate the excess of food to."}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
