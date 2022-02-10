import './newUser.css'

export default function NewUser() {
  return (
    <div className='newUser'>
      <h1 className="newUsertitle">New User</h1>
      <form action="" className="newUserForm">
          <div className="newUserItem">
              <label>Username</label>
              <input type="text" placeholder='jonsnow' name="" id="" />
          </div>
          <div className="newUserItem">
              <label>Full Name</label>
              <input type="text" placeholder='Jon Snow' name="" id="" />
          </div>
          <div className="newUserItem">
              <label>Email</label>
              <input type="email" placeholder='jonsnow@gmail.com' name="" id="" />
          </div>
          <div className="newUserItem">
              <label>Password</label>
              <input type="password" placeholder='password' name="" id="" />
          </div>
          <div className="newUserItem">
              <label>Phone</label>
              <input type="text" placeholder='+1 123 456 78' name="" id="" />
          </div>
          <div className="newUserItem">
              <label>Address</label>
              <input type="text" placeholder='New York | USA' name="" id="" />
          </div>
          <div className="newUserItem">
              <label>Gender</label>
              <div className="newUserGender">
                <input type="radio" name="gender" id="male" value='male' />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" id="female" value='female' />
                <label htmlFor="female">Female</label>
                <input type="radio" name="other" id="other" value='other' />
                <label htmlFor="other">Other</label>
              </div>
          </div>
          <div className="newUserItem">
              <label>Active</label>
              <select className='newUserSelect' name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
              </select>
          </div>
          <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}
