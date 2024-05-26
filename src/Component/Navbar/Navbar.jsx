import user from '../../assets/Images/user.png'


const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>

    {/* responsive ended here */}
    <a className="text-2xl font-bold"><span>Recipe<span className='text-rose-400'>Calories</span></span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
    </ul>
  </div>


  {/* Search and User Icon */}
  <div className="navbar-end items-center">
  <input type="text" placeholder="Search" className="input input-bordered input-primary w-[212px] max-w-xs my-3 mx-6" />
  <img className='w-12 ml-4 bg-green-400 rounded-full p-2' src={user} alt="" />
  </div>
</div>
    </div>
  );
};

export default Navbar;