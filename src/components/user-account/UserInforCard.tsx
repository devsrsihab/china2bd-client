import React from "react";

const UserInfoCard: React.FC = () => {
  return (
    <div className="min-h-[150px] text-white text-center p-6 flex flex-col items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-gray-400 mb-2 flex items-center justify-center text-xl text-white">
        Q
      </div>
      <h1 className="text-lg uppercase mb-1 text-black">
        Quasi quae qui qui v
      </h1>
      <h1 className="text-sm mb-1 text-gray-500">md.srsihabzone@gmail.com</h1>
      <a
        href="/account/points"
        className="bg-red-100 mt-1 px-4 py-1 text-black rounded-full text-lg flex items-center justify-center gap-1"
      >
        <img
          src="https://skybuybd.com/_next/static/media/point.7d578a08.png"
          alt="point"
          srcSet=""
          className="w-5"
        />
        <p className="text-sm">0 Point</p>
      </a>
    </div>
  );
};

export default UserInfoCard;
