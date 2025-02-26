import Image from "next/image";
import Sidebar from "./sidebar";
import { motion } from "framer-motion";

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
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Assets</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 shadow-md flex flex-col items-center border hover:border-[#14553E] rounded-lg"
            >
              <Image
                src={category.imageSrc}
                alt={category.title}
                width={120}
                height={180}
                className="rounded-full"
              />
              <h2 className="text-[15px] font-[Inter] font-semibold mt-2">
                {category.title}
              </h2>
              <button className="mt-2 text-[12px] bg-[#14553E] font-[Inter] font-normal text-white px-4 py-2 rounded-[1px]">
                View Assets
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Asset;
