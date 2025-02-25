import Image from "next/image";
import Sidebar from "./sidebar";

const categories = [
  { id: 1, title: "ELECTRONICS", imageSrc: "/images/asset.png" },
  { id: 2, title: "ELECTRONICS", imageSrc: "/images/asset.png" },
  { id: 3, title: "ELECTRONICS", imageSrc: "/images/asset.png" },
  { id: 4, title: "ELECTRONICS", imageSrc: "/images/asset.png" },
  { id: 5, title: "ELECTRONICS", imageSrc: "/images/asset.png" },
];

const Asset = () => {
  return (
    <div className="flex min-h-screen overflow-auto bg-gray-100">
      {/* Sidebar */}
      <Sidebar />


      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Assets</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-6  shadow-md flex flex-col items-center border   hover:border-[#14553E]"
            >
              <Image
                src={category.imageSrc}
                alt={category.title}
                width={120}
                height={180}
                className="rounded-full"
              />
              <h2 className="text-[15px] font-[Inter] font-semibold mt-2">{category.title}</h2>
              <button className="mt-2 text-[12px]  bg-[#14553E] Font-[Inter] font-normal text-white px-4  py-2 ">
                View Assets
              </button>
            </div>  
          ))}
        </div>
      </div>
    </div>
  );
};

export default Asset;
