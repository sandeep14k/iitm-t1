import React from 'react';

function Sidebar() {
  return (
    <aside className="flex flex-col bg-white min-h-[945px]">
      <div className="flex overflow-hidden flex-col justify-center items-center px-6 py-6 w-full bg-gray-200 min-h-[72px] max-md:px-5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6205158143242dff97436b34a8581e7ae319999a2c17927eaeee66af70b9be95?placeholderIfAbsent=true&apiKey=baef1b25185f4ac086aba2d0b9f705da" alt="Company logo" className="object-contain aspect-[3.82] w-[84px]" />
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a943f9ab51c35ea1c19496efa9065ef082aae3245c9b865c701374d27c253331?placeholderIfAbsent=true&apiKey=baef1b25185f4ac086aba2d0b9f705da" alt="Sidebar navigation" className="object-contain self-center max-w-full aspect-[0.57] w-[200px]" />
    </aside>
  );
}

export default Sidebar;