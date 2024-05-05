import React from 'react';
import { Head,  } from '@inertiajs/react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Hero } from '@/Components/App'
import { 
  Banner, 
  Category, 
  Category2, 
  Partners, 
  Products, 
} from '@/Components/App';

import headphone from "$/storage/hero/headphone.png";
import smartwatch2 from "$/storage/category/smartwatch2-removebg-preview.png";
import { Structure } from '@/Layouts/Structure';

interface Props {
  canLogin: boolean;
  products: ProductsType[];
  categories: []
  data: []
}

type ProductsType = {
  categorie: number
  created_at: string
  description: string
  disponibilite: number
  etat: number
  id: number
  image_url: string
  nom: string
  prix: string
  prix_promotionnel: number | null
  promotion: boolean
  updated_at: string
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

type ProductHydrateType = {id: number, img: string, title: string, price: string, aosDelay: string}

export default function Home({
  canLogin,
  products,
  categories
}: Props) {
  
  const [orderPopup, setOrderPopup] = React.useState(false);
  const productHydrate: ProductHydrateType[]  = products.map((product, index) => ({
    id: product.id,
    img: `storage/${product.image_url}`,
    title: product.nom,
    price: product.prix,
    aosDelay: `${Number(index * 100)}`
  }))
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }
  console.log(products, categories)
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
          {canLogin && <Hero handleOrderPopup={handleOrderPopup} />}
          <Category data={CategoriesData} />
          <Category2 data={CategoriesData2} />
          <Banner data={BannerData2} />
          <Products data={productHydrate} title="Nos promos" subtitle="Decouvrez nos promotions" />
          <Partners />
        </Structure>
      </div>
    </>
  );
}

