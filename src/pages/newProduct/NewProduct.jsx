import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="newProduct mx-5">
      <h1 className="text-2xl	font-semibold mb-5">New Product</h1>
      <div className="mb-5">
        <form className="flex flex-col">
          <div className="w-[400px] flex flex-col my-2.5 mr-10">
            <label className="mb-2.5 text-sm font-semibold text-gray-500">Image</label>
            <input className="new_product_input focus:outline-none p-1 " type="file"/>
          </div>
          <div className="w-[400px] flex flex-col my-2.5 mr-10">
            <label className="mb-2.5 text-sm font-semibold text-gray-500">Name</label>
            <input className="new_product_input focus:outline-none p-1" type="text"/>
          </div>
          <div className="w-[400px] flex flex-col my-2.5 mr-10">
            <label className="mb-2.5 text-sm font-semibold text-gray-500" >Stock</label>
            <input className="new_product_input focus:outline-none p-1" type="text"/>
          </div>
          <div className="w-[400px] flex flex-col my-2.5 mr-10">
            <label className="mb-2.5 text-sm font-semibold text-gray-500" type="text">Active</label>
            <select className="new_product_input rounded focus:outline-none p-1.5" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </form>
      </div>
      <div className="">
        <button className="px-5 py-1.5 rounded-md bg-blue-800 font-bold text-white">Create</button>
      </div>
    </div>
  )
}

export default NewProduct;
