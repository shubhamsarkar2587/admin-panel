import "./widgetLg.css";
import { pngAssets } from "../../assets/asset"

const WidgetLg = () => {

  const Button = ({ type }) => {
    return <button className={`rounded-lg py-1 px-1.5 bg-[#eeeef7] text-[#555] cursor-pointer ${type}`}>{type}</button>
  }

  return (
    <div className="widget_lg global_shadow p-5 w-full overflow-x-auto">
      <span className="font-semibold text-xl">Latest transaction</span>
      <table className="w-full my-5">
        <tbody>
          <tr className="text-left">
            <th className="mr-2.5">Customer</th>
            <th className="mr-2.5">Date</th>
            <th className="mr-2.5">Amount</th>
            <th className="mr-2.5">Status</th>
          </tr>

          <tr className="text-left">
            <td className="flex items-center mr-2.5">
              <img className="rounded-full h-10 w-10 object-cover mr-2.5" src={pngAssets.userImage} alt="" />
              <span>Susan</span>
            </td>
            <td className="center mr-2.5">13 Jan 2022</td>
            <td className="mr-2.5">$343</td>
            <td className="mr-2.5">
              <Button type="approved" />
            </td>
          </tr>

          <tr className="text-left">
            <td className="flex items-center mr-2.5">
              <img className="rounded-full h-10 w-10 object-cover mr-2.5" src={pngAssets.userImage} alt="" />
              <span>Susan</span>
            </td>
            <td className="center mr-2.5">13 Jan 2022</td>
            <td className="mr-2.5">$343</td>
            <td className="mr-2.5">
              <Button type="approved" />
            </td>
          </tr>

          <tr className="text-left">
            <td className="flex items-center mr-2.5">
              <img className="rounded-full h-10 w-10 object-cover mr-2.5" src={pngAssets.userImage} alt="" />
              <span>Susan</span>
            </td>
            <td className="center mr-2.5">13 Jan 2022</td>
            <td className="mr-2.5">$343</td>
            <td className="mr-2.5">
              <Button type="approved" />
            </td>
          </tr>

          <tr className="text-left">
            <td className="flex items-center mr-2.5">
              <img className="rounded-full h-10 w-10 object-cover mr-2.5" src={pngAssets.userImage} alt="" />
              <span>Susan</span>
            </td>
            <td className="center mr-2.5">13 Jan 2022</td>
            <td className="mr-2.5">$343</td>
            <td className="mr-2.5">
              <Button type="approved" />
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
};

export default WidgetLg;
