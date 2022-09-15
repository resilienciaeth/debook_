/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';
import card from '../components/card';

import images from '../public/assets';

import 'aos/dist/aos.css';
import Aos from 'aos';
import Card from '../components/card';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="font-larken">
      {/* Welcome */}
      <div className="bg-black h-auto">
        <div className="flex flex-col h-full bg-white">
          <div className="mt-[8rem] h-[20%] flex items-center flex-col">
            <p className="text-[12px] font-larken font-bold text-debook-1">Welcome to</p>
            <h1 className="text-[70px] mt-0 font-larken font-bold text-debook-1">DEBOOK</h1>
            <p className="text-[12px] font-larken font-bold text-debook-1">The first Blockchain Platform to revolutionize books.</p>
          </div>
          <div className="mt-[5rem] mb-10 flex items-start justify-center bg-white h-[80%]">
            <div className="w-[290px] h-[330px] border-2 bg-white rounded-2xl">
              <div className="h-[55%]">
                <Image src={images.nftimage} className="rounded-t-[1rem]" objectFit="cover" />
              </div>
              <div className="h-[45%] flex justify-center flex-col">
                <div className="w-full space-x-5 flex justify-around flex-row px-6">
                  <div>
                    <Image src={images.author} />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <p className="text-[10px] text-black font-larken text-left">
                      Book's Name
                    </p>
                    <p className="text-[10px] text-slate-500 font-larken">
                      Author's Name
                    </p>
                  </div>
                  <div className="flex flex-col text-slate-500 items-center justify-center">
                    <p className="text-[10px] text- font-larken">
                      Price
                    </p>
                    <div className=" border-[1px] border-debook-1">
                      <p className="text-[8px] px-2 text-debook-1 font-larken">
                        $30 USDC
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row mt-5 justify-center space-x-10">
                  <button className="bg-debook-1 text-[12px] font-larken font-bold px-4 py-2 rounded-3xl">Buy Now</button>
                  <button className="bg-button-1 text-[12px] text-black font-larken px-4 py-2 rounded-3xl font-bold">Rent Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-debook-1">
            <div className="flex flex-col ml-[3rem] py-4">
              <p className="font-larken text-[12px]">From books to ebooks to now..</p>
              <h1 className="font-larken text-[40px] w-full">debooks</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Popular */}
      <div className="h-auto px-2 mb-10">
        <div className="flex flex-col mt-20">
          <div className="text-[15px] font-larken text-debook-1">
            <h1>Popular debooks</h1>
          </div>
          <div className="flex justify-between mt-4 flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      {/* web3 */}
      <div className="h-auto bg-debook-1">
        <div className="flex flex-col items-center justify-center px-[2rem]">
          <div className="mt-[5rem] space-y-6 mb-20">
            <h1 className="text-[30px] font-bold text-center">
              Bringing Authors and Readers into web3.
            </h1>
            <p className="text-[15px] font-normal text-center">
              From physical books, to e-books to now decentralized books. From DEBOOK we are commited to bring you the education needed to get started.
            </p>
            {/* card 1 */}
            <div className="flex flex-col items-center border-2 rounded-3xl px-[2rem] space-y-2 h-[258px] bg-blend-overlay bg-card">
              <Image src={images.hands} />
              <h1 className="text-[18px] font-bold text-center">Social books</h1>
              <p className="text-[15px] text-card1 text-center mb-4">Books as a Platform. Each debook gives you access to a private community. Surround yourself with like-minded people.</p>
            </div>
            {/* card 2 */}
            <div className="flex flex-col items-center border-2 rounded-3xl px-[2rem] space-y-2 h-[258px] bg-blend-overlay bg-card">
              <div className="mt-2">
                <Image src={images.money} className="mt-4" />
              </div>
              <h1 className="text-[18px] font-bold text-center">Asset Books</h1>
              <p className="text-[15px] text-card1 text-center mb-4">Readers can now sell debooks whenever they want and even make some profit out of it. Authors keep a % of every resell. </p>
            </div>
            {/* card 3 */}
            <div className="flex flex-col items-center border-2 rounded-3xl px-[2rem] space-y-2 h-[258px] bg-blend-overlay bg-card">
              <div className="mt-2">
                <Image src={images.book} className="mt-4" />
              </div>
              <h1 className="text-[18px] font-bold text-center">Utility Books</h1>
              <p className="text-[15px] text-card1 text-center mb-4">Readers can intereact with the author. Authors know who their readers are. Books become alive with the power of the Blockchain.</p>
            </div>
          </div>
        </div>
      </div>
      {/* notable drops */}
      <div className="mt-20 h-auto mb-10">
        <div className="flex flex-col items-center">
          <h1 className="text-[30px] font-bold text-black">Notable Drops</h1>
          <div className="mt-10">

            <div className="relative">
              <Image src={images.notable} className="relative" />
            </div>
            <div className="flex flex-row items-start justify-center space-x-2 text-debook-1 text-[30px]">
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
            </div>
          </div>
        </div>
      </div>
      {/* coming soon */}
      <div className="h-auto bg-[#212121]">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-[8rem] flex flex-col items-center">
            <div className="flex flex-col px-[2rem] items-center">
              <h1 className="text-white font-bold text-[28px] text-center">
                1 debook, 1 Community.
              </h1>
              <h1 className="text-coming text-[15px] text-center">
                DEBOOK App will be available soon for every reader to interact with their Community and Author. Readers will be able to chat with each others, add value to the book, post their thoughts on the debooks they are readong and much more.
              </h1>
              <div className="flex flex-col mt-4">
                <Image src={images.appstore} width={260} height={170} />
              </div>
              <h1 className="text-[20px] font-bold mt-6">
                Coming Soon.
              </h1>
            </div>
            <div>
              <Image src={images.iphone} objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
      {/* 1 book 1 community */}
      <div className="h-auto bg-circle bg-no-repeat bg-debook-1">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mt-[6rem] px-[2rem] mb-[9rem]">
            <h1 className="text-[22px] font-bold">
              One debook, one Community.
            </h1>
            <p className="text-[14px] text-center mt-5">DEBOOK is a tool to tokenize books. </p>
            <p className="text-[14px] text-center">DEBOOK is a marketplace for tokenized books. </p>
            <p className="text-[14px] text-center">DEBOOK is a social platform for readers and authors to interact on top of their debooks.  </p>
            <div className="flex flex-row mt-16 space-x-10">
              <button className="rounded-3xl px-5 py-2 text-[15px] border-[2px] font-bold">Learn More</button>
              <button className="rounded-3xl px-5 py-2 text-[15px] bg-black font-bold">Publish debook</button>
            </div>
          </div>
        </div>
      </div>
      {/* 1 book 1 community */}
      <div className="h-auto">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col items-center mt-[5rem] space-y-4 mb-20">
            <p className="text-[8px] font-bold text-debook-1 text-center">Stay up to date on every debook.</p>
            <h1 className="text-[35px] font-bold text-debook-1 text-center">Subscribe to our Newsletter</h1>
            <input type="text" placeholder="Type your email..." />
            <button className="bg-debook-1 w-[80%] rounded-3xl py-4 text-[18px] font-bold">Subscribe now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
