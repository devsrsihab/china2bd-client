import React from "react";

// define props type
type PageHeaderWithDateProps = {
  title: string;
  date: string;
};

const PageHeaderWithDate: React.FC<PageHeaderWithDateProps> = ({
  title,
  date,
}) => {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 p-4 bg-white">
      <h4 className="font-bold text-[17px] text-gray-800 leading-tight">
        {title}
      </h4>
      <p className="font-medium">{date}</p>
    </div>
  );
};

export default PageHeaderWithDate;
