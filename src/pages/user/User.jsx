import "./user.css";
import { pngAssets } from "../../assets/asset"
import { Link } from "react-router-dom";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Upload } from "@mui/icons-material";

const User = () => {
  return (
    <div className="user m-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-2xl font-bold	">Edit User</h1>
        <Link to={"/new-user"}>
          <button className="p-1.5 text-white text-base bg-teal-500 rounded-md cursor-pointer">Create New User</button>
        </Link>
      </div>

      <div className="flex">
        <div className="userShow global_shadow mr-5 p-5">
          <div className="flex items-center">
            <img className="rounded-full h-10 w-10 object-cover mr-2.5" alt="" src={pngAssets.userImage2}></img>
            <div className="flex flex-col">
              <span className="font-semibold">Banner</span>
              <span className="font-light">Software</span>
            </div>
          </div>

          <div className="flex flex-col mt-2.5">
            <span className="userAccount_Details text-sm font-semibold mt-2.5 mb-1.5">Account Details</span>
            <div className="flex items-center my-2.5 text-[#444]">
              <PermIdentity className="mr-2.5 userDetail_icon" />
              <span>banner123</span>
            </div>
            <div className="flex items-center my-2.5 text-[#444]">
              <CalendarToday className="mr-2.5 userDetail_icon" />
              <span>12 Sep 2022</span>
            </div>
            <span className="userAccount_Details text-sm font-semibold mt-2.5 mb-1.5">Contact Details</span>
            <div className="flex items-center my-2.5 text-[#444]">
              <PhoneAndroid className="mr-2.5 userDetail_icon" />
              <span>+91 445454454</span>
            </div>
            <div className="flex items-center my-2.5 text-[#444]">
              <MailOutline className="mr-2.5 userDetail_icon" />
              <span>banner@gmail.com</span>
            </div>
            <div className="flex items-center my-2.5 text-[#444]">
              <LocationSearching className="mr-2.5 userDetail_icon" />
              <span>New York</span>
            </div>
          </div>

        </div>
        <div className="userUpdate global_shadow p-5">
          <span className="text-2xl	font-semibold">Edit</span>
          <form className="flex justify-between mt-2.5">

            <div className="">
              <div className="flex flex-col my-2.5">
                <label className="mb-[5px] text-sm">Username</label>
                <input className="w-64 border-b-2 border-gray-300 focus:outline-none" type="text" placeholder="username"/>
              </div>
              <div className="flex flex-col my-2.5">
                <label className="mb-[5px] text-sm">Date</label>
                <input className="w-64 border-b-2 border-gray-300 focus:outline-none" type="text" placeholder="12 Sep 2022"/>
              </div>
              <div className="flex flex-col my-2.5">
                <label className="mb-[5px] text-sm">Contact No</label>
                <input className="w-64 border-b-2 border-gray-300 focus:outline-none" type="text" placeholder="+91 445454454"/>
              </div>
              <div className="flex flex-col my-2.5">
                <label className="mb-[5px] text-sm">Email</label>
                <input className="w-64 border-b-2 border-gray-300 focus:outline-none" type="email" placeholder="banner@gmail.com"/>
              </div>
              <div className="flex flex-col my-2.5">
                <label className="mb-[5px] text-sm">Location</label>
                <input className="w-64 border-b-2 border-gray-300 focus:outline-none" type="text" placeholder="New York"/>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex items-center">
                <img className="rounded-lg w-24 h-24 object-cover mr-2.5" alt="" src={pngAssets.userImage2}></img>
                <label htmlFor="file">
                  <Upload className="cursor-pointer" />
                </label>
                <input className="hidden" type="file" id="file" />
              </div>
              <button className="p-[5px] rounded-md bg-blue-800 font-bold text-white">Update</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default User;
