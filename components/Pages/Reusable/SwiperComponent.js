import { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function SwiperComponent({ swiperCardBlock }) {
  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      spaceBetween={100}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="swiperDiv"
    >
      {swiperCardBlock}
    </Swiper>
  );
}
