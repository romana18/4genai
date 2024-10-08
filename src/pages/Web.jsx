import React, { useState, useEffect } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { RiWechatChannelsLine } from "react-icons/ri";
import { GrResources } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import SearchComponent from '../components/Seach/Search';

function Web() {
  const [activeTab, setActiveTab] = useState(4);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState(['4Gen.AI?', 'Upcoming Fests', 'What is Gen AI?', 'Tax saving Idea']);
  const [loading, setLoading] = useState(true);
  const [showSources, setShowSources] = useState(true);

  const query = "What is POS";
  const sources = ["Website 1", "Website 2", "Website 3", "Website 4"];
  const summaryPoints = [
    {
      title: "POS stands for Point of Sale",
      content: "POS is the place where a sales transaction occurs. It’s a system used by businesses to handle sales, process payments, and manage inventory. The term 'Point of Sale' can refer to both the physical location of the transaction, such as a checkout counter, and the technology used to facilitate the transaction."
    },
    {
      title: "System for Managing Sales Transactions",
      content: "A POS system includes both hardware and software designed to handle sales processes. Hardware components may include cash registers, barcode scanners, and receipt printers. The software aspect handles transaction processing, sales tracking, and inventory management, ensuring that the business operates smoothly."
    },
    {
      title: "Hardware and Software Integration",
      content: "POS systems combine various hardware components like touch screens, card readers, and cash drawers with software that integrates all aspects of sales and inventory management. This integration helps businesses streamline operations, reduce errors, and improve overall efficiency."
    },
    {
      title: "Hardware and Software Integration",
      content: "POS systems combine various hardware components like touch screens, card readers, and cash drawers with software that integrates all aspects of sales and inventory management. This integration helps businesses streamline operations, reduce errors, and improve overall efficiency."
    }
  ];
  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150"
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (value) {
      setSuggestions(['Market size of longevity technology', 'Upcoming Fests', 'What is Gen AI?', 'Tax saving Idea'].filter(s => s.toLowerCase().includes(value.toLowerCase())));
    } else {
      setSuggestions(['Market size of longevity technology', 'Upcoming Fests', 'What is Gen AI?', 'Tax saving Idea']);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearch(suggestion);
    setSuggestions([]);
  };

  const handleSearch = () => {
    setActiveTab(1);
  };

  const renderDropdowns = () => {};

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-3/4">
        <div role="status" className="max-w-sm animate-pulse">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          {images.map((_, index) => (
            <div key={index} className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM8 14H4V8h4v6Zm8 0h-4V8h4v6Zm1-10H3V3h14v1Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col p-6 space-y-6">
      <div className="flex-1 flex">
        <div className="flex-1 pr-6 overflow-y-auto">
          <h1 className="text-2xl font-semibold mb-6 text-[#14343B]">{`Showing Results from "${query}"`}</h1>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center text-[#14343B]">
                <GrResources className='mr-2 text-gray-600 text-xl' />
                Sources
              </h2>
              <button onClick={() => setShowSources(!showSources)} className="text-gray-600 hover:text-gray-800">
                {showSources ? <FaArrowUp /> : <FaArrowDown />}
              </button>
            </div>
            {showSources && (
              <div className="flex flex-wrap gap-4">
                {sources.map((source, index) => (
                  <div key={index} className="border p-4 bg-[#F3F3ED] rounded-lg shadow-lg w-1/4 min-w-[150px] relative">
                    <p className="text-lg">{source}</p>
                    <span className="absolute bottom-2 right-2 bg-gray-100 text-[#22808D] p-1 rounded-full text-sm">{index + 1}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center text-[#14343B]">
              <RiWechatChannelsLine className='mr-2 text-gray-600 text-xl' />
              Answers
            </h2>
            <div className="space-y-6">
              {summaryPoints.map((point, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                  <p className="text-[#3D555B]">{point.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 mt-24 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="w-full h-20 border p-1 rounded-lg shadow-md overflow-hidden">
                <img src={image} alt={`Placeholder ${index + 1}`} className="w-full h-full object-cover"/>
              </div>
            ))}
          </div>
          <button className="mt-4 border border-gray-300 hover:bg-[#ddddd6] text-black py-2 px-4 rounded-md flex items-center">
            <AiOutlinePlus className='mr-2 text-gray-600 text-xl' />
            Generate more
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md">
        <SearchComponent
          search={search}
          setSearch={setSearch}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
          renderDropdowns={renderDropdowns}
          suggestions={suggestions}
          handleSuggestionClick={handleSuggestionClick}
        />
      </div>
    </div>
  );
}

export default Web;
