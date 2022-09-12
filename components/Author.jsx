import React from 'react';
import Image from 'next/image';


import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author[0].name}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
        src={author[0].photo.url}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author[0].name}</h3>
    <p className="text-white text-ls">{author[0].bio} </p>
    <br></br>
    <p className="text-amber-600 text-ls"> Do Follow 👍 and Comment ✍️ me on Instagram 📸 : <a className='underline text-blue-600 hover:text-blue-900 visited:text-purple-600' href="https://www.instagram.com/divgan2702/"> Divgan2702 </a></p>
  </div>
);

export default Author;
