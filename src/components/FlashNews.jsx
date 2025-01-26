import { labels } from "../resources/en-us";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
const FlashNews = () => {
  const dummyNewsData = [
    {
      news: " 0Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum temporibus consequuntur fuga repellat sunt similique eum? Dicta, eveniet, voluptas, architecto doloremque culpa rem et voluptatu asperiores odio neque in. Amet repellendus explicabo modi, ea libero voluptas nobis beatae omnis numquam incidunt aperiam,rerum accusamus officiis autem rem asperiores commodi Aspernatur.",
      link: "/#news1",
    },
    {
      news: " 1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum temporibus consequuntur fuga repellat sunt similique eum? Dicta, eveniet, voluptas, architecto doloremque culpa rem et voluptatu asperiores odio neque in. Amet repellendus explicabo modi, ea libero voluptas nobis beatae omnis numquam incidunt aperiam,rerum accusamus officiis autem rem asperiores commodi Aspernatur.",
      link: "/#news2",
    },
    {
      news: " 2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum temporibus consequuntur fuga repellat sunt similique eum? Dicta, eveniet, voluptas, architecto doloremque culpa rem et voluptatu asperiores odio neque in. Amet repellendus explicabo modi, ea libero voluptas nobis beatae omnis numquam incidunt aperiam,rerum accusamus officiis autem rem asperiores commodi Aspernatur.",
      link: "/#news3",
    },
    {
      news: " 3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum temporibus consequuntur fuga repellat sunt similique eum? Dicta, eveniet, voluptas, architecto doloremque culpa rem et voluptatu asperiores odio neque in. Amet repellendus explicabo modi, ea libero voluptas nobis beatae omnis numquam incidunt aperiam,rerum accusamus officiis autem rem asperiores commodi Aspernatur.",
      link: "/#news4",
    },
    {
      news: " 4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum temporibus consequuntur fuga repellat sunt similique eum? Dicta, eveniet, voluptas, architecto doloremque culpa rem et voluptatu asperiores odio neque in. Amet repellendus explicabo modi, ea libero voluptas nobis beatae omnis numquam incidunt aperiam,rerum accusamus officiis autem rem asperiores commodi Aspernatur. nobis beatae omnis numquam incidunt aperiam,rerum accusamus officiis autem rem asperiores commodi Aspernatur.",
      link: "/#news5",
    },
  ];

  const SingleNewsSlide = ({ news, link }) => {
    return (
      <p className="text-wrap w-full " key={link}>
        {news}
        <a
          href={link}
          className=" no-underline hover:underline text-yellow-500"
        >
          {labels.readMore}
        </a>
      </p>
    );
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    initialSlide: 0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    fade: true,
    className: "w-full",
  };
  return (
    <div className=" p-5">
      <div className="p-6 bg-slate-600 bg-opacity-15  text-white rounded-[1.8rem] border-1 border-slate-700 relative">
        <h1 className=" text-orange-500 text-center text-[1.2rem]">
          {labels.flashNews}
        </h1>
        <StyledSlider>
          <Slider {...settings}>
            {/* {dummyNewsData.map((n) => ( */}
            <SingleNewsSlide {...dummyNewsData[0]} />
            <SingleNewsSlide {...dummyNewsData[1]} />
            <SingleNewsSlide {...dummyNewsData[2]} />
            <SingleNewsSlide {...dummyNewsData[3]} />
            {/* ))} */}
          </Slider>
        </StyledSlider>
      </div>
    </div>
  );
};

export default FlashNews;

const StyledSlider = styled.section`
  height: 6rem;
  .slick-slider .slick-list .slick-track {
    width: 100% !important;
  }
`;
