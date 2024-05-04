import React from "react"
import useRoute from "@/Hooks/useRoute";
import useTypedPage from "@/Hooks/useTypedPage";
import { Head } from "@inertiajs/react";
import { Structure } from "@/Layouts/Structure";
import { HeaderLinks } from "@/Components/HeaderLinks";

interface Props {
  canLogin: boolean;
  canRegister: boolean;
  laravelVersion: string;
  phpVersion: string;
  data: []
}

export default function Filter({
  canLogin,
  canRegister,
  laravelVersion,
  phpVersion,
}: Props) {
  const route = useRoute();
  const page = useTypedPage();


  return (
    <>
      <Head title="Filtre des produits" />
      <Structure>
        <HeaderLinks />

        <div className='px-5 md:py-6 md:px-16 bg-slate-100'>
          <Filtre />
          <ContentProducts />
        </div>
      </Structure>
    </>
  );
}