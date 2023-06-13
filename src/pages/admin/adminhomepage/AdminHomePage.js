import { useEffect, useState } from 'react';

const AdminHomePage = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8090/api/v1/auth/find-all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        setProfile(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    
    <div>
        <h1>Admin Home Page</h1>
        {profile.map((info,index)=>{
            return(
                <div key={index}>
                    <br />
                    <p>Name: {info.name}</p>
                    <p>Surname: {info.surname}</p>
                    <p>Email: {info.email}</p>
                    {info.companyName && <p>Company Name: {info.companyName}</p>}
                    {info.taxNumber && <p>Tax Number: {info.taxNumber}</p>}
</div>
            )
        })}
      
     
    </div>
  );
};

export default AdminHomePage;
