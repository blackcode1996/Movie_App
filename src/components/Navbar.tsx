import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to={"/"}>
            <span className="text-2xl text-white font-semibold">Movipedia</span>
          </Link>

          <div className="flex space-x-4 text-white">
            <Link to={"/movies"}>
              <span>Movies</span>
            </Link>
            <a>
              <span>TV Shows</span>
            </a>
            <a>
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// <nav className="w-[100%] border border-red-800 fixed h-[60px] flex items-center px-40 bg-white">
//   <div className="flex items-center justify-between w-[100%] border border-green-600">
//     <div>
//       <img
//         src="https://movix-app-murex.vercel.app/assets/movix-logo-HTlvmwAF.svg"
//         alt=""
//       />
//     </div>
//     <ul className="flex border border-blue-700 gap-4">
//       <li>
//         <a>
//           <span>Movies</span>
//         </a>
//       </li>
//       <li>
//         <a >
//           <span>TV Shows</span>
//         </a>
//       </li>
//       <li>
//         <a>
//           <i className="fa-solid fa-magnifying-glass"></i>
//         </a>
//       </li>
//     </ul>
//   </div>
// </nav>
