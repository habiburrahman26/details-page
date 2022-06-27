import { useEffect, useState } from 'react';
import Star from '../Star';

const Details = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('image.json')
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  return (
    <div className="w-[320px] md:w-[800px] lg:w-[1000px] mx-auto bg-gray-50 p-4 mt-10">
      <div className="pb-10">
        <h3 className="font-bold text-3xl">
          Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh,
          Matisse, & More
        </h3>
        <small className="flex items-center gap-2">
          <span className="font-semibold text-gray-400">Multi-Day Course</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 stroke-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </small>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        <div>
          <p className="text-base pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quia
            minima placeat dolore enim atque, expedita repellendus quos iusto.
            Porro, corrupti libero modi deserunt numquam officia omnis repellat
            fuga molestias!
          </p>
          <div className="flex items-center gap-1 my-4">
            <img
              src="https://randomuser.me/api/portraits/women/57.jpg"
              alt="user"
              className="rounded-full w-8 8"
            />
            <h4 className="font-semibold text-blue-600">Kimberly R Moseler</h4>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <small>467 total reviews for this teacher</small>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <small>5 reviews for this class</small>
          </div>
          <p className="font-semibold mt-2 mb-5">Completed by 21 learners</p>
          <div className="flex items-center gap-4 pt-3">
            <button className="flex items-center gap-1 px-6 py-2 text-white text-sm bg-blue-600 rounded-full font-semibold">
              <span>See Class Schedule</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button className="flex items-center gap-1 px-6 py-2 text-blue-600 text-sm font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>Save</span>
            </button>
            <button className="flex items-center gap-1 px-6 py-2 text-blue-600 font-semibold text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
        <div className="grid gap-2 grid-rows-2 grid-cols-2">
          <img src={images[0]?.img} alt="" className='row-span-2 h-full'/>
          <img src={images[1]?.img} alt="" className='h-full' />
          <img src={images[2]?.img} alt="" className='h-full' />
        </div>
      </div>
    </div>
  );
};

export default Details;
