import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const userState = useSelector((state) => state.user);

  const user = userState?.user; // Access the nested user object
  const userName = user?.fname || 'User';
  const userAvatar =
    user?.avatar ||
    'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'; // Default avatar

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      {user && (
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              aria-label="User menu"
              className="btn btn-ghost flex items-center"
            >
              <div className="ml-2">
                <p className="text-lg font-semibold text-gray-800">
                  Welcome, {userName}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden ml-2">
                <img
                  className="w-full h-full object-cover rounded-full"
                  alt="User avatar"
                  src={userAvatar}
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
