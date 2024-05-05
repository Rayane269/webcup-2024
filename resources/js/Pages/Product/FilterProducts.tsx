import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AOS from "aos";
import "aos/dist/aos.css";

import { Structure } from '@/Layouts/Structure';
import { ProductCard, Products, Sidebar } from '@/Components/App';


// images import
import Img1 from "$/storage/product/p-1.jpg";
import Img2 from "$/storage/product/p-2.jpg";
import Img3 from "$/storage/product/p-3.jpg";
import Img4 from "$/storage/product/p-4.jpg";
import Img5 from "$/storage/product/p-5.jpg";
import Img6 from "$/storage/product/p-9.jpg";
import Img7 from "$/storage/product/p-7.jpg";


interface Props {
  canLogin: boolean;
  canRegister: boolean;
  laravelVersion: string;
  phpVersion: string;
  data: []
}

export default function FilterProducts({canLogin}: Props) {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const ProductsData = [
    {
      id: 1,
      img: Img1,
      title: "Boat Headphone",
      price: "120",
      aosDelay: "0",
    },
    {
      id: 2,
      img: Img2,
      title: "Rocky Mountain",
      price: "420",
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Goggles",
      price: "320",
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Printed ",
      price: "220",
      aosDelay: "600",
    },
    {
      id: 5,
      img: Img5,
      title: "Boat Headphone",
      price: "120",
      aosDelay: "0",
    },
    {
      id: 6,
      img: Img6,
      title: "Rocky Mountain",
      price: "420",
      aosDelay: "200",
    },
    {
      id: 7,
      img: Img7,
      title: "Goggles",
      price: "320",
      aosDelay: "400",
    },
    {
      id: 8,
      img: Img5,
      title: "Printed ",
      price: "220",
      aosDelay: "600",
    },
  ]
  
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

