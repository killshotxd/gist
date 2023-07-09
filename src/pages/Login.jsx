import logo from "../assets/Image (1).png";
import vector from "../assets/Vector.png";
const Login = () => {
  return (
    <>
      <div className=" min-h-screen md:flex-row flex-col-reverse flex justify-center bg-black p-3 md:p-0">
        {/* LEFT DIV */}
        <div className="left md:w-[50vw]  ">
          <div className="flex flex-col justify-center items-center md:h-[100vh]  m-auto">
            {/* LEFT TOP DIV */}
            <div className="flex md:w-[30vw] flex-col md:justify-end items-start md:h-[70vh]">
              <p className="text-white flex items-center text-6xl font-bold gap-4">
                <span className="mb-2">Gist</span>
                <span>
                  <img width={50} src={vector} alt="logo" />
                </span>
              </p>

              <p className="text-white">
                Killshot&apos;s text-based conversation app
              </p>
            </div>
            {/* LEFT BOTTOM DIV */}
            <div className="flex justify-start md:items-baseline pt-10 md:w-[30vw] md:h-[60vh]">
              <p className="text-white text-xl">
                Get access to the login and thread page of the newly released
                gist app by killshot for absolutely free 🔥
              </p>
            </div>
            <div className="flex justify-start md:items-baseline md:w-[30vw] md:h-[90vh]">
              <button className="btn text-white hover:text-black glass">
                Login Now
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT DIV */}
        <div className="right min-w-[50vw]">
          <img width={700} src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Login;
