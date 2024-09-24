import { Link, NavLink, useLocation } from "react-router-dom";

import Paths from "@/routes/paths";

import Community from "@/assets/svg/communi.svg";
import Chats from "@/assets/svg/chat.svg";
import GeneralBoard from "@/assets/svg/board.svg";
import MarketPlace from "@/assets/svg/market.svg";
import WorkPlace from "@/assets/svg/workspace.svg";
import Specs from "@/assets/svg/specs.svg";
import Logo from "@/assets/svg/logo.svg";

const links = [
  {
    name: "My community",
    path: Paths.MY_COMMUNITY,
    SvgIcon: Community,
  },
  {
    name: "Chats",
    path: Paths.CHAT,
    SvgIcon: Chats,
  },
  {
    name: "General Board",
    path: Paths.GENERAL_BOARD,
    SvgIcon: GeneralBoard,
  },
  {
    name: "Market place",
    path: Paths.MARKET_PLACE,
    SvgIcon: MarketPlace,
  },
  {
    name: "Work space",
    path: Paths.WORK_SPACE,
    SvgIcon: WorkPlace,
  },
  {
    name: "Specs",
    path: Paths.SPECS,
    SvgIcon: Specs,
  },
];

function Appbar() {
  const location = useLocation();

  if (location.pathname === Paths.PROFILE) {
    return null;
  }

  const activeStyles = {
    color: "#511393",
  };

  return (
    <div
      className={`fixed bg-black top-0 left-0 right-0 transition-transform duration-500 z-20 border-b-[0.1px] border-b-primary border-opacity-30 h-[55px]`}
    >
      <div className="container pt-1">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link to={Paths.FEED}>
            <Logo className="w-20 h-12" />
          </Link>
          <div className="items-center hidden gap-x-8 lg:flex">
            {links.map(({ path, name, SvgIcon }, i) => (
              <NavLink
                className={`flex flex-col items-center text-white transition-colors ease-in-out`}
                to={path}
                key={i}
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                {({ isActive }) => (
                  <div className={`flex flex-col items-center`}>
                    <SvgIcon fill={isActive ? "#511393" : "#FFF"} />

                    <span className="text-sm font-medium">{name}</span>
                  </div>
                )}
              </NavLink>
            ))}
          </div>

          <input
            type="text"
            // value={query}
            // onFocus={() => setListVisible(true)}
            // onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="bg-[#2D2B26] w-[300px] text-shade1 placeholder:text-shade1 placeholder:text-sm text-lg px-3 h-[45px] rounded-[21px] focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Appbar;
