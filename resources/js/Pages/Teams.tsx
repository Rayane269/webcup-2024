import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AOS from "aos";
import "aos/dist/aos.css";

import { Structure } from '@/Layouts/Structure';

interface Props {
  canLogin: boolean;
  canRegister: boolean;
  laravelVersion: string;
  phpVersion: string;
  data: []
}

export default function Teams({canLogin}: Props) {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };


type MemberType = {
    firstName: string,
    lastName: string,
    description: string,
    image: string,

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

  const members: Array<MemberType> = [
    {firstName: 'Soulaiman', lastName: 'Rayane', description: 'Développeur full-stack', image: 'equipe/equipe2.png', },
    {firstName: 'Abdoul-wahid', lastName: 'Hassani', description: 'Développeur Back-end & Integrateu', image: 'equipe/equipe3.png'},
    // {firstName: 'Nadhouimata', lastName: 'Ahamada', description: 'Développeur Back-end', image: 'equipe/equipe1.png'},
    {firstName: 'Samirdine', lastName: 'Ahamed', description: 'Développeur Back-end', image: 'equipe/equipe4.png'},
  ]

  const CardMember = function({member}: {member: MemberType}) {

    return (
      <div className='group relative  rounded-lg items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow mt-3'>
        <div>
          <img className="h-auto max-w-full rounded-lg object-cover group-hover:rotate-2 group-hover:scale-110 transition-transform" src={member.image} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 goup-hover:via-black/60 group-hover:to-black/70">

        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center lg:px-4  text-center translate-y-[51%]  lg:translate-y-[52%] group-hover:translate-y-0 transition-all">
          <h1 className='text-3xl font-bold text-white'>{member.firstName}</h1>
          <h1 className='text-3xl uppercase font-bold text-white'>{member.lastName}</h1>
          <p className='text-lg italic text-white mb-3'>{member.description}</p>
          <button className='rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>Suivre</button>
        </div>
      </div>
    )
  }
  return (
    <>
      <Head title="Bienvenu - Mystical market" />
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Structure
          orderPopup={orderPopup}
          handleOrderPopup={handleOrderPopup}
          canLogin={canLogin}
        >
          <div className='container'>

            <div className="class"></div>

            <div className='lg:mt-39 h-full flex items-center text-5xl tracking-widest font-webcup'>
                <h1 data-aos="fade-right" className=''>Qui nous sommes </h1>
                    {/* <br /> &nbsp; &nbsp; ce qui nous motive</h1> */}
            </div>

            <div className="flex mt-4">
                {/* <div className="flex-1 tracking-wide m-2">
                    <div className="w-96">
                        Notre position est simple : chaque client est notre partenaire et nous sommes investis dans le succès de chaque campagne. Spécialisés dans les marques de voyages et de tourisme, de santé et de bien-être, ainsi que d'aliments et de boissons, nous donnons vie à de nouvelles idées dans des campagnes numériques qui développent votre entreprise. C'est ce qu'attendent nos partenaires.
                    </div>
                </div>
                <div className="flex-1 tracking-wide m-2">
                    <div className="">
                        C’est ce qui arrive lorsque vous placez des talents dans un environnement où ils s’épanouissent.Rencontrez les personnes qui rendent la performance possible.
                    </div>
                </div> */}
            </div>

            <div className="our-team-images ">
                <div className="mt-14 mx-6  mb-24 grid md:grid-cols-1">
                    <div data-aos="fade-right" className="content-center md:grid grid-cols-3  gap-4 relativeduration-500 cursor-pointer overflow-hidden ">
                        {members.map((member, index) => (<CardMember key={index} member={member} />))}
                    </div>
                </div>
            </div>




          </div>
        </Structure>
      </div>
    </>
  );

}

