import React, { useState, useEffect } from 'react';
import './Loading.scss'; // تأكد من إضافة التنسيق المطلوب هنا
import loadingImage from '../assets/loading-image.png'; // قم بإضافة مسار الصورة الخاصة بك

function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // هذه الدالة تعمل على زيادة تقدم التحميل بمرور الوقت
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer); // إنهاء المؤقت عند الوصول إلى 100%
          return 100;
        }
        return prevProgress + 5; // زيادة التقدم بنسبة 5% كل فترة
      });
    }, 200); // تكرار التقدم كل 200 مللي ثانية

    return () => clearInterval(timer); // تنظيف المؤقت عند انتهاء التحميل
  }, []);

  return (
    <div className="loading-screen">
      <img src={loadingImage} alt="Loading" className="loading-image" /> {/* الصورة فوق النص */}
      <div className="progress-bar-container"> {/* مستطيل التقدم */}
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }} // عرض المستطيل يعتمد على قيمة التقدم
        ></div>
      </div>
    </div>
  );
}

export default Loading;
