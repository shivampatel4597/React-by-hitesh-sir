import React from 'react'

const Card = (props) => {
  return (
    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-8">
    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://purepng.com/public/uploads/large/purepng.com-applefoodsweettastyhealthyfruitapple-9815246780899e3jo.png" alt="" width="384" height="512"/>
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p class="text-lg font-medium">
          “APPLE in a day keeps the doctor away . Most beautiful slogan or quote hearing since childhood then for whom you are waiting just go and eat an apple”
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">
         {props.userName}
        </div>
        <div class="text-slate-700 dark:text-slate-500">
          {props.type}, Rewa
        </div>
      </figcaption>
    </div>
  </figure>
  )
}

export default Card
