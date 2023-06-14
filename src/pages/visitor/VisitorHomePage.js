import { useEffect, useState } from 'react';

const VisitorHomePage = () => {
  const [profile, ] = useState([]);

  

  return (
    
    <div>
        <h1>Visitor Home Page</h1>
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

export default VisitorHomePage;
