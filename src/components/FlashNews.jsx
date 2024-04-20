import React from "react";
import { labels } from "../resources/en-us";
import { Carousel } from "react-bootstrap";
const FlashNews = () => {
  const dummyNewsData = [
    {
      news: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum temporibus consequuntur fuga repellat sunt similique eum? Dicta, eveniet, voluptas, architecto doloremque culpa rem et voluptatu asperiores odio neque in. Amet repellendus explicabo modi, ea libero voluptas nobis beatae omnis numquam incidunt aperiam,rerum accusamus officiis autem rem asperiores commodi Aspernatur.",
      link: "/#news1",
    },
    {
      news: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum temporibus consequuntur fuga repellat sunt similique eum? Dicta, eveniet, voluptas, architecto doloremque culpa rem et voluptatu asperiores odio neque in. Amet repellendus explicabo modi, ea libero voluptas nobis beatae omnis numquam incidunt aperiam,rerum accusamus officiis autem rem asperiores commodi Aspernatur.",
      link: "/#news2",
    },
    {
      news: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum temporibus consequuntur fuga repellat sunt similique eum? Dicta, eveniet, voluptas, architecto doloremque culpa rem et voluptatu asperiores odio neque in. Amet repellendus explicabo modi, ea libero voluptas nobis beatae omnis numquam incidunt aperiam,rerum accusamus officiis autem rem asperiores commodi Aspernatur.",
      link: "/#news3",
    },
    {
      news: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum temporibus consequuntur fuga repellat sunt similique eum? Dicta, eveniet, voluptas, architecto doloremque culpa rem et voluptatu asperiores odio neque in. Amet repellendus explicabo modi, ea libero voluptas nobis beatae omnis numquam incidunt aperiam,rerum accusamus officiis autem rem asperiores commodi Aspernatur.",
      link: "/#news4",
    },
    {
      news: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum temporibus consequuntur fuga repellat sunt similique eum? Dicta, eveniet, voluptas, architecto doloremque culpa rem et voluptatu asperiores odio neque in. Amet repellendus explicabo modi, ea libero voluptas nobis beatae omnis numquam incidunt aperiam,rerum accusamus officiis autem rem asperiores commodi Aspernatur. nobis beatae omnis numquam incidunt aperiam,rerum accusamus officiis autem rem asperiores commodi Aspernatur.",
      link: "/#news5",
    },
  ];

  const singleNewsSlide = ({ news, link }) => {
    return (
      <Carousel.Item>
        <p className=" p-3 text-ellipsis overflow-hidden ">
          {news}{" "}
          <a
            href={link}
            className=" no-underline hover:underline text-yellow-500"
          >
            {labels.readMore}
          </a>
        </p>
      </Carousel.Item>
    );
  };

  return (
    <div className=" mt-[90vh] p-5">
      <div className="p-2 bg-slate-600 bg-opacity-15 h-32 text-white rounded-[1.8rem] border border-gray-800">
        <h1 className=" text-orange-500 text-center text-[1.2rem]">
          {labels.flashNews}
        </h1>
        <Carousel>
          {dummyNewsData.map((news) => singleNewsSlide(news))}
        </Carousel>
      </div>
    </div>
  );
};

export default FlashNews;
