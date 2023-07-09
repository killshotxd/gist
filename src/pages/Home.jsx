import logo from "../assets/Vector.png";
import dummy from "../assets/dummyprofile.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { LuSend } from "react-icons/lu";
import { FaRegComment, FaRetweet } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className=" min-h-screen bg-black p-3 md:p-0">
        <div className="py-4 flex items-center justify-center">
          <img width={80} src={logo} alt="" />
        </div>

        <div className="py-6 px-48">
          {/* CARD THREAD */}
          <div className=" flex gap-4 p-4 border-t-2 border-b-2">
            <div>
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src={dummy} />
                </div>
              </div>

              <div className="profileBorder"></div>

              <div>
                <div className="avatar">
                  <div className="w-4 rounded-full">
                    <img src={dummy} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-2 rounded-full">
                    <img src={dummy} />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex  justify-between">
                <p className="text-white">Tanmay</p>
                <p className="text-white">17h</p>
              </div>
              <div className="py-4">
                <p className="text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cumque obcaecati quisquam est rem. Ex, aut recusandae!
                  Pariatur, veniam fuga atque nulla facilis sapiente. Vero
                  pariatur sequi aspernatur temporibus. Tenetur, quo!
                </p>
              </div>

              <div className="py-4 flex gap-4">
                <AiOutlineHeart className="text-white" />
                <FaRegComment className="text-white" />
                <FaRetweet className="text-white" />
                <LuSend className="text-white" />
              </div>
            </div>
          </div>
          {/* CARD THREAD */}
        </div>

        <div className="py-6 px-48">
          {/* CARD THREAD */}
          <div className=" flex gap-4 p-4 border-t-2 border-b-2">
            <div>
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src={dummy} />
                </div>
              </div>

              <div className="profileBorder"></div>

              <div>
                <div className="avatar">
                  <div className="w-4 rounded-full">
                    <img src={dummy} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-2 rounded-full">
                    <img src={dummy} />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex  justify-between">
                <p className="text-white">Tanmay</p>
                <p className="text-white">17h</p>
              </div>
              <div className="py-4">
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, soluta.
                </p>
              </div>

              <div className="py-4 flex gap-4">
                <AiOutlineHeart className="text-white" />
                <FaRegComment className="text-white" />
                <FaRetweet className="text-white" />
                <LuSend className="text-white" />
              </div>
            </div>
          </div>
          {/* CARD THREAD */}
        </div>
      </div>
    </>
  );
};

export default Home;
