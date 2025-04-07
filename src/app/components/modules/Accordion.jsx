"use client";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosAddCircleOutline } from "react-icons/io";

function Accordion() {
  const [subMenuIndex, setSubMenuIndex] = useState(null);

  const isOpenSubMenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };
  return (
    <section className="bg-[#FCFCFC] my-10">
      <div className="lg:flex gap-5 lg:w-[1200px] border border-[#F9F9F9] md:bg-white m-auto rounded-lg h-[554px] py-20 px-10">
        <div className="text-center md:text-right">
          <h1 className="text-[32px] font-[600]">FAQ</h1>
          <h1 className="text-[24px] font-[600]">
            سوالات متداولی که از ما می‌پرسید
          </h1>
          <p className="hidden md:block text-base sm:w-[357px] font-[500] text-[#303030] leading-8 mt-3">
            سوالات متداولی که ممکن است نیاز شما نیز باشند در اینجا پاسخ داده شده
            اند:
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
                <p>بله، با کمپین های هدفمند، مشتری ها سریع تر پیداتون میکنن</p>
              </div>
            </Collapse>
          </div>

          <div
            onClick={() => isOpenSubMenu(2)}
            className="bg-white lg:bg-[#FCFCFC] border border-[#ECECEC] rounded-lg p-5 mt-5 cursor-pointer"
          >
            <div className="flex justify-between">
              <p className="font-[600] text-base">
                آیا تبلیفات واقعا فروش من روافزایش می ده؟
              </p>
              <IoIosAddCircleOutline className="text-[24px]" />
            </div>

            <Collapse isOpened={subMenuIndex === 2 ? true : false}>
              <div className="mt-5">
                <p>بله، با کمپین های هدفمند، مشتری ها سریع تر پیداتون میکنن</p>
              </div>
            </Collapse>
          </div>
          <div
            onClick={() => isOpenSubMenu(3)}
            className="bg-white lg:bg-[#FCFCFC] border border-[#ECECEC] rounded-lg p-5 mt-5 cursor-pointer "
          >
            <div className="flex justify-between">
              <p className="font-[600] text-base">
                آیا تبلیفات واقعا فروش من روافزایش می ده؟
              </p>
              <IoIosAddCircleOutline className="text-[24px]" />
            </div>

            <Collapse isOpened={subMenuIndex === 3 ? true : false}>
              <div className="mt-5">
                <p>بله، با کمپین های هدفمند، مشتری ها سریع تر پیداتون میکنن</p>
              </div>
            </Collapse>
          </div>
          <div
            onClick={() => isOpenSubMenu(4)}
            className="bg-white lg:bg-[#FCFCFC] border border-[#ECECEC] rounded-lg p-5 mt-5 cursor-pointer"
          >
            <div className="flex justify-between">
              <p className="font-[600] text-base">
                آیا تبلیفات واقعا فروش من روافزایش می ده؟
              </p>
              <IoIosAddCircleOutline className="text-[24px]" />
            </div>

            <Collapse isOpened={subMenuIndex === 4 ? true : false}>
              <div className="mt-5">
                <p>بله، با کمپین های هدفمند، مشتری ها سریع تر پیداتون میکنن</p>
              </div>
            </Collapse>
          </div>
          <div
            onClick={() => isOpenSubMenu(5)}
            className="bg-white lg:bg-[#FCFCFC] border border-[#ECECEC] rounded-lg p-5 mt-5 cursor-pointer"
          >
            <div className="flex justify-between">
              <p className="font-[600] text-base">
                آیا تبلیفات واقعا فروش من روافزایش می ده؟
              </p>
              <IoIosAddCircleOutline className="text-[24px]" />
            </div>

            <Collapse isOpened={subMenuIndex === 5 ? true : false}>
              <div className="mt-5">
                <p>بله، با کمپین های هدفمند، مشتری ها سریع تر پیداتون میکنن</p>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accordion;
