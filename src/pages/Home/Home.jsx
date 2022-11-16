import Chart from "../../components/chart/Chart";
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../utils/dummyData";

const Home = () => {
  return (
    <>
      <FeatureInfo />
      <div className="global_shadow m-5 p-5">
        <Chart title="User Analytics" data={userData} grid={true} />
      </div>
      <div className="widgets flex m-5">
        <WidgetSm />
        <WidgetLg />
      </div>
    </>
  )
}

export default Home;
