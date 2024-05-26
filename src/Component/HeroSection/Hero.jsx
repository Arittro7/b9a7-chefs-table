import bannerImage from '../../assets/Images/banner.jpg';

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-[600px] mt-5 rounded-xl overflow-hidden "
        style={{backgroundImage: `url(${bannerImage})`}}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-[900px]">
            <h1 className="mb-5 text-5xl font-bold">Tasty Adventures Await <span className='text-orange-500'>Dive into Our Recipe Collection!</span></h1>
            <p className="mb-5">
            Welcome to our recipe blog, where culinary creativity meets mouthwatering flavors. Whether you are a seasoned chef or a kitchen novice, explore our diverse collection of recipes that promise to delight your taste buds and inspire your inner foodie.
            </p>
            <button className="btn text-black bg-green-500 rounded-full">Explore Now</button>
            <button className="btn btn-outline text-white ml-3 rounded-full">Our Feedback</button>
          </div>
        </div>
      </div>
      <div>
    <h2 className='text-4xl font-bold mt-28 mb-8 text-center'>Our Recipes</h2>
    <p className='max-w-[850px] mx-auto mb-16 text-center'> Discover a curated collection of delicious and easy-to-follow recipes designed to inspire your culinary adventures. Whether you’re looking for quick weeknight dinners, decadent desserts, or healthy meal options, our diverse selection has something for every taste and occasion. Let’s get cooking!"</p>
  </div>
    </div>
  );
};

export default Hero;
