import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
function Slider() {
  return (
    <div className="bg-gradient-to-b from-[#43217C] to-[#7A3DE2]  pt-4 h-[240px]">
          <div className="mt-5 xl:w-[1200px] m-auto">
            <h3 className="text-center text-white text-xl font-[500] ">
              موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها
            </h3>
            <div className="mt-7 mr-7 lg:mr-0">
              <Swiper
                slidesPerView={1.5}
                centeredSlides={true}
                spaceBetween={20}
                navigation={{
                    enabled : false
                }}
                loop={true}
                autoplay={{
                  delay: 2500,
                  pauseOnMouseEnter: true,
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
                breakpoints={{
                  200: {
                    slidesPerView: 1.5,
                    centeredSlides: false,
                    navigation: {
                        enabled: false
                      }
                  },
                  768: {
                    slidesPerView: 2,
                    centeredSlides: false,
                    navigation: {
                        enabled: true
                      }
                  },
                  1024: {
                    slidesPerView: 4,
                    centeredSlides: false
                  }
                }}
              >
              
                <SwiperSlide>
                  <div className="bg-white border border-[#E3E3E3] rounded-lg h-[226px] md:w-[282px] ">
                    <img
                      src="/images/slider/vector1.svg"
                      className=" m-auto justify-center text-center mt-5"
                    />
                    <h4 className="font-[600] text-xs text-center mt-7">
                      نگرانی از هزینه‌های تبلیغات
                    </h4>
                    <p className="text-center px-7 sm:w-[250px] text-xs font-[500] m-auto mt-3 leading-6">
                      برخی افراد ممکن است تصور کنند که تبلیغات هزینه‌بر است؛ اما
                      پرشین سایت با ارائه سود بالا، این هزینه‌ها را جبران
                      می‌کند.
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white border border-[#E3E3E3] rounded-lg h-[226px] md:w-[282px] ">
                    <img
                      src="/images/slider/vector2.svg"
                      className=" m-auto justify-center text-center mt-5"
                    />
                    <h4 className="font-[600] text-xs text-center mt-7">
                      ترس از پیچیدگی مدیریت
                    </h4>
                    <p className="text-center px-7 sm:w-[250px] text-xs font-[500] m-auto mt-3 leading-6">
                      مدیران ممکن است نگران دشواری مدیریت کمپین‌ها باشند، اما ما
                      تمامی فرآیندها را به ساده‌ترین شکل ممکن ارائه می‌دهیم.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white border border-[#E3E3E3] rounded-lg h-[226px] md:w-[282px] ">
                    <img
                      src="/images/slider/vector3.svg"
                      className=" m-auto justify-center text-center mt-5"
                    />
                    <h4 className="font-[600] text-xs text-center mt-7">
                      تصور زمان‌بر بودن نتایج
                    </h4>
                    <p className="text-center px-7 sm:w-[250px] text-xs font-[500] m-auto mt-3 leading-6">
                      برخی از افراد نگران این هستند که نتایج تبلیغات دیر به دست
                      آید، در حالی که پرشین سایت با سرعت بالا، شما را در دستیابی
                      به نتایج مطلوب یاری می‌کند.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white border border-[#E3E3E3] rounded-lg h-[226px] md:w-[282px] ">
                    <img
                      src="/images/slider/vector4.svg"
                      className=" m-auto justify-center text-center mt-5"
                    />
                    <h4 className="font-[600] text-xs text-center mt-7">
                      ناآگاهی از تأثیر تبلیغات
                    </h4>
                    <p className="text-center px-7 sm:w-[250px] text-xs font-[500] m-auto mt-3 leading-6">
                      بسیاری از افراد نمی‌دانند که کمپین‌های تبلیغاتی چگونه
                      می‌توانند منجر به افزایش فروش شوند؛ ما این تأثیرات را به
                      وضوح برای شما نمایش خواهیم داد.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white border border-[#E3E3E3] rounded-lg h-[226px] md:w-[282px] ">
                    <img
                      src="/images/slider/vector5.svg"
                      className=" m-auto justify-center text-center mt-5"
                    />
                    <h4 className="font-[600] text-xs text-center mt-7">
                      نبود استراتژی مشخص
                    </h4>
                    <p className="text-center px-7 sm:w-[250px] text-xs font-[500] m-auto mt-3 leading-6">
                      نگران هماهنگی با اهداف کسب‌وکار خود نباشید؛ پرشین سایت
                      برنامه‌ای متناسب با نیازهای شما طراحی خواهد کرد.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white border border-[#E3E3E3] rounded-lg h-[226px] md:w-[282px] ">
                    <img
                      src="/images/slider/vector6.svg"
                      className=" m-auto justify-center text-center mt-5"
                    />
                    <h4 className="font-[600] text-xs text-center mt-7">
                      عدم تخصص تیم در تبلیغات
                    </h4>
                    <p className="text-center px-7 sm:w-[250px] text-xs font-[500] m-auto mt-3 leading-6">
                      اگر تیم شما تجربه کافی در زمینه تبلیغات ندارد، ما تمامی
                      فرآیندها را به صورت حرفه‌ای و با کیفیت بالا انجام خواهیم
                      داد.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white border border-[#E3E3E3] rounded-lg h-[226px] md:w-[282px] ">
                    <img
                      src="/images/slider/vector7.svg"
                      className=" m-auto justify-center text-center mt-5"
                    />
                    <h4 className="font-[600] text-xs text-center mt-7">
                      دغدغه هدر رفتن بودجه
                    </h4>
                    <p className="text-center  px-7 sm:w-[250px] text-xs font-[500] m-auto mt-3 leading-6">
                      نگران هماهنگی با اهداف کسب‌وکار خود نباشید؛ پرشین سایت
                      برنامه‌ای متناسب با نیازهای شما طراحی خواهد کرد.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white border border-[#E3E3E3] rounded-lg h-[226px] md:w-[282px] ">
                    <img
                      src="/images/slider/vector8.svg"
                      className=" m-auto justify-center text-center mt-5"
                    />
                    <h4 className="font-[600] text-xs text-center mt-7">
                      نداشتن برنامه برای رشد
                    </h4>
                    <p className="text-center px-7  sm:w-[250px] text-xs font-[500] m-auto mt-3 leading-6">
                      اگر استراتژی مشخصی برای رشد ندارید، پرشین سایت نقشه راه
                      جامعی برای شما طراحی خواهد کرد.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

  )
}

export default Slider