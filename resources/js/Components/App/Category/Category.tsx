import React from "react";
import Button from "../Shared/Button";
import { router } from "@inertiajs/core";
import useRoute from "@/Hooks/useRoute";

export type CategoryType = {
  img: string,
  label: string
}

export const Category = ({data}: {data: Array<CategoryType>}) => {
  const route = useRoute()
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Être heureux</p>
                <p className="text-2xl font-semibold mb-[2px]">Avec</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 my-3">
                  {data[0].label}
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                  handler={() => router.get(route('filter_products'))}
                />
              </div>
            </div>
            <img src={data[0].img} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Être heureux</p>
                <p className="text-2xl font-semibold mb-[2px]">Avec</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 my-3">
                  {data[1].label}
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img
              src={data[1].img}
              alt=""
              className="w-[320px] absolute -right-4 lg:top-[40px]"
            />
          </div>
          {/* third col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Être heureux</p>
                <p className="text-2xl font-semibold mb-[2px]">Avec</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 my-3">
                  {data[2].label}
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={data[1].img}
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
