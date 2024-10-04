import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar'; // استيراد النافبار
import Product from './Components/Product'; // استيراد المنتج
import Slider from './Components/Slider'; // استيراد السلايدر
import Loading from './Components/Loading'; // استيراد صفحة اللودنج
import productsData from './DATA/productsData'; // بيانات المنتجات
import './s.scss'; // استيراد التنسيقات

function App() {
  const [isLoading, setIsLoading] = useState(true); // حالة التحميل
  const [cart, setCart] = useState([]); // حالة السلة
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // حالة القائمة المنسدلة للسلة

  // استخدام useEffect لمحاكاة التحميل لمدة معينة (مثلاً 3 ثوانٍ)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // إنهاء حالة التحميل بعد مرور 3 ثوانٍ
    }, 3000);

    return () => clearTimeout(timer); // تنظيف الـ timer
  }, []);

  // إضافة المنتج إلى السلة
  const addToCart = (name, quantity, salePrice) => {
    const existingItemIndex = cart.findIndex(item => item.name === name);
    
    if (existingItemIndex !== -1) {
      // إذا كان المنتج موجودًا بالفعل، يتم تحديث الكمية
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // إذا كان المنتج غير موجود، يتم إضافته إلى السلة
      const newItem = { name, quantity, price: salePrice, image: 'path/to/image' }; // أضف الصورة هنا
      setCart([...cart, newItem]);
    }
  };

  // إزالة المنتج من السلة
  const removeFromCart = (name) => {
    const updatedCart = cart.filter(item => item.name !== name);
    setCart(updatedCart);
  };

  // دالة لفتح أو إغلاق القائمة المنسدلة للسلة
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // إذا كان في حالة التحميل، عرض صفحة التحميل فقط
  if (isLoading) {
    return <Loading />;
  }

  // بعد انتهاء التحميل، عرض الصفحة الرئيسية كاملة
  return (
    <div className="App">
      <Navbar 
        cartItems={cart.length} 
        cartDetails={cart} 
        removeFromCart={removeFromCart} 
        isDropdownVisible={isDropdownVisible} 
        toggleDropdown={toggleDropdown} 
      />
      <div className="main-content">
        <Product
          name="Name of product"
          rating={4}
          originalPrice={3650}
          salePrice={3000}
          description="This is a great product."
          addToCart={addToCart}
        />
        <Slider products={productsData} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
