"use client"
import Slider from "./components/modules/Slider";
import Form from "./components/modules/Form";
import Accordion from "./components/modules/Accordion";


export default function Home() {
 
  return (
    <main className="  bg-[#FCFCFC]  m-auto pb-10">
      <div className="py-14 md:py-0">
      <div className="lg:flex flex-row-reverse w-auto rounded-lg md:rounded-none xl:w-[1200px] pt-7 pb-14 md:pb-0   border border-[#ECECEC] md:border-none mx-7 md:m-auto  bg-white lg:bg-[#FCFCFC]">
        
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

      <Accordion />
    </main>
  );
}
