import React from "react";
import Button from "../Shared/Button";
import { CategoryType } from "./Category";
import useRoute from "@/Hooks/useRoute";
import { router } from "@inertiajs/core";

export const Category2 = ({data}: {data: Array<CategoryType>}) => {
  const route = useRoute()

  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Être heureux</p>
                <p className="text-2xl font-semibold mb-[2px]">Avec</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 my-3">
                  {data[0].label}
                </p>
                <Button
                  text="Parcourir"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                  handler={() => router.get(route('filter_products'))}
                />
              </div>
            </div>
            <img
              src={data[0].img}
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"
            />
          </div>
          {/* Second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Être heureux</p>
                <p className="text-2xl font-semibold mb-[2px]">Avec</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 my-3">
                  {data[1].label}
                </p>
                <Button
                  text="Parcourir"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                  handler={() => router.get(route('filter_products'))}
                />
              </div>
            </div>
            <img src={data[1].img} alt="" className="w-[320px] absolute bottom-0" />
          </div>
          {/* Third col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Être heureux</p>
                <p className="text-2xl font-semibold mb-[2px]">avec</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 my-3">
                  {data[2].label}
                </p>
                <Button
                  handler={() => router.get(route('filter_products'))}
                  text="Parcourir"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img
              src={data[2].img}
              alt=""
              className="w-[200px] absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

