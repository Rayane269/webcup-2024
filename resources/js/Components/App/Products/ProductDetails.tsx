import React, { useState } from 'react'
import { useStoreOrder } from '../Order/order.store'

export const ProductDetails = function() {
  const [images, setImages] = useState({
    img1 : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4 : "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
  })

  const product = {
    id: 1,
    name: 'Le Grimoire des Mondes Perdus',
    description: "Il était une fois, dans un royaume oublié, un grimoire mystérieux connu sous le nom de \"Le Grimoire des Mondes Perdus\". Ce livre ancien était réputé pour renfermer des connaissances interdites sur les mondes inexplorés et les mystères les plus profonds de l'univers. Le grimoire était gardé dans une tour sombre, au cœur de la forêt enchantée, où les arbres murmuraient des secrets millénaires et les étoiles brillaient d'une lueur magique. Seuls les plus braves osaient s'aventurer dans cette forêt, car elle était peuplée de créatures fantastiques et de sortilèges anciens. Un jour, une jeune fille nommée Elena entendit parler du grimoire. Elle était une aventurière intrépide, avide de connaissances et de découvertes. Malgré les avertissements des villageois, elle décida de partir à la recherche du livre légendaire. Guidée par une carte énigmatique et une étoile filante, Elena traversa des étendues sauvages, affronta des tempêtes magiques et déjoua des pièges mortels. Finalement, elle arriva devant la tour de la forêt enchantée. Déterminée, Elena escalada les marches de la tour et atteignit la chambre où reposait le grimoire. Le livre était orné de symboles étranges et de runes lumineuses, et il semblait pulsé d'une énergie mystique. Elena ouvrit le grimoire et découvrit des pages remplies de récits anciens, des cartes des mondes oubliés, et des sorts ancestraux. Mais au moment où elle commença à lire, elle fut aspirée dans un tourbillon de lumière et de magie. Quand Elena reprit conscience, elle se trouvait dans un autre monde, un monde où les étoiles dansaient dans le ciel et les océans brillaient de mille couleurs. Elle avait pénétré dans l'un des mondes perdus dont parlait le grimoire. Dans ce nouveau monde, Elena rencontra des créatures étranges et des peuples oubliés. Elle apprit de nouvelles magies et découvrit des trésors cachés. Mais elle comprit aussi que le grimoire renfermait un grand pouvoir, un pouvoir qui pouvait sauver ou détruire des mondes entiers. Avec courage et sagesse, Elena utilisa le grimoire pour guider les habitants de ce monde vers la lumière, repoussant les ténèbres qui menaçaient de les engloutir. Finalement, après de nombreuses aventures, Elena trouva le chemin du retour. Elle referma le grimoire, emportant avec elle les souvenirs de ses voyages et les leçons apprises. Et ainsi, le Grimoire des Mondes Perdus devint un récit légendaire, transmis de génération en génération, rappelant aux êtres courageux que l'aventure et la connaissance sont les plus grands trésors de tous.",
  }
  const addId = useStoreOrder(store => store.addId)
  const selectedIds = useStoreOrder(store => store.selectedIds)

  const [afficherTout, setAfficherTout] = useState(false)
  const histoireRaccourcie = product.description.slice(0, 500)
  const afficherButton = product.description.length > 500

  const toggleAfficherTout = () => {
    setAfficherTout(!afficherTout);
  };

  const [activeImg, setActiveImage] = useState(images.img1)
  const [amount, setAmount] = useState(1);

  return (
    <div className='lg:flex justify-between gap-16 mt-11'>
      <div className='lg:w-2/4 h-96 flex mb-10 items-center justify-center'>
        <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
      </div>
      {/* ABOUT */}
      <div className='flex flex-col gap-4 lg:w-2/4'>
        <div>
          <h1 className='text-3xl font-bold'>{product.name}</h1>
        </div>
        <div>
          <p>{afficherTout ? product.description : histoireRaccourcie}</p>
          {afficherButton && (
            <button className='bg-black text-white px-2 py-px rounded-full my-2' onClick={toggleAfficherTout}>
              {afficherTout ? "Voir moins" : "Voir plus"}
            </button>
          )}
        </div>
        <h6 className='text-2xl font-semibold'>$ 199.00</h6>
        <div className='flex flex-row items-center gap-12'>
          <div className='flex flex-row items-center'>
            <button 
              className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' 
              onClick={() => setAmount((prev) => prev <= 0 ? 0 : prev - 1)}
            >-</button>
            <span className='py-4 px-6 rounded-lg'>{amount}</span>
            <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
          </div>
          <button 
            disabled={selectedIds.has(product.id) ? true : false}
            onClick={() => addId(product.id)}
            className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'
          >
            {selectedIds.has(product.id) ? 'Déjà ajouter' : 'Ajouter au panier'}
          </button>
        </div>
      </div>
    </div>
  )
}