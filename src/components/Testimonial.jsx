
import { useState } from "react";
import ReviewCard from "./ReviewCard";

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const reviews = [
    {
      id: 1,
      customerName: "Barry Allen",
      rating: 5.0,
      feedback:
        "Urban Dwellings exceeded my expectations! Their craftsmanship and attention to detail are top-notch. Highly recommended for quality and style.",
      imgURL: "/customer1.jpeg",
    },
    {
      id: 2,
      customerName: "Patty Spivot",
      rating: 4.8,
      feedback:
        "Thrilled with my Urban Dwellings purchase! Seamless blend of style and comfort. Outstanding customer service. I'll be back!",
      imgURL: "/customer2.jpeg",
    },

    {
      id: 3,
      customerName: "Eobard Thawne",
      rating: 4.9,
      feedback:
        "Urban Dwellings met and exceeded my expectations! Top-notch quality with a personalized touch. Highly recommended!",
      imgURL: "/customer4.jpg",
    },
    {
      id: 4,
      customerName: "Hunter Zolomon",
      rating: 4.7,
      feedback:
        "Impressive quality from Urban Dwellings! The virtual showroom made choosing easy. A new standard in furniture. Well done!",
      imgURL: "/customer3.jpg",
    },
  ];

  return (
    <section className="bg-slate-50 md:mx-20 mx-5 mb-10 py-10">
      <h3 className=" text-center text-[#254D4D] text-4xl font-bold">
        What Our
        <span className="text-[#C14E07]"> Customers </span>
        Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className="mt-16 px-10 flex relative min-h-80  items-center w-full justify-center ">
        {reviews
          .filter((slide) => slide.id === activeSlide)
          .map((review, index) => (
            <ReviewCard
              key={index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
            />
          ))}
        
      </div>
    </section>
  );
};

export default Testimonial;
