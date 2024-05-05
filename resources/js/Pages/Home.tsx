import React, { PropsWithChildren, useEffect, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Head, Link } from '@inertiajs/react';
import { Navbar } from '@/Components/App/Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import { Hero } from '@/Components/App/Hero';
import {
  Banner,
  Blogs,
  Category,
  Category2,
  Footer,
  Partners,
  Popup,
  Products,
  Services
} from '@/Components/App';

import headphone from "$/storage/hero/headphone.png";
import smartwatch2 from "$/storage/category/smartwatch2-removebg-preview.png";
import { Structure } from '@/Layouts/Structure';

interface Props {
  canLogin: boolean;
  canRegister: boolean;
  laravelVersion: string;
  phpVersion: string;
  data: [],
  products: []
}
interface Product {
    id: number;
    name: string;
    price: number;
    // Ajoutez d'autres propriétés si nécessaire
  }

const BannerData = {
  discount: "30% DE REMISE",
  title: "Beau Sourire",
  date: "Du 10 janvier au 28 janvier",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};

// images import
import Img1 from "$/storage/product/p-1.jpg";
import Img2 from "$/storage/product/p-2.jpg";
import Img3 from "$/storage/product/p-3.jpg";
import Img4 from "$/storage/product/p-4.jpg";
import Img5 from "$/storage/product/p-5.jpg";
import Img6 from "$/storage/product/p-9.jpg";
import Img7 from "$/storage/product/p-7.jpg";

import Image1 from "$/storage/category/earphone.png";
import Image2 from "$/storage/category/watch.png";
import Image3 from "$/storage/category/macbook.png";

import Image4 from "$/storage/category/gaming.png";
import Image5 from "$/storage/category/vr.png";
import Image6 from "$/storage/category/speaker.png";
import { useProductStore } from '@/Components/App/Products/product.store';

export const ProductsData = [
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

export const CategoriesData = [
  {label: 'Livres ensorcelés', img: Image1},
  {label: 'Bijoux ensorcelés', img: Image2},
  {label: 'Autre Objets', img: Image3},
]

export const CategoriesData2 = [
  {label: 'Livres ensorcelés', img: Image4},
  {label: 'Bijoux ensorcelés', img: Image5},
  {label: 'Autre Objets', img: Image6},
]

export default function Home({
  canLogin,
}: Props) {
  

  const addProduct = useProductStore(state => state.addProduct)
  //ProductsData.forEach(product => addProduct({id: product.id, title: product.title, price: Number(product.price)}))
  const [orderPopup, setOrderPopup] = React.useState(false);
  
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

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
      <Head title="Bienvenu - Mystical market" />
      <ul>

      </ul>

      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Structure
          orderPopup={orderPopup}
          handleOrderPopup={handleOrderPopup}
          canLogin={canLogin}
        >
          {canLogin && <Hero handleOrderPopup={handleOrderPopup} />}
          <Category data={CategoriesData} />
          <Category2 data={CategoriesData2} />
          <Services />
          <Banner data={BannerData} />
          <Products data={ProductsData} />
          <Banner data={BannerData2} />
          <Products data={ProductsData} title="Nos promos" subtitle="Decouvrez nos promotions" />
          <Partners />
        </Structure>
      </div>
    </>
  );
}

