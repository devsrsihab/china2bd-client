import React, { useState } from "react";

const TabSection = () => {
  const tabs = [
    "Specification",
    "Description",
    "Seller Info",
    "Reviews",
    "Original Images",
  ];
  const [activeTab, setActiveTab] = useState("Specification");

  return (
    <div className="card mt-2.5 pt-5">
      {/* Tab Header */}
      <div className="flex flex-wrap justify-center gap-3 mb-2">
        {tabs.map((tab, index) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-1.5 text-sm border border-gray-300 rounded capitalize cursor-pointer ${
              activeTab === tab ? "bg-gray-200 font-semibold" : "bg-white"
            }`}
          >
            {tab}
            {(tab === "Reviews" || tab === "Original Images") && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-600 to-orange-500 text-white text-xs px-1 rounded">
                new
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "Specification" && (
          <div className="px-8 pb-8">
            <table className="w-full border border-gray-300 border-collapse table-fixed">
              <tbody>
                {specData.map(([key, value], index) => (
                  <tr
                    key={key}
                    className={`text-center capitalize ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                    } hover:bg-gray-200`}
                  >
                    <td className="p-4 text-sm font-semibold bg-gray-100 border border-gray-200">
                      {key}
                    </td>
                    <td className="p-4 text-sm border border-gray-200">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* Placeholder for other tabs */}
        {activeTab !== "Specification" && (
          <div className="text-center text-gray-500 text-sm mt-4">
            Content for <strong>{activeTab}</strong> tab coming soon...
          </div>
        )}
      </div>
    </div>
  );
};

export default TabSection;

// Dummy data for specification
const specData: [string, string][] = [
  ["Material function", "High color fastness"],
  ["Supply category", "Spot goods"],
  ["Brand", "Yilin"],
  ["Item number", "240416"],
  ["Shopping categories", "Business gentleman (over 35 years old)"],
  ["Version", "Slim fit"],
  ["Collar type", "Suit collar"],
  ["Placket", "Single row of two buttons"],
  ["Style", "Light business"],
  ["Pattern", "Solid color"],
  ["Margin of error", "2-3"],
  ["Suitable for the season", "Four seasons"],
  ["Is it in stock?", "No"],
  ["Fabric name", "Cotton"],
  ["Content of main fabric components", "100"],
  ["Main fabric composition", "Cotton"],
  ["Lining composition", "No"],
  ["Applicable scenarios", "Leisure"],
  ["Slit method", "No slits"],
  ["Applicable people", "Middle age"],
  ["Craft", "Collage/splicing"],
  ["Year/season of launch", "Spring 2024"],
  ["Style details", "Pocket decoration"],
  ["Clothes length", "Routine"],
  ["Sleeve length", "Long sleeve"],
  ["Garment pocket style", "Mingji line patch pocket"],
  ["Color", "Khaki"],
  ["Size", "XXXXL"],
  ["Clothing hem design", "Round hem"],
  ["Main downstream platforms", "LAZADA"],
  ["Main sales area", "Middle east"],
  ["There are licensable private brands", "No"],
  ["Whether to exclusively supply goods for cross-border export", "Is"],
  ["Original design source", "Is"],
  ["Is there a quality inspection report?", "No"],
  ["Quality inspection report number", "240416"],
  ["Applicable age group", "Adult"],
  ["Applicable gender", "Man"],
  ["Product category", "Casual suit"],
];
