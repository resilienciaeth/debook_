import React from 'react';
import Image from 'next/image';
import images from '../public/assets';

function Card() {
  return (
    <div className="px-2">
      <div className="w-[170px] h-[217px] min-h-[217px] min-w-[170px] bg-white border-[1px] border-[#ADADAD] rounded-2xl mb-4">
        <div className="flex h-[55%] ">
          <Image src={images.nftimage} className="rounded-t-xl" objectFit="cover" />
        </div>
        <div className="flex h-[45%] flex-col px-4">
          <div className="z-0 flex-col -mt-4 w-[40px] h-[40px] border-[2px] rounded-full border-white ">
            <Image src={images.author} className="border-2 rounded-full" />
          </div>
          <div className="text-left text-bold font-larken text-[10px] text-black">The Power of Now</div>
          <div className="flex flex-row justify-between font-larken text-[8px] text-gray-600">
            <p>
              Last Sale: $26
            </p>
            <p>Floor Price: $34</p>
          </div>
          <div className="flex flex-row justify-center mt-2 space-x-4">
            <button className="bg-debook-1 text-[8px] rounded-3xl px-3 font-larken py-1">Buy now</button>
            <button className="bg-button-1 text-black font-larken px-2 text-[8px] rounded-3xl">Rent now</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Card;
