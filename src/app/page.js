"use client";
import { useState } from "react";
import { Collapse } from "react-collapse";

import { IoIosAddCircleOutline } from "react-icons/io";

import Slider from "./components/modules/Slider";
import Form from "./components/modules/Form";


export default function Home() {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  
  
  const isOpenSubMenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };
  return (
    <main className="  bg-[#FCFCFC]  m-auto pb-10">
      <div className="py-14 md:py-0">
      <div className="lg:flex flex-row-reverse w-auto rounded-lg md:rounded-none lg:w-[1200px] pt-7 pb-14 md:pb-0   border border-[#ECECEC] md:border-none mx-7 md:m-auto  bg-white lg:bg-[#FCFCFC]">
        
        <div>
          <img src="/images/hero.svg" alt="Hero"></img>
        </div>
        <div className="mt-16 text-center lg:text-right px-5 md:px-0">
          <h2 className="font-[600] text-2xl">
            کمپین های بازاریابی و تبلیغاتی
          </h2>
          <p className="sm:w-[486px] font-[500] mt-5 text-lg text-[#303030] m-auto">
            آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره رایگان
            ما به شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین حالا قدم اول
            را بردارید!
          </p>
          <p className="font-[500] mt-5 text-base text-[#515151] leading-10">
            جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید
          </p>
          <button className="bg-[#7A3DE2] text-white py-2 px-4 rounded-lg mt-5 text-[18px] font-[500]">
            دریافت مشاوره
          </button>
        </div>
      </div>
      </div>

      <section className="!bg-[#F9F9F9] py-10 ">
        <Slider/>
        <div className="mt-48 text-center lg:w-[1200px] m-auto px-7 lg:px-0">
          <h1 className="text-xl font-[600]">فرم دریافت مشاوره</h1>
          <p className="font-[500] text-base text-[#303030] mt-5">
            برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید؟ فرم زیر را تکمیل
            کنید تا مشاوران ما به صورت کاملان رایگان شمارا راهنمایی کنند.
          </p>

          <Form/>
        </div>
      </section>

      <section className="bg-[#FCFCFC] my-10">
        <div className="lg:flex gap-5 lg:w-[1200px] border border-[#F9F9F9] md:bg-white m-auto rounded-lg h-[554px] py-20 px-10">
          <div className="text-center md:text-right">
            <h1 className="text-[32px] font-[600]">FAQ</h1>
            <h1 className="text-[24px] font-[600]">
              سوالات متداولی که از ما می‌پرسید
            </h1>
            <p className="hidden md-block text-base sm:w-[357px] font-[500] text-[#303030] leading-8 mt-3">
              سوالات متداولی که ممکن است نیاز شما نیز باشند در اینجا پاسخ داده
              شده اند:
            </p>
          </div>

          <div className="w-full mt-5 md:mt-0 ">
            <div
              onClick={() => isOpenSubMenu(1)}
              className="bg-white lg:bg-[#FCFCFC] border border-[#ECECEC] rounded-lg p-5 cursor-pointer"
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
              className="bg-white lg:bg-[#FCFCFC] border border-[#ECECEC] rounded-lg p-5 mt-5 "
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
              className="bg-white lg:bg-[#FCFCFC] border border-[#ECECEC] rounded-lg p-5 mt-5 "
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
              className="bg-white lg:bg-[#FCFCFC] border border-[#ECECEC] rounded-lg p-5 mt-5 "
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
              className="bg-white lg:bg-[#FCFCFC] border border-[#ECECEC] rounded-lg p-5 mt-5 "
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
