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
  data: []
}

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
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

export default function Home({
  canLogin,
  canRegister,
  laravelVersion,
  phpVersion,
}: Props) {
  const route = useRoute();
  const page = useTypedPage();
  const data = {
    bestCategories: [
      {id: 1, label: "Livre magique", path: 'login'},
      {id: 2, label: "Livre enchanté", path: 'login'},
      {id: 3, label: "Bague magique", path: 'login'},
      {id: 4, label: "collier magique", path: 'login'},
    ],
    offres: [
      {id: 1, name: "Yoyo yoyoy"},
      {id: 2, name: "Ha aha aahah"},
      {id: 3, name: "Va va va"},
      {id: 4, name: "Bof Bof Fob"},
    ],
    bestProducts: [
      {id: 1, name: "Alibaba au pays magique"},
      {id: 2, name: "Va te faire foutre"},
      {id: 3, name: "Connard va !"},
      {id: 4, name: "Bordel fout moi !"},
    ],
    likelyInterested: [
      {id: 1, name: "Livre bof je ne sais pas"},
      {id: 2, name: "PHP c'est de la merde"},
      {id: 3, name: "Mec lache nous putain"},
      {id: 4, name: "Va te faire foutre"},
    ]
  }

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
      <Head title="Bienvenu - Mystical market" />
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Structure 
          orderPopup={orderPopup}
          handleOrderPopup={handleOrderPopup}
          canLogin={canLogin}
        >
          <Hero handleOrderPopup={handleOrderPopup} />
          <Category />
          <Category2 />
          <Services />
          <Banner data={BannerData} />
          <Products />
          <Banner data={BannerData2} />
          <Blogs />
          <Partners />
        </Structure>
      </div>
    </>
  );
}

