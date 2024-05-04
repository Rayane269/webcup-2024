import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AOS from "aos";
import "aos/dist/aos.css";

import { Structure } from '@/Layouts/Structure';
import { ProductDetails } from '@/Components/App/Products/ProductDetails';

interface Props {
  canLogin: boolean;
  canRegister: boolean;
  laravelVersion: string;
  phpVersion: string;
  data: []
}

export default function ShowProduct({canLogin}: Props) {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Head title="Show product" />
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Structure 
          orderPopup={orderPopup}
          handleOrderPopup={handleOrderPopup}
          canLogin={canLogin}
        >
          <div className='container'>
            <ProductDetails />
          </div>
        </Structure>
      </div>
    </>
  );
}

