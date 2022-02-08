import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart />
    </div>
  )
}
