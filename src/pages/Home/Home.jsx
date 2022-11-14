import Chart from "../../components/chart/Chart";
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../utils/dummyData";

const Home = () => {
  return (
    <>
      <FeatureInfo />
      <Chart title="User Analytics" data={userData} grid={true} />
      <div className="widgets flex m-5">
        <WidgetSm />
        <WidgetLg />
      </div>
    </>
  )
}

export default Home;
