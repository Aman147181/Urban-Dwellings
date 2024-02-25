import React, { useState } from "react";
import { Slider } from "@nextui-org/react";
import ProductCard from "../components/ProductCard";
import image from "../assets/urbanImages/Chair/chair1.png";
const Shop = () => {
  const [value, setValue] = React.useState([100, 300000]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categoryArray] = useState([
    "all",
    "couch",
    "table",
    "lamp",
    "vase",
    "decoration",
    "chair",
    "shelf",
    "drawer",
  ]);
  const furnitureapi = {
    payload: [
      {
        id: "frntrchc1",
        type: "couch",
        name: "Single Couch",
        description:
          "A small sofa for one person, perfect for relaxing on the porch, reading a book, or brewing warm tea.",
        currency: "Rp",
        price: 1599000,
        img_link:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
      },
      {
        id: "frntrchc2",
        type: "couch",
        name: "Big Size Sofa",
        description:
          "A large-sized sofa suitable for gathering with family, using super-soft foam coated with fine and soft material for comfort on the skin.",
        currency: "Rp",
        price: 2599000,
        img_link:
          "https://images.unsplash.com/photo-1550254478-ead40cc54513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=661&q=80",
      },
      {
        id: "frntrchc3",
        type: "couch",
        name: "Big Size Leather Sofa",
        description:
          "A large-sized sofa suitable for gathering with family, using super-soft foam coated with high-quality leather material for comfort on the skin and crack resistance.",
        currency: "Rp",
        price: 4599000,
        img_link:
          "https://images.unsplash.com/photo-1628512743826-2c28a508ad5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
      },
      {
        id: "frntrchr1",
        type: "chair",
        name: "Single Black Chair",
        description:
          "A chair with wooden legs and high-quality plastic as the backrest, coated with super-soft foam for comfortable long-term use.",
        currency: "Rp",
        price: 599000,
        img_link:
          "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      },
      {
        id: "frntrchr2",
        type: "chair",
        name: "Simple Cafe Chair",
        description:
          "Tall wooden chair suitable for the kitchen with cafe-style, using high-quality wood for durability and resistance to decay.",
        currency: "Rp",
        price: 199000,
        img_link:
          "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrchr3",
        type: "chair",
        name: "Simple Metal Chair",
        description:
          "Chair made of rust-resistant metal material, strong and durable.",
        currency: "Rp",
        price: 299000,
        img_link:
          "https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrshlf1",
        type: "shelf",
        name: "Long Hanging Shelf",
        description:
          "Minimalist wall shelf made of high-quality wood with a long size, suitable for decorating the living room to look more elegant.",
        currency: "Rp",
        price: 159000,
        img_link:
          "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      },
      {
        id: "frntrshlf2",
        type: "shelf",
        name: "Trigonometri Hanging Shelf",
        description:
          "Wall shelf made of high-quality wood with metal supports in trigonometric shape, making it look minimalistic and elegant to be placed on any side of the room.",
        currency: "Rp",
        price: 359000,
        img_link:
          "https://images.unsplash.com/photo-1593085260707-5377ba37f868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=923&q=80",
      },
      {
        id: "frntrshlf3",
        type: "shelf",
        name: "Bed-Side Shelf",
        description:
          "A small shelf that also serves as a table, suitable to be placed on the side of your bed to store books you are reading along with accompanying drinks and snacks.",
        currency: "Rp",
        price: 829000,
        img_link:
          "https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrlmp1",
        type: "lamp",
        name: "Architec Lamp",
        description:
          "Elegant architect lamp with a minimalist design, suitable for creating an ambient effect in the corner of the room or on your work desk.",
        currency: "Rp",
        price: 329000,
        img_link:
          "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrlmp2",
        type: "lamp",
        name: "Wooden Hanging Lamp",
        description:
          "Hanging lamp with geometric style and wooden texture, resulting in an elegant and minimalist design.",
        currency: "Rp",
        price: 289000,
        img_link:
          "https://images.unsplash.com/photo-1530603907829-659ab5ec057b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrlmp3",
        type: "lamp",
        name: "Mini Architec Lamp",
        description:
          "Small-sized architect lamp with an elegant and minimalist design, suitable for placing on your work desk or study area.",
        currency: "Rp",
        price: 289000,
        img_link:
          "https://images.unsplash.com/photo-1534105615256-13940a56ff44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrvs1",
        type: "vase",
        name: "Clear Minimalist Vase",
        description:
          "Clear glass flower vase with an elegant design, suitable for placing in the living room.",
        currency: "Rp",
        price: 249000,
        img_link:
          "https://images.unsplash.com/photo-1581912492723-688317ba2162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=679&q=80",
      },
      {
        id: "frntrvs2",
        type: "vase",
        name: "Petal Vase",
        description:
          "White glass flower vase with a unique design symbolizing tranquility and warmth, suitable for placing on the family table.",
        currency: "Rp",
        price: 289000,
        img_link:
          "https://images.unsplash.com/photo-1612620535624-f6695d4864bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      },
      {
        id: "frntrvs3",
        type: "vase",
        name: "Hanano Vase",
        description:
          "Clear glass flower vase with smoke-brown accents and a tapered tube design, creating a full yet minimalistic effect.",
        currency: "Rp",
        price: 269000,
        img_link:
          "https://images.unsplash.com/photo-1578500351865-d6c3706f46bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrdrwr1",
        type: "drawer",
        name: "Single Drawer Set",
        description:
          "Single drawer with 3 levels, with the bottom part being the largest drawer, featuring a minimalist design suitable for placement in the family room or living room.",
        currency: "Rp",
        price: 429000,
        img_link:
          "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrtbl1",
        type: "table",
        name: "Round Simple Table",
        description:
          "Round table with a minimalist design, using wood for the legs and high-quality plastic for the tabletop, making it suitable for both indoor and outdoor use.",
        currency: "Rp",
        price: 659000,
        img_link:
          "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      },
      {
        id: "frntrdcr1",
        type: "decoration",
        name: "Artificial Succulent Plant Set",
        description:
          "Imitation succulent plants made of plastic with a 99% resemblance to real ones, suitable for decorating your work desk and providing a green ambiance to refresh your eyes.",
        currency: "Rp",
        price: 99000,
        img_link:
          "https://images.unsplash.com/photo-1595351475754-8a520e0bc3a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      },
      {
        id: "frntrdcr2",
        type: "decoration",
        name: "Artificial Cactus Set",
        description:
          "Imitation cactus plants made of plastic with a 99% resemblance to real ones, suitable for decorating the family room and providing a refreshing touch in the midst of a desert.",
        currency: "Rp",
        price: 149000,
        img_link:
          "https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
      {
        id: "frntrdcr3",
        type: "decoration",
        name: 'Poster "GET SHIT DONE"',
        description:
          'Poster with the text "GET SHIT DONE" in a minimalist design and high-quality wooden frame, suitable for display in your work space.',
        currency: "Rp",
        price: 179000,
        img_link:
          "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
    ],

    message: "Data sent successfully",
  };
  return (
    <div className="py-20 sm:pt-28">
      <div className="w-full flex flex-col px-5 relative sm:px-12 md:px-16 lg:px-20">
        <img
          src="/shop.jpg"
          className="w-full sepia-0 max-h-96 object-cover object-center"
        />
        <div className="flex flex-col items-start space-y-4 absolute top-20 sm:top-24 md:top-28 lg:top-32 left-8 sm:left-20 md:left-24 lg:left-28 ">
          <h1 className=" text-white drop-shadow-xl  leading-[1.2]   text-xl sm:text-2xl md:text-3xl lg:text-4xl font-volkhov ">
            Our goods have the best quality
            <br /> and material in the world
          </h1>
          <button
            onClick={() =>
              window.scroll({
                top: 460,
                behavior: "smooth",
              })
            }
            className="bg-orange-700 font-roboto rounded-md hover:bg-orange-600 text-xs sm:text-base text-white px-6 py-2 uppercase"
          >
            shop now
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 w-full mt-16 gap-10 px-5 sm:px-12 md:px-16  lg:px-20">
        <div className="md:col-span-1 max-w-64 md:block hidden  h-96  ">
          <h1 className="font-roboto font-semibold text-[#062338] mb-2">
            Filter By Price (Nrs)
          </h1>
          <Slider
            disableThumbScale={true}
            showTooltip={true}
            size="md"
            step={100}
            maxValue={1000000}
            minValue={0}
            value={value}
            onChange={setValue}
            className="max-w-sm"
          />
          <h1 className="font-roboto font-semibold text-[#062338] mt-5 mb-2">
            Product Category
          </h1>
          <div className="flex flex-col w-full">
            {categoryArray.map((el) => (
              <h1
                onClick={() => setSelectedCategory(el)}
                className={
                  selectedCategory == el
                    ? "text-[#254D4D] font-medium hover:cursor-pointer"
                    : "text-slate-400 hover:cursor-pointer"
                }
              >
                {el}
              </h1>
            ))}
          </div>
        </div>
        <div className="col-span-3 min-h-96 max-h-[500px] px-2 overflow-y-auto grid gap-10 grid-cols-2 xl:grid-cols-3">
          {furnitureapi.payload
            .filter((furniture) => {
              // Filter by price range
              const priceInRange =
                furniture.price >= value[0] && furniture.price <= value[1];

              // Filter by category (if not 'all' category)
              const categoryMatch =
                selectedCategory === "all" ||
                furniture.type === selectedCategory;

              // Return true if both conditions are met
              return priceInRange && categoryMatch;
            })
            .map((furniture, index) => (
              <div className="col-span-1" key={index}>
                <ProductCard imgUrl={furniture.img_link} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
