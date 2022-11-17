import './widgetSm.css';
import { pngAssets } from '../../assets/asset';
import { Visibility } from '@mui/icons-material';

const WidgetSm = () => {
	return (
		<div className="widget_sm global_shadow p-5 w-full overflow-x-auto mr-5">
			<span className="font-semibold text-xl">New Join Members</span>
			<ul>
				<li className="flex items-center justify-between my-5">
					<img className="rounded-full h-10 w-10 object-cover" alt="user_profile" src={pngAssets.userImage}/>
					<div className="flex flex-col mx-6">
						<span className="font-semibold">Banner</span>
						<span className="font-light">Tony</span>
					</div>
					<button className="flex items-center rounded-lg py-2 px-2.5 bg-[#eeeef7] text-[#555] cursor-pointer">
						<Visibility className="display_icon mr-2.5" />
            display
					</button>
				</li>

				<li className="flex items-center justify-between my-5">
					<img className="rounded-full h-10 w-10 object-cover" alt="user_profile" src={pngAssets.userImage}/>
					<div className="flex flex-col mx-6">
						<span className="font-semibold">Banner</span>
						<span className="font-light">Tony</span>
					</div>
					<button className="flex items-center rounded-lg py-2 px-2.5 bg-[#eeeef7] text-[#555] cursor-pointer">
						<Visibility className="display_icon mr-2.5" />
            display
					</button>
				</li>

				<li className="flex items-center justify-between my-5">
					<img className="rounded-full h-10 w-10 object-cover" alt="user_profile" src={pngAssets.userImage}/>
					<div className="flex flex-col mx-6">
						<span className="font-semibold">Banner</span>
						<span className="font-light">Tony</span>
					</div>
					<button className="flex items-center rounded-lg py-2 px-2.5 bg-[#eeeef7] text-[#555] cursor-pointer">
						<Visibility className="display_icon mr-2.5" />
            display
					</button>
				</li>
			</ul>
		</div>
	);
};

export default WidgetSm;
