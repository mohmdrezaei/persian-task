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
        <Slider/>
        <div className="mt-48 text-center w-[1200px] m-auto">
          <h1 className="text-xl font-[600]">فرم دریافت مشاوره</h1>
          <p className="font-[500] text-base text-[#303030] mt-5">
            برای ارتقای بیزینس خود به دنبال فرصتی ناب هستید؟ فرم زیر را تکمیل
            کنید تا مشاوران ما به صورت کاملان رایگان شمارا راهنمایی کنند.
          </p>

          <Form/>
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
