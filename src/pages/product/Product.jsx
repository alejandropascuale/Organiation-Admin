import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import './product.css'
import { productData } from '../../DummyData';

export default function Product() {
  return (
    <div className='product'>
      <div className="productTitleContainer">
            <h1 className="producttitle">Product</h1>
            <Link to='/newproduct'>
                <button className="productAddButton">Create</button>
            </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart
                data={productData}
                dataKey='Sales'
                title='Sales Performance'
               />
          </div>
          <div className="productTopRight"></div>
      </div>
      <div className="productBottom"></div>
    </div>
  )
}
