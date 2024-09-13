import React from 'react';

function BarChartCard() {
  return (
    <article className="flex flex-col self-stretch px-6 py-7 my-auto bg-white rounded-lg min-h-[358px] min-w-[240px] w-[400px] max-md:px-5">
      <div className="flex gap-10 justify-between items-center w-full text-black">
        <h3 className="self-stretch my-auto text-base font-semibold leading-none w-[115px]">
          Chart Title
        </h3>
        <div className="flex gap-2 items-center self-stretch my-auto text-xs leading-6 text-right">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/58d3fdbd1f19997b89ac4a44fb51169be1deb61126b5493a3e332d5228a8b261?placeholderIfAbsent=true&apiKey=baef1b25185f4ac086aba2d0b9f705da" alt="Upward trend" className="object-contain shrink-0 self-stretch my-auto aspect-[1.07] fill-emerald-500 w-[15px]" />
          <p className="self-stretch my-auto w-[127px]">
            1.10% Since yesterday
          </p>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col self-center px-10 pt-10 pb-16 mt-3 max-w-full text-xs whitespace-nowrap w-[285px] max-md:px-5">
        <div className="self-end mr-8 text-red-400 max-md:mr-2.5">300</div>
        <div className="flex self-start mt-2.5 text-right text-teal-400">
          <div className="grow self-end mt-24 max-md:mt-10">300</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7ca1185-b796-4ddf-9fb7-a08265138dd0?placeholderIfAbsent=true&apiKey=baef1b25185f4ac086aba2d0b9f705da" alt="Bar chart" className="object-contain shrink-0 max-w-full aspect-[1.21] w-[170px]" />
        </div>
      </div>
    </article>
  );
}

export default BarChartCard;