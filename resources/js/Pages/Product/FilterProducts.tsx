import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AOS from "aos";
import "aos/dist/aos.css";

import { Structure } from '@/Layouts/Structure';
import { ProductCard, Products, Sidebar } from '@/Components/App';
import { ProductsData } from '../Home';

interface Props {
  canLogin: boolean;
  canRegister: boolean;
  laravelVersion: string;
  phpVersion: string;
  data: []
}

export default function FilterProducts({canLogin}: Props) {
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

  const handleChange = () => {
    console.log('salut')
  }

  return (
    <>
      <Head title="Filter products" />
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Structure 
          orderPopup={orderPopup}
          handleOrderPopup={handleOrderPopup}
          canLogin={canLogin}
        >
          <div className='container'>
            <Sidebar handleChange={handleChange}  />
            <ProductCard data={ProductsData}  />
          </div>
        </Structure>
      </div>
    </>
  );
}

