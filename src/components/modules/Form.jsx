import { useState } from 'react';
import { PiUserCircleLight, PiPhoneLight } from 'react-icons/pi';
import { IoMailOutline } from 'react-icons/io5';
import validateForm from '@/utils/validation';

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        description: '',
        services: {
          seo: false,
          webDesign: false,
          Automation: false,
          Campaign: false,
          ContentProduction: false
        }
      });
      const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        phone: '',
        services: ''
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
        
        if (errors[name]) {
          setErrors({
            ...errors,
            [name]: ''
          });
        }
      };
      const toggleService = (serviceName) => {
        const updatedServices = {
          ...formData.services,
          [serviceName]: !formData.services[serviceName]
        };
        setFormData({
          ...formData,
          services: updatedServices
        });
        
        if (Object.values(updatedServices).some(val => val) && errors.services) {
          setErrors({
            ...errors,
            services: ''
          });
        }
      };
    
      
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const { valid, errors: validationErrors } = validateForm(formData);
        
        if (!valid) {
          setErrors(validationErrors);
          return;
        }
      
        try {
          await new Promise(resolve => setTimeout(resolve, 2000));
          alert('فرم با موفقیت ارسال شد');
          console.log('داده‌های فرم:', formData);

          setFormData({
            fullName: '',
            email: '',
            phone: '',
            description: '',
            services: {
              seo: false,
              webDesign: false,
              Automation: false,
              Campaign: false,
              ContentProduction: false
            }
          });
          setErrors({
            fullName: '',
            email: '',
            phone: '',
            services: ''
          });
          
        } catch (error) {
          console.error('خطا در ارسال فرم:', error);
          alert('خطا در ارسال فرم');
        }
      };
    

  return (
    <div className="bg-white border border-[#E3E3E3] rounded-lg lg:h-[606px] p-7 text-right mt-5">
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 rounded-2xl">
          <div className="relative">
            <p className="text-sm font-[600]">
              نام و نام خانوادگی خود را وارد کنید
            </p>
            <PiUserCircleLight className="absolute top-[44px] right-3 z-20 text-2xl text-[#E13333]" />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={`border ${
                errors.fullName ? 'border-red-500' : 'border-[#E3E3E3]'
              } bg-[#FCFCFC] w-full rounded-2xl px-10 py-2 placeholder:text-[#8A8A8A] placeholder:font-[500] mt-4 relative`}
              placeholder="نام و نام خانوادگی"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-2 mx-3">{errors.fullName}</p>
            )}
          </div>
          <div className="relative">
            <p className="text-sm font-[600]">آدرس ایمیل خود را وارد کنید</p>
            <IoMailOutline className="absolute top-[44px] right-3 z-20 text-2xl text-[#E13333]" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`border ${
                errors.email ? 'border-red-500' : 'border-[#E3E3E3]'
              } bg-[#FCFCFC] w-full rounded-2xl px-10 py-2 placeholder:text-[#8A8A8A] placeholder:font-[500] mt-4`}
              placeholder="مثلا email@mail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-2 mx-3">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <p className="text-sm font-[600]">شماره تماس خود را وارد کنید</p>
            <PiPhoneLight className="absolute top-[44px] right-3 z-20 text-2xl text-[#E13333]" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`border text-right ${
                errors.phone ? 'border-red-500' : 'border-[#E3E3E3]'
              } bg-[#FCFCFC] w-full rounded-2xl px-10 py-2 placeholder:text-[#8A8A8A] placeholder:font-[500] mt-4`}
              placeholder="مثلا091212345678"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-2 mx-3">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm font-[600]">
            نوع سرویس (های) مورد نظر را انتخاب کنید
          </p>
          {errors.services && (
            <p className="text-red-500 text-xs my-2  mx-3">{errors.services}</p>
          )}
          <div className="grid grid-cols-2 lg:grid-cols-5 mt-5 gap-7">
    
            <div
              className={`flex gap-2 w-full items-center bg-[#FCFCFC] border ${
                formData.services.seo ? "border-[#7A3DE2]" : "border-[#E3E3E3]"
              } px-4 rounded-2xl cursor-pointer`}
              onClick={() => toggleService("seo")}
            >
              <input
                type="checkbox"
                checked={formData.services.seo}
                readOnly
                className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-[#7A3DE2] checked:border-transparent focus:outline-none focus:ring-blue-500"
              />
              <label className="cursor-pointer text-xs font-[600]">
                خدمات سئو
              </label>
            </div>

            <div
              className={`flex gap-2 w-full items-center bg-[#FCFCFC] border ${
                formData.services.webDesign ? "border-[#7A3DE2]" : "border-[#E3E3E3]"
              } py-2 px-4 rounded-2xl cursor-pointer`}
              onClick={() => toggleService("webDesign")}
            >
              <input
                type="checkbox"
                checked={formData.services.webDesign}
                readOnly
                className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-[#7A3DE2] checked:border-transparent focus:outline-none focus:ring-blue-500"
              />
              <label className="cursor-pointer text-xs font-[600]">
                طراحی وب سایت
              </label>
            </div>

            <div
              className={`flex gap-2 w-full items-center bg-[#FCFCFC] border ${
                formData.services.Automation ? "border-[#7A3DE2]" : "border-[#E3E3E3]"
              } py-2 px-4 rounded-2xl cursor-pointer`}
              onClick={() => toggleService("Automation")}
            >
              <input
                type="checkbox"
                checked={formData.services.Automation}
                readOnly
                className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-[#7A3DE2] checked:border-transparent focus:outline-none focus:ring-blue-500"
              />
              <label className="cursor-pointer text-xs font-[600]">
                اتوماسیون و بازاریابی
              </label>
            </div>

            <div
              className={`flex gap-2 w-full items-center bg-[#FCFCFC] border ${
                formData.services.Campaign ? "border-[#7A3DE2]" : "border-[#E3E3E3]"
              } py-2 px-4 rounded-2xl cursor-pointer`}
              onClick={() => toggleService("Campaign")}
            >
              <input
                type="checkbox"
                checked={formData.services.Campaign}
                readOnly
                className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-[#7A3DE2] checked:border-transparent focus:outline-none focus:ring-blue-500"
              />
              <label className="cursor-pointer text-xs font-[600]">
                کمپین‌های بازاریابی و تبلیغاتی
              </label>
            </div>

            <div
              className={`flex gap-2 w-full items-center bg-[#FCFCFC] border ${
                formData.services.ContentProduction ? "border-[#7A3DE2]" : "border-[#E3E3E3]"
              } py-2 px-4 rounded-2xl cursor-pointer`}
              onClick={() => toggleService("ContentProduction")}
            >
              <input
                type="checkbox"
                checked={formData.services.ContentProduction}
                readOnly
                className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-[#7A3DE2] checked:border-transparent focus:outline-none focus:ring-blue-500"
              />
              <label className="cursor-pointer text-xs font-[600]">
                خدمات تولید محتوا
              </label>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm font-[600]">
            در مورد درخواست خود برای ما بنویسید.
          </p>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="border border-[#E3E3E3] bg-[#FCFCFC] w-full rounded-2xl px-8 py-2 placeholder:text-[#8A8A8A] placeholder:font-[500] h-[171px] mt-5"
            placeholder="توضیحات (اختیاری)"
          />
        </div>

        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="bg-[#303030] text-white w-[386px] h-[40px] text-center m-auto rounded-2xl font-[600] hover:bg-[#404040] transition-colors"
          >
            ثبت درخواست
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;