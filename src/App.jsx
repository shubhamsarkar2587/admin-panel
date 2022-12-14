import './app.css';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import ProductList from './pages/productList/ProductList';
import User from './pages/user/User';
import UserList from './pages/userLIst/UserList';
import NewProduct from './pages/newProduct/NewProduct';

const App = () => {
	return (
		<div className="app">
			<Topbar />
			<div className="flex justify-between mt-2 overflow-x-hidden">
				<div className="w-1/4 xl:w-1/5">
					<Sidebar />
				</div>
				<div className="w-3/4 xl:w-4/5">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/users" element={<UserList />}></Route>
						<Route path="/user/:userId" element={<User />}></Route>
						<Route path="/new-user" element={<NewUser />}></Route>
						<Route path="/products" element={<ProductList />}></Route>
						<Route path="/product/:productId" element={<Product />}></Route>
						<Route path="/new-product" element={<NewProduct />}></Route>
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default App;
