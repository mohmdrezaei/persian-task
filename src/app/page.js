"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";

import { IoIosAddCircleOutline } from "react-icons/io";

import { Collapse } from "react-collapse";
import { useState } from "react";

export default function Home() {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [selectedItems, setSelectedItems] = useState({
    seo: false,
    webDesign: false,
    Automation: false,
    Campaign : false,
    ContentProduction : false
  });

  const toggleItem = (itemName) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };
  
  const isOpenSubMenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };
  return (
    <main className="h-svh   ">
      <div className="flex w-[1200px] pt-7 m-auto ">
        <div className="mt-16">
          <h2 className="font-[600] text-2xl">
            کمپین های بازاریابی و تبلیغاتی
          </h2>
          <p className="w-[486px] font-[500] mt-5 text-lg text-[#303030]">
            آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره رایگان
            ما به شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین حالا قدم اول
            را بردارید!
          </p>
          <p className="font-[500] mt-5 text-base text-[#515151] leading-10">
            جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید
          </p>
          <button className="bg-[#7A3DE2] text-white py-2 px-3 rounded-lg mt-5">
            دریافت مشاوره
          </button>
        </div>
        <div>
          <img src="/images/hero.svg" alt="Hero"></img>
        </div>
      </div>

      <section className="!bg-[#F9F9F9] py-10 ">
        <div className="bg-gradient-to-b from-[#43217C] to-[#7A3DE2]  pt-4 h-[240px]">
          <div className="mt-5 w-[1200px] m-auto">
            <h3 className="text-center text-white text-xl font-[500] ">
              موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها
            </h3>
            <div className="mt-5">
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                navigation={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  pauseOnMouseEnter: true,
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="bg-white border border-[#E3E3E3] rounded-lg h-[226px] w-[282px] ">
                    <img
                      src="/images/slider/vector1.svg"
                      className=" m-auto justify-center text-center mt-5"
                    />
                    <h4 className="font-[600] text-xs text-center mt-7">
                      نگرانی از هزینه‌های تبلیغات
                    </h4>
                    <p className="text-center w-[250px] text-xs font-[500] m-auto mt-3 leading-6">
                      برخی افراد ممکن است تصور کنند که تبلیغات هزینه‌بر است؛ اما
                      پرشین سایت با ارائه سود بالا، این هزینه‌ها را جبران
                      می‌کند.
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-white border border-[#E3E3E3] rounded-lg h-[226px] w-[282px] ">
                    <img
                      src="/images/slider/vector2.svg"
                      className=" m-auto justify-center text-center mt-5"
                    />
                    <h4 className="font-[600] text-xs text-center mt-7">
                      ترس از پیچیدگی مدیریت
                    </h4>
                    <p className="text-center w-[250px] text-xs font-[500] m-auto mt-3 leading-6">
                      مدیران ممکن است نگران دشواری مدیریت کمپین‌ها باشند، اما ما
                      تمامی فرآیندها را به ساده‌ترین شکل ممکن ارائه می‌دهیم.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white border border-[#E3E3E3] rounded-lg h-[226px] w-[282px] ">
                    <img
                      src="/images/slider/vector3.svg"
                      className=" m-auto justify-center text-center mt-5"
                    />
                    <h4 className="font-[600] text-xs text-center mt-7">
                      تصور زمان‌بر بودن نتایج
                    </h4>
                    <p className="text-center w-[250px] text-xs font-[500] m-auto mt-3 leading-6">
                      برخی از افراد نگران این هستند که نتایج تبلیغات دیر به دست
                      آید، در حالی که پرشین سایت با سرعت بالا، شما را در دستیابی
                      به نتایج مطلوب یاری می‌کند.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white border border-[#E3E3E3] rounded-lg h-[226px] w-[282px] ">
                    <img
                      src="/images/slider/vector4.svg"
                      className=" m-auto justify-center text-center mt-5"
                    />
                    <h4 className="font-[600] text-xs text-center mt-7">
                      ناآگاهی از تأثیر تبلیغات
                    </h4>
                    <p className="text-center w-[250px] text-xs font-[500] m-auto mt-3 leading-6">
                      بسیاری از افراد نمی‌دانند که کمپین‌های تبلیغاتی چگونه
                      می‌توانند منجر به افزایش فروش شوند؛ ما این تأثیرات را به
                      وضوح برای شما نمایش خواهیم داد.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white border border-[#E3E3E3] rounded-lg h-[226px] w-[282px] ">
                    <img
                      src="/images/slider/vector5.svg"
                      className=" m-auto justify-center text-center mt-5"
                    />
                    <h4 className="font-[600] text-xs text-center mt-7">
                      نبود استراتژی مشخص
                    </h4>
                    <p className="text-center w-[250px] text-xs font-[500] m-auto mt-3 leading-6">
                      نگران هماهنگی با اهداف کسب‌وکار خود نباشید؛ پرشین سایت
                      برنامه‌ای متناسب با نیازهای شما طراحی خواهد کرد.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white border border-[#E3E3E3] rounded-lg h-[226px] w-[282px] ">
                    <img
                      src="/images/slider/vector6.svg"
                      className=" m-auto justify-center text-center mt-5"
                    />
                    <h4 className="font-[600] text-xs text-center mt-7">
                      عدم تخصص تیم در تبلیغات
                    </h4>
                    <p className="text-center w-[250px] text-xs font-[500] m-auto mt-3 leading-6">
                      اگر تیم شما تجربه کافی در زمینه تبلیغات ندارد، ما تمامی
                      فرآیندها را به صورت حرفه‌ای و با کیفیت بالا انجام خواهیم
                      داد.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white border border-[#E3E3E3] rounded-lg h-[226px] w-[282px] ">
                    <img
                      src="/images/slider/vector7.svg"
                      className=" m-auto justify-center text-center mt-5"
                    />
                    <h4 className="font-[600] text-xs text-center mt-7">
                      دغدغه هدر رفتن بودجه
                    </h4>
                    <p className="text-center w-[250px] text-xs font-[500] m-auto mt-3 leading-6">
                      نگران هماهنگی با اهداف کسب‌وکار خود نباشید؛ پرشین سایت
                      برنامه‌ای متناسب با نیازهای شما طراحی خواهد کرد.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="bg-white border border-[#E3E3E3] rounded-lg h-[226px] w-[282px] ">
                    <img
                      src="/images/slider/vector8.svg"
                      className=" m-auto justify-center text-center mt-5"
                    />
                    <h4 className="font-[600] text-xs text-center mt-7">
                      نداشتن برنامه برای رشد
                    </h4>
                    <p className="text-center w-[250px] text-xs font-[500] m-auto mt-3 leading-6">
                      اگر استراتژی مشخصی برای رشد ندارید، پرشین سایت نقشه راه
                      جامعی برای شما طراحی خواهد کرد.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="mt-48 text-center w-[1200px] m-auto">
          <h1 className="text-xl font-[600]">فرم دریافت مشاوره</h1>
          <p className="font-[500] text-base text-[#303030] mt-5">
            برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید؟ فرم زیر را تکمیل
            کنید تا مشاوران ما به صورت کاملان رایگان شمارا راهنمایی کنند.
          </p>

          <div className="bg-white border border-[#E3E3E3] rounded-lg h-[606px] p-7 text-right mt-5">
            <div className="grid grid-cols-3 gap-7 rounded-2xl">
              <div>
                <p>نام و نام خانوادگی خود را وارد کنید</p>
                <input
                  type="text"
                  className="border border-[#E3E3E3] bg-[#FCFCFC] w-full rounded-2xl px-8 py-2 placeholder:text-[#8A8A8A] placeholder:font-[500] mt-4"
                  placeholder="نام و نام خانوادگی"
                />
              </div>
              <div>
                <p>آدرس ایمیل خود را وارد کنید</p>
                <input
                  type="text"
                  className="border border-[#E3E3E3] bg-[#FCFCFC] w-full rounded-2xl px-8 py-2 placeholder:text-[#8A8A8A] placeholder:font-[500] mt-4"
                  placeholder="مثلا email@mail.com"
                />
              </div>
              <div>
                <p>شماره تماس خود را وارد کنید</p>
                <input
                  type="text"
                  className="border border-[#E3E3E3] bg-[#FCFCFC] w-full rounded-2xl px-8 py-2 placeholder:text-[#8A8A8A] placeholder:font-[500] mt-4"
                  placeholder="مثلا091212345678"
                />
              </div>
            </div>

            <div className="mt-7">
              <p>نوع سرویس (های) مورد نظر را انتخاب کنید</p>
              <div className="grid grid-cols-5 mt-5 gap-7">
              <div
        className={`flex gap-2 w-full items-center bg-[#FCFCFC] border ${
          selectedItems.seo ? "border-[#7A3DE2]" : "border-[#E3E3E3]"
        }  px-4 rounded-2xl cursor-pointer`}
        onClick={() => toggleItem('seo')}
      >
        <input
          type="checkbox"
          checked={selectedItems.seo}
          readOnly
          className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-[#7A3DE2] checked:border-transparent focus:outline-none focus:ring-blue-500"
        />
        <label className="cursor-pointer text-xs font-[600]">خدمات سئو</label>
      </div>

      <div
        className={`flex gap-2 w-full items-center bg-[#FCFCFC] border ${
          selectedItems.webDesign ? "border-[#7A3DE2]" : "border-[#E3E3E3]"
        } py-2 px-4 rounded-2xl cursor-pointer`}
        onClick={() => toggleItem('webDesign')}
      >
        <input
          type="checkbox"
          checked={selectedItems.webDesign}
          readOnly
          className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-[#7A3DE2] checked:border-transparent focus:outline-none focus:ring-blue-500"
        />
        <label className="cursor-pointer text-xs font-[600]">طراحی وب سایت</label>
      </div>
      <div
        className={`flex gap-2 w-full items-center bg-[#FCFCFC] border ${
          selectedItems.Automation ? "border-[#7A3DE2]" : "border-[#E3E3E3]"
        } py-2 px-4 rounded-2xl cursor-pointer`}
        onClick={() => toggleItem('Automation')}
      >
        <input
          type="checkbox"
          checked={selectedItems.Automation}
          readOnly
          className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-[#7A3DE2] checked:border-transparent focus:outline-none focus:ring-blue-500"
        />
        <label className="cursor-pointer text-xs font-[600]">اتوماسیون و بازاریابی </label>
      </div>
                
      <div
        className={`flex gap-2 w-full items-center bg-[#FCFCFC] border ${
          selectedItems.Campaign ? "border-[#7A3DE2]" : "border-[#E3E3E3]"
        } py-2 px-4 rounded-2xl cursor-pointer`}
        onClick={() => toggleItem('Campaign')}
      >
        <input
          type="checkbox"
          checked={selectedItems.Campaign}
          readOnly
          className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-[#7A3DE2] checked:border-transparent focus:outline-none focus:ring-blue-500"
        />
        <label className="cursor-pointer text-xs font-[600]">کمپین‌های بازاریابی و تبلیغاتی</label>
      </div>
      <div
        className={`flex gap-2 w-full items-center bg-[#FCFCFC] border ${
          selectedItems.ContentProduction ? "border-[#7A3DE2]" : "border-[#E3E3E3]"
        } py-2 px-4 rounded-2xl cursor-pointer`}
        onClick={() => toggleItem('ContentProduction')}
      >
        <input
          type="checkbox"
          checked={selectedItems.ContentProduction}
          readOnly
          className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-[#7A3DE2] checked:border-transparent focus:outline-none focus:ring-blue-500"
        />
        <label className="cursor-pointer text-xs font-[600]">خدمات تولید محتوا </label>
      </div>
                
              </div>
            </div>
            <div className="mt-10">
              <p>در مورد درخواست خود برای ما بنویسید.</p>
              <textarea
                className="border border-[#E3E3E3] bg-[#FCFCFC] w-full rounded-2xl px-8 py-2 placeholder:text-[#8A8A8A] placeholder:font-[500] h-[171px] mt-5"
                placeholder="توضیحات (اختیاری)"
              />
            </div>

            <div className=" flex justify-center mt-5 ">
              <button className=" bg-[#303030] text-white w-[386px]  h-[40px] text-center m-auto rounded-2xl font-[600]">
                ثبت درخواست
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCFCFC] py-10">
        <div className="flex gap-5 w-[1200px] border border-[#F9F9F9] bg-white m-auto rounded-lg h-[554px] py-20 px-10">
          <div>
            <h1 className="text-[32px] font-[600]">FAQ</h1>
            <h1 className="text-[24px] font-[600]">
              سوالات متداولی که از ما می‌پرسید
            </h1>
            <p className="text-base w-[357px] font-[500] text-[#303030] leading-8 mt-3">
              سوالات متداولی که ممکن است نیاز شما نیز باشند در اینجا پاسخ داده
              شده اند:
            </p>
          </div>

          <div className="w-full ">
            <div
              onClick={() => isOpenSubMenu(1)}
              className="bg-[#FCFCFC] border border-[#ECECEC] rounded-lg p-5 cursor-pointer"
            >
              <div className="flex justify-between">
                <p className="font-[600] text-base">
                  آیا تبلیفات واقعا فروش من روافزایش می ده؟
                </p>
                <IoIosAddCircleOutline className="text-[24px]" />
              </div>

              <Collapse isOpened={subMenuIndex === 1 ? true : false}>
                <div className="mt-5">
                  <p>
                    بله، با کمپین های هدفمند، مشتری ها سریع تر پیداتون میکنن
                  </p>
                </div>
              </Collapse>
            </div>

            <div
              onClick={() => isOpenSubMenu(2)}
              className="bg-[#FCFCFC] border border-[#ECECEC] rounded-lg p-5 mt-5 "
            >
              <div className="flex justify-between">
                <p className="font-[600] text-base">
                  آیا تبلیفات واقعا فروش من روافزایش می ده؟
                </p>
                <IoIosAddCircleOutline className="text-[24px]" />
              </div>

              <Collapse isOpened={subMenuIndex === 2 ? true : false}>
                <div className="mt-5">
                  <p>
                    بله، با کمپین های هدفمند، مشتری ها سریع تر پیداتون میکنن
                  </p>
                </div>
              </Collapse>
            </div>
            <div
              onClick={() => isOpenSubMenu(3)}
              className="bg-[#FCFCFC] border border-[#ECECEC] rounded-lg p-5 mt-5 "
            >
              <div className="flex justify-between">
                <p className="font-[600] text-base">
                  آیا تبلیفات واقعا فروش من روافزایش می ده؟
                </p>
                <IoIosAddCircleOutline className="text-[24px]" />
              </div>

              <Collapse isOpened={subMenuIndex === 3 ? true : false}>
                <div className="mt-5">
                  <p>
                    بله، با کمپین های هدفمند، مشتری ها سریع تر پیداتون میکنن
                  </p>
                </div>
              </Collapse>
            </div>
            <div
              onClick={() => isOpenSubMenu(4)}
              className="bg-[#FCFCFC] border border-[#ECECEC] rounded-lg p-5 mt-5 "
            >
              <div className="flex justify-between">
                <p className="font-[600] text-base">
                  آیا تبلیفات واقعا فروش من روافزایش می ده؟
                </p>
                <IoIosAddCircleOutline className="text-[24px]" />
              </div>

              <Collapse isOpened={subMenuIndex === 4 ? true : false}>
                <div className="mt-5">
                  <p>
                    بله، با کمپین های هدفمند، مشتری ها سریع تر پیداتون میکنن
                  </p>
                </div>
              </Collapse>
            </div>
            <div
              onClick={() => isOpenSubMenu(5)}
              className="bg-[#FCFCFC] border border-[#ECECEC] rounded-lg p-5 mt-5 "
            >
              <div className="flex justify-between">
                <p className="font-[600] text-base">
                  آیا تبلیفات واقعا فروش من روافزایش می ده؟
                </p>
                <IoIosAddCircleOutline className="text-[24px]" />
              </div>

              <Collapse isOpened={subMenuIndex === 5 ? true : false}>
                <div className="mt-5">
                  <p>
                    بله، با کمپین های هدفمند، مشتری ها سریع تر پیداتون میکنن
                  </p>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
