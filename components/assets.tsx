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

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Assets</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center border hover:border-blue-500"
            >
              <Image
                src={category.imageSrc}
                alt={category.title}
                width={100}
                height={100}
                className="rounded-full"
              />
              <h2 className="text-[20px] font-semibold mt-2">{category.title}</h2>
              <button className="mt-2 bg-green-800 text-white px-4 py-2 rounded">
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
