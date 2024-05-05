import React, { PropsWithChildren } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Head, Link } from '@inertiajs/react';
import { HeaderLinks } from '@/Components/HeaderLinks';
import { Structure } from '@/Layouts/Structure';
import { CardCategories, Categories } from '@/Components/Categories';
import { Articles, Products, Title } from '@/Components/Articles';

interface Props {
  canLogin: boolean;
  canRegister: boolean;
  laravelVersion: string;
  phpVersion: string;
  data: []
}

export default function Welcome({
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

  return (
    <>
      <Head title="Bienvenu - Mystical market" />
      <Structure canLogin={false}>
        <HeaderLinks />

        <div className='md:py-6 px-5 md:px-16 bg-slate-100'>
          <Categories data={data.bestCategories} />
          <Articles>
            <Title text='Offre à ne pas rater' />
            <Products data={data.offres} />
          </Articles>

          <Articles>
            <Title text='Meilleurs offre' />
            <Products data={data.bestProducts} />
          </Articles>

          <Articles>
            <Title text='Succeptible de vous interesser' />
            <Products data={data.likelyInterested} />
          </Articles>

          <div>
            <h1 className='text-center text-2xl'>Paiement sécurisé</h1>
            <div>
              <div>Paypal</div>
              <div>Master card</div>
              <div>Mvola</div>
            </div>
          </div>
        </div>

      </Structure>
    </>
  );
}

