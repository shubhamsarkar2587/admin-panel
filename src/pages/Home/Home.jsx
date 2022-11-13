import Chart from "../../components/chart/Chart";
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import { userData } from "../../utils/dummyData";

const Home = () => {
  return (
    <>
      <FeatureInfo />  
      <Chart title="User Analytics" data={userData} grid={true}/>
    </>
  )
}

export default Home;
