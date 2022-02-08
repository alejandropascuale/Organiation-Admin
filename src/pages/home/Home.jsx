import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import './Home.css'
import { userData } from '../../DummyData';

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
    </div>
  )
}
