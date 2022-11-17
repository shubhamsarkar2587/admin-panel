import './newUser.css';

const NewUser = () => {
	return (
		<div className="NewUser mx-5">
			<h1 className="text-2xl	font-semibold mb-5">New User</h1>
			<div className="mb-5">
				<form className="flex flex-wrap">
					<div className="w-[400px] flex flex-col my-2.5 mr-10">
						<label className="mb-2.5 text-sm font-semibold text-gray-500">Username</label>
						<input className="new_user_input focus:outline-none p-1 " type="text"/>
					</div>
					<div className="w-[400px] flex flex-col my-2.5 mr-10">
						<label className="mb-2.5 text-sm font-semibold text-gray-500">FullName</label>
						<input className="new_user_input focus:outline-none p-1" type="text"/>
					</div>
					<div className="w-[400px] flex flex-col my-2.5 mr-10">
						<label className="mb-2.5 text-sm font-semibold text-gray-500">Email</label>
						<input className="new_user_input focus:outline-none p-1" type="email" />
					</div>
					<div className="w-[400px] flex flex-col my-2.5 mr-10">
						<label className="mb-2.5 text-sm font-semibold text-gray-500">Password</label>
						<input className="new_user_input focus:outline-none p-1" type="password"/>
					</div>
					<div className="w-[400px] flex flex-col my-2.5 mr-10">
						<label className="mb-2.5 text-sm font-semibold text-gray-500">Phone no</label>
						<input className="new_user_input focus:outline-none p-1" type="text" />
					</div>
					<div className="w-[400px] flex flex-col my-2.5 mr-10">
						<label className="mb-2.5 text-sm font-semibold text-gray-500">Address</label>
						<input className="new_user_input focus:outline-none p-1" type="text"/>
					</div>
				</form>
			</div>
			<div className="">
				<button className="px-5 py-1.5 rounded-md bg-blue-800 font-bold text-white">Create</button>
			</div>
		</div>
	);
};

export default NewUser;
