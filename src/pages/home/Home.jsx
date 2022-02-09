import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import './Home.css'
import { userData } from '../../DummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import UserList from '../userList/UserList';

export default function Home() {

  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        title={'User Analytics'}
        data={userData}
        grid
        dataKey={'Active User'}
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
        <UserList />
      </div>
    </div>
  )
}
