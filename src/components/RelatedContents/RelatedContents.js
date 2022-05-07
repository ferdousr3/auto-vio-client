import React, { useEffect, useState } from 'react';
import SectionTitle from '../share/SectionTitle/SectionTitle';
import { FaChevronRight } from "react-icons/fa";
import './RelatedContent.css'


const RelatedContents = () => {
 const [contents, setContents] = useState([])
 useEffect(()=>{
    // const url = `http://localhost:5000/content`;
   const url= `https://auto-vio.herokuapp.com/content`
   fetch(url)
   .then(res => res.json())
   .then(data => setContents(data))
   
 },[])

  return (
    <>
      <SectionTitle title="Related Contents" textColor="text-black" />

      <div className="container mx-auto pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-6 gap-8">
          {contents.map((content) => (
            <div
              key={content._id}
              className="col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2"
            >
              <div className="div">
                <img className='w-[100%]' src={content.img} alt={content._id} />
                <div className="pt-8 pb-4">
                  <h1 className="pb-4 text-main text-lg font-normal">
                    {content.name}
                  </h1>
                  <p className="text-eight text-base">{content.description}</p>
                </div>
                <button className="flex items-center text-eight text-base my-content-btn ">
                  <span className="border-b border-b-six ">
                    learn More
                  </span>
                  <FaChevronRight className="w-3 h-3 text-sm ml-1  content-btn-element" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedContents;