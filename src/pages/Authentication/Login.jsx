import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
   return (
      <div>
         <div className="text-black mb-5">
            <h1 className="text-[42px] font-extrabold">Welcome Back</h1>
            <p>Login with DropNest</p>
         </div>

         <div>
            <form>
               <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                     type="email"
                     className="input w-full"
                     placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                     type="password"
                     className="input w-full"
                     placeholder="Password"
                  />
                  <div>
                     <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-primary mt-4 text-black">
                     Login
                  </button>
               </fieldset>
            </form>

            {/* Social Login */}
            <div className="mt-3">
               <p className="text-[#71717A]">
                  Don’t have any account?{" "}
                  <span className="text-[#8FA748]">
                     <Link to={"/register"}>Register</Link>
                  </span>{" "}
               </p>

               <p className="text-[#71717A] text-center my-3">Or</p>

               <button className="btn bg-[#E9ECF1] text-black border-[#e5e5e5] w-full">
                  <FcGoogle size={22} />
                  Login with Google
               </button>
            </div>
         </div>
      </div>
   );
};

export default Login;
