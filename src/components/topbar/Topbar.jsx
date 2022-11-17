import { Link } from 'react-router-dom';
import { Language, NotificationsNone, Settings } from '@mui/icons-material';
import { svgAssets } from '../../assets/asset';

const Topbar = () => {
	return (
		<div className="topbar top-0 w-full h-14 bg-white sticky z-50">
			<div className="h-full px-5 flex items-center justify-between">
				<div className="leftSide">
					<Link to="/">
						<span className="font-bold text-3xl text-blue-800 cursor-pointer">Admin Panel</span>
					</Link>
				</div>
				<div className="rightSide flex items-center justify-center">
					<div className="relative mr-2.5 text-gray-500">
						<NotificationsNone />
						<span
							className="absolute text-white w-[15px] h-[15px] top-[-4px] right-[-3px] bg-red-500 rounded-full flex items-center justify-center"
						>
              2
						</span>
					</div>
					<div className="relative mr-2.5 text-gray-500">
						<Language />
						<span
							className="absolute text-white w-[15px] h-[15px] top-[-4px] right-[-3px] bg-red-500 rounded-full flex items-center justify-center"
						>
              2
						</span>
					</div>
					<div className="relative mr-2.5 text-gray-500">
						<Settings />
					</div>
					<img className="w-9	h-9 mx-2" alt="profile_avatar" src={svgAssets.avatarLogin}>
					</img>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
