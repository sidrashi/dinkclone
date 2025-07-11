import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 "></div>
    </div>
  );
}

export default Loader;
