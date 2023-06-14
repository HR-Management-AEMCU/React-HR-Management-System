import { useEffect, useState } from 'react';

const VisitorHomePage = () => {
  const [profile, setProfile] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    if (isButtonClicked) {
      fetch('http://localhost:8070/companies-list', {
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
    }
  }, [isButtonClicked]);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Listele</button>
      {profile.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default VisitorHomePage;
