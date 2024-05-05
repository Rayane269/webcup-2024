import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AOS from "aos";
import "aos/dist/aos.css";

import { Structure } from '@/Layouts/Structure';
import { useStoreOrder } from '@/Components/App/Order/order.store';
import { ProductType, useProductStore } from '@/Components/App/Products/product.store';
import { ProductsData } from '../Home';

interface Props {
  canLogin: boolean;
  canRegister: boolean;
  laravelVersion: string;
  phpVersion: string;
  data: []
}

export default function Order({canLogin}: Props) {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const orders = useStoreOrder(state => state.selectedIds)
  const selectOrders = ProductsData
    .map(product => ({id: product.id, title: product.title, price: Number(product.price)}))
    .filter(product => orders.has(product.id))

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
          <div className='container mt-5'>
            {selectOrders.length === 0 && <h1 className='text-center text-3xl font-bold'>Aucune commande !</h1>}
            <div className='mb-3 md:flex justify-between'>
              <div className='w-3/5'>
                {selectOrders.map(order => <ShowOrder key={order.id} order={order} />)}
              </div>
              <div className='md:w-[380px] bg-slate-100 rounded-md'>

              </div>
            </div>
          </div>
        </Structure>
      </div>
    </>
  );
}

const ShowOrder = function({order}: {order: ProductType}) {
  const removeId = useStoreOrder(state => state.removeId)

  return (
    <div className='flex justify-between px-5 py-2 bg-slate-100 rounded-md mb-3'>
      <div className='flex flex-col gap-y-1'>
        <span className='dark:text-black text-lg'>{order.title}</span>
        <span className='dark:text-black text-lg'>Prix unitaire : <span className='font-bold text-2xl text-primary'>{order.price}</span></span>
      </div>
      <div>
        <button 
          className='px-3 py-1 bg-slate-300 text-sm rounded-full'
          onClick={() => removeId(order.id)}
        >
          Supprimer
        </button>
      </div>
    </div>
  )
}
