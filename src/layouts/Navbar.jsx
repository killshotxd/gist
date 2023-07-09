import { AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoMdCreate } from "react-icons/io";
import { BiSolidUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" absolute flex left-[43%] right-[50%] bottom-6 w-min  z-10 bg-black glass rounded-lg shadow-md bac">
      <div className="w-4xl  mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex justify-center items-center space-x-6 text-white">
            <Link>
              <AiOutlineHome size={25} />
            </Link>
            <Link>
              <FiSearch size={25} />
            </Link>
            <Link>
              <IoMdCreate size={25} />
            </Link>
            <Link>
              <BiSolidUser size={25} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
