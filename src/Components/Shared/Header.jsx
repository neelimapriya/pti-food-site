import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="flex items-center justify-between py-6 sticky top-0 bg-[#eeeff0] z-10">
      <h1 className="font-black">pti.</h1>
      <div className="w-full md:px-32 flex items-center gap-2">
        <div className="relative w-full flex items-center">
          <div className="absolute left-3 w-5 h-5 text-orange-500/50">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input type="text" className="w-full pl-10 py-3 bg-white rounded-lg shadow-md shadow-neutral-400/5" placeholder="Search Audiobook" />
        </div>

        <div className="md:relative">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="py-3 px-4 bg-white rounded-lg shadow-md shadow-neutral-400/5 flex items-center gap-2 md:gap-24 transition-colors border border-white focus:border-orange-500/40 text-sm font-bold uppercase text-neutral-600"
          >
            MENU
            <div className="w-5 h-5 text-orange-500/60">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                <path d="M16.6402 8.26824L10.6402 13.2682C9.61589 14.1218 8.33552 12.5854 9.35982 11.7318L15.3598 6.7318C16.3841 5.87822 17.6645 7.41466 16.6402 8.26824Z" fill="currentColor" />
                <path d="M4.64019 6.7318L10.6402 11.7318C11.6645 12.5854 10.3841 14.1218 9.35982 13.2682L3.35982 8.26824C2.33552 7.41466 3.61589 5.87822 4.64019 6.7318Z" fill="currentColor" />
              </svg>
            </div>
          </button>

          <nav className={`py-3 bg-white rounded-lg shadow-md shadow-neutral-400/5 absolute inset-x-0 mt-2 font-medium mx-4 md:mx-0 ${navOpen ? 'block' : 'hidden'}`}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? 'bg-gray-200 text-orange-500' : 'hover:bg-gray-300 hover:text-orange-500 text-neutral-600') + ' py-2 px-4 transition-colors block'}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/details"
                  className={({ isActive }) => (isActive ? 'bg-gray-200 text-orange-500' : 'hover:bg-gray-300 hover:text-orange-500 text-neutral-600') + ' py-2 px-4 transition-colors block'}
                >
                  Details
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/details"
                  className={({ isActive }) => (isActive ? 'bg-gray-200 text-orange-500' : 'hover:bg-gray-300 hover:text-orange-500 text-neutral-600') + ' py-2 px-4 transition-colors block'}
                >
                  Category
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/details"
                  className={({ isActive }) => (isActive ? 'bg-gray-200 text-orange-500' : 'hover:bg-gray-300 hover:text-orange-500 text-neutral-600') + ' py-2 px-4 transition-colors block'}
                >
                  My Favorites
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/details"
                  className={({ isActive }) => (isActive ? 'bg-gray-200 text-orange-500' : 'hover:bg-gray-300 hover:text-orange-500 text-neutral-600') + ' py-2 px-4 transition-colors block'}
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/details"
                  className={({ isActive }) => (isActive ? 'bg-gray-200 text-orange-500' : 'hover:bg-gray-300 hover:text-orange-500 text-neutral-600') + ' py-2 px-4 transition-colors block'}
                >
                  Login/Sing Up
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <button className="transition-colors md:block hidden border-2 border-orange-600 focus:border-black p-3.5 text-white bg-orange-600 rounded-full">
        <figure className="w-5 h-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="7.25" r="5.73" stroke="currentColor" strokeWidth="2" />
            <path d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05" stroke="currentColor" strokeWidth="2" />
          </svg>
        </figure>
      </button>
    </header>
  );
};