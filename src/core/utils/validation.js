const validateForm = (formData) => {
    let valid = true;
    const errors = {
      fullName: '',
      email: '',
      phone: '',
      services: ''
    };
  
    // اعتبارسنجی نام و نام خانوادگی
    if (!formData.fullName.trim()) {
      errors.fullName = 'نام و نام خانوادگی الزامی است';
      valid = false;
    }
  
    // اعتبارسنجی ایمیل
    if (!formData.email.trim()) {
      errors.email = 'آدرس ایمیل الزامی است';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'آدرس ایمیل معتبر نیست';
      valid = false;
    }
  
    // اعتبارسنجی شماره تماس
    if (!formData.phone.trim()) {
      errors.phone = 'شماره تماس الزامی است';
      valid = false;
    } else if (!/^[0-9]{11,}$/.test(formData.phone)) {
      errors.phone = 'شماره تماس معتبر نیست';
      valid = false;
    }
  
    // اعتبارسنجی سرویس‌ها
    if (!Object.values(formData.services).some(val => val)) {
      errors.services = 'حداقل یک سرویس باید انتخاب شود';
      valid = false;
    }
  
    return { valid, errors };
  };

  export default validateForm