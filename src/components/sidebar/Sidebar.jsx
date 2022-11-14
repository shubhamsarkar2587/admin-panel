import "./sidebar.css";
// import { Link } from "react-router-dom";
import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar fixed w-1/4 xl:w-1/5 h-full bg-slate-50 overflow-y-auto">
      <div className="p-5 text-[#555]">

        <div className="mb-2.5">
          <h3 className="text-base text-slate-500 font-semibold">Dashboard</h3>
          <ul className="p-[5px]">
            {/* <Link to="/" className="link"> */}
              <li className="p-[5px] rounded-lg hover:bg-slate-100 flex items-center cursor-pointer">
                <LineStyle className="mr-[5px]" />
                Home
              </li>
            {/* </Link> */}
            <li className="p-[5px] rounded-lg hover:bg-slate-100 flex items-center cursor-pointer">
              <Timeline className="mr-[5px]" />
              Analytics
            </li>
            <li className="p-[5px] rounded-lg hover:bg-slate-100 flex items-center cursor-pointer">
              <TrendingUp className="mr-[5px]" />
              Sales
            </li>
          </ul>
        </div>

        <div className="mb-2.5">
          <h3 className="text-base text-slate-500 font-semibold">Quick Menu</h3>
          <ul className="p-[5px]">
            {/* <Link to="/users" className="link"> */}
              <li className="p-[5px] rounded-lg hover:bg-slate-100 flex items-center cursor-pointer">
                <PermIdentity />
                Users
              </li>
            {/* </Link> */}
            {/* <Link to="/products" className="link"> */}
              <li className="p-[5px] rounded-lg hover:bg-slate-100 flex items-center cursor-pointer">
                <Storefront className="mr-[5px]" />
                Products
              </li>
            {/* </Link> */}
            <li className="p-[5px] rounded-lg hover:bg-slate-100 flex items-center cursor-pointer">
              <AttachMoney className="mr-[5px]" />
              Transactions
            </li>
            <li className="p-[5px] rounded-lg hover:bg-slate-100 flex items-center cursor-pointer">
              <BarChart className="mr-[5px]" />
              Reports
            </li>
          </ul>
        </div>

        <div className="mb-2.5">
          <h3 className="text-base text-slate-500 font-semibold">Notifications</h3>
          <ul className="p-[5px]">
            <li className="p-[5px] rounded-lg hover:bg-slate-100 flex items-center cursor-pointer">
              <MailOutline className="mr-[5px]" />
              Mail
            </li>
            <li className="p-[5px] rounded-lg hover:bg-slate-100 flex items-center cursor-pointer">
              <DynamicFeed className="mr-[5px]" />
              Feedback
            </li>
            <li className="p-[5px] rounded-lg hover:bg-slate-100 flex items-center cursor-pointer">
              <ChatBubbleOutline className="mr-[5px]" />
              Messages
            </li>
          </ul>
        </div>

        <div className="mb-2.5">
          <h3 className="text-base text-slate-500 font-semibold">Staff</h3>
          <ul className="p-[5px]">
            <li className="p-[5px] rounded-lg hover:bg-slate-100 flex items-center cursor-pointer">
              <WorkOutline className="mr-[5px]" />
              Manage
            </li>
            <li className="p-[5px] rounded-lg hover:bg-slate-100 flex items-center cursor-pointer">
              <Timeline className="mr-[5px]" />
              Analytics
            </li>
            <li className="p-[5px] rounded-lg hover:bg-slate-100 flex items-center cursor-pointer">
              <Report className="mr-[5px]" />
              Reports
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Sidebar;
