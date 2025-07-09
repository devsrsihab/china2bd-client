"use client";
import React, { useState } from "react";

const tabs = [
  "Specification",
  "Description",
  "Seller Info",
  "Reviews",
  "Original Images",
];

const ProductTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Specification");

  return (
    <div className="card mt-2 pt-5">
      {/* Tab Header */}
      <div className="flex gap-4 border-b pb-2">
        {tabs.map((tab) => (
          <h4
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`cursor-pointer text-sm font-semibold relative ${
              selectedTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            {tab}
            {(tab === "Reviews" || tab === "Original Images") && (
              <span className="ml-1 text-[10px] text-white bg-red-500 px-1 rounded-sm topBadge">
                new
              </span>
            )}
          </h4>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {selectedTab === "Specification" && (
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-sm border border-gray-200">
              <tbody>
                {specData.map(([label, value]) => (
                  <tr key={label} className="border-b border-gray-100">
                    <td className="p-2 font-medium text-gray-700 w-1/3">
                      {label}
                    </td>
                    <td className="p-2 text-gray-900">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {selectedTab === "Description" && (
          <div>Description content here...</div>
        )}
        {selectedTab === "Seller Info" && (
          <div>Seller info content here...</div>
        )}
        {selectedTab === "Reviews" && <div>Reviews content here...</div>}
        {selectedTab === "Original Images" && (
          <div>Original images content here...</div>
        )}
      </div>
    </div>
  );
};

// Example spec data
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

export default ProductTabs;
