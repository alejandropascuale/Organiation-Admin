import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import './product.css'
import { productData } from '../../DummyData';
import { Publish } from '@mui/icons-material'

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
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://images.fravega.com/f300/3d8ccf187c48d7971cd2b237fbb25bfd.jpg" alt="" className="productInfoImg" />
                  <span className="productName">Apple Macbook Air</span>
              </div>
              <div className="productInfoBotton">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id: </span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">sales: </span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Active: </span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock: </span>
                      <span className="productInfoValue">no</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form action="" className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder='Apple Macbook Air' />
                  <label>In Stock</label>
                  <select name="inStock" id="inStock">
                      <option value="yes">Yes</option>
                      <option value="no">no</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">no</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://images.fravega.com/f300/3d8ccf187c48d7971cd2b237fbb25bfd.jpg" alt="" className="productUploadImg" />
                      <label for='file'>
                          <Publish />
                      </label>
                      <input type="file" name="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  )
}
