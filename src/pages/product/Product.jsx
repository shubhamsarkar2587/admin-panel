import "./product.css";
import { Link } from "react-router-dom";
import { pngAssets } from "../../assets/asset";
import Chart from "../../components/chart/Chart";
import { productChartData } from "../../utils/dummyData";
import { Publish } from "@mui/icons-material";

const Product = () => {
  return (
    <div className="m-5">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Product</h1>
        <Link to="/new-product">
          <button className="py-1.5 px-2.5 text-white text-base bg-teal-500 rounded-md cursor-pointer">Create New Product</button>
        </Link>
      </div>

      <div className="flex">
        <div className="product_chart global_shadow mr-2.5 p-4">
          <Chart data={productChartData} title="Sales Performance" grid={true} />
        </div>

        <div className="product_detail global_shadow ml-2.5 p-4">
          <div className="flex items-center">
            <img alt="" className="rounded-full w-10 h-10 object-cover mr-5" src={pngAssets.appleImage} />
            <span className="font-semibold">Apple</span>
          </div>
          <div className="">
            <div className="flex justify-between w-36	mt-2.5">
              <span className="">id:</span>
              <span className="font-light">33434</span>
            </div>
            <div className="flex justify-between w-36	mt-2.5">
              <span className="">sales:</span>
              <span className="font-light">33434</span>
            </div>
            <div className="flex justify-between w-36	mt-2.5">
              <span className="">active:</span>
              <span className="font-light">yes</span>
            </div>
            <div className="flex justify-between w-36	mt-2.5">
              <span className="">in stock:</span>
              <span className="font-light">33434</span>
            </div>

          </div>
        </div>
      </div>

      <div className="global_shadow my-5 p-4">
        <form className="flex justify-between">
          <div className="flex flex-col">
            <label className="mb-2 text-gray-600">Product Name</label>
            <input className="mb-2.5 border-b-2 border-gray-500 focus:outline-none" type="text" placeholder="Apple" />
            <label className="mb-2 text-gray-600" >In Stock</label>
            <select className="mb-2.5 border border-solid border-gray-300 rounded focus:outline-none" name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label className="mb-2 text-gray-600">In Stock</label>
            <select className="mb-2.5 border border-solid border-gray-300 rounded focus:outline-none" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex items-center">
              <img className="rounded-lg w-24 h-24 object-cover mr-2.5" src={pngAssets.appleImage} alt="" />
              <label for="file">
                <Publish className="cursor-pointer" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="p-[5px] rounded-md bg-blue-800 font-bold text-white">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
