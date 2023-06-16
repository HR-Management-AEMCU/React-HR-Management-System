import './visitorprofile.css';

const VisitorProfile = () => {

    return (
         <div className="user-profile">
      <div className="left-card">
        <img
          className="profile-picture"
          src="https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?w=740&t=st=1686869975~exp=1686870575~hmac=33b6727184dabd64e20dd53e4c1112220af176d0dfff55a44d6b402aa023e7f0"
          alt="Profile Picture"
        />
        <h2 className="profile-name">John Doe</h2>
        <div className='leftinfo-card'>
        <div className="info-card">
          <h3>Email</h3>
          <p>johndoe@example.com</p>
        </div>
      
        <div className="info-card">
          <h3>Phone</h3>
          <p>0554 865 13 55</p>
        </div>
        <div className="info-card">
          <h3>Email</h3>
          <p>johndoe@example.com</p>
        </div>
        </div>
      </div>
      <div className="right-card">
      <div className="info-card">
          <h3>Company</h3>
          <p>ABC Corporation</p>
        </div>
        <div className="info-card">
          <h3>Birth Date</h3>
          <p>18.02.1996</p>
        </div>
        <div className="info-card">
          <h3>Birth Place</h3>
          <p>Denizli</p>
        </div>
        <div className="info-card">
          <h3>Age</h3>
          <p>30</p>
        </div>
        <div className="info-card">
          <h3>Country</h3>
          <p>Denizli</p>
        </div>
        <div className="info-card">
          <h3>Postal Code</h3>
          <p>20100</p>
        </div>
      </div>
     
    </div>
      );
}
export default VisitorProfile