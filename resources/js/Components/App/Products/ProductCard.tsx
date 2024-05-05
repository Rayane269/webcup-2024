import React from "react";
import Button from "../Shared/Button";
import { router } from "@inertiajs/core";
import useRoute from "@/Hooks/useRoute";
import { useStoreOrder } from "../Order/order.store";

type Props = {
  data: Array<{
    aosDelay: string,
    id: number,
    img: string,
    title: string,
    price: string
  }>
}

const ProductCard = ({ data }: Props) => {
  const route = useRoute()
  const addId = useStoreOrder(store => store.addId)
  const selectedIds = useStoreOrder(store => store.selectedIds)

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group"
            key={data.id}
          >
            <div className="relative">
              <img
                src={data.img}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                <div className="flex flex-col gap-y-1">
                  <Button
                    bgColor={selectedIds.has(data.id) ? "bg-slate-100" : "bg-primary"}
                    text={selectedIds.has(data.id) ? 'Déjà ajouter' : 'Ajouter au panier'}
                    disabled={selectedIds.has(data.id) ? true : false}
                    textColor={"text-white"}
                    handler={() => addId(data.id)}
                  />
                  <Button
                    text={"Voir details"}
                    bgColor={"bg-brandBlue"}
                    textColor={"text-white"}
                    handler={() => router.get(route('show_product', data.id))}
                  />
                </div>
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">${data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
