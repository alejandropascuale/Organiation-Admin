import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@material-ui/icons'
import './User.css'

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
          <h1 className='userTitle'>Edit User</h1>
          <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
                <img src="https://indiehoy.com/wp-content/uploads/2020/06/jon-snow-1200x675.jpg"
                    alt="" 
                    className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Jon Snow</span>
                    <span className="userShowUserTitle">Software Engineer</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                    <PermIdentity className='userShowIcon'/>
                    <span className="userShowInfoTitle">jonsnow99</span>
                </div>
                <div className="userShowInfo">
                    <CalendarToday className='userShowIcon'/>
                    <span className="userShowInfoTitle">10.12.1999</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                    <PhoneAndroid className='userShowIcon'/>
                    <span className="userShowInfoTitle">+1 123 456 67</span>
                </div>
                <div className="userShowInfo">
                    <MailOutline className='userShowIcon'/>
                    <span className="userShowInfoTitle">jonsnow@gmail.com</span>
                </div>
                <div className="userShowInfo">
                    <LocationSearching className='userShowIcon'/>
                    <span className="userShowInfoTitle">New York | USA</span>
                </div>
            </div>
          </div>
          <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form action="" className="userUpdateForm">
                  <div className="userUpdateLeft">
                      <div className="userUpdateItem">
                          <label>Username</label>
                          <input type="text" placeholder='jonsnow99' className='userUpdateInput' />
                      </div>
                      <div className="userUpdateItem">
                          <label>Full Name</label>
                          <input type="text" placeholder='Jon Snow' className='userUpdateInput' />
                      </div>
                      <div className="userUpdateItem">
                          <label>Email</label>
                          <input type="text" placeholder='jonsnow@gmail.com' className='userUpdateInput' />
                      </div>
                      <div className="userUpdateItem">
                          <label>Phone</label>
                          <input type="text" placeholder='+1 123 456 67' className='userUpdateInput' />
                      </div>
                      <div className="userUpdateItem">
                          <label>Address</label>
                          <input type="text" placeholder='New York | USA' className='userUpdateInput' />
                      </div>
                  </div>
                  <div className="userUpdateRight"></div>
              </form>
          </div>
      </div>
    </div>
  )
}
