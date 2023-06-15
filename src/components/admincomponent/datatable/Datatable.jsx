import "./datatable.scss";
import { DataGrid, GridColumnHeaderFilterIconButton } from "@mui/x-data-grid";
import { managerColumns } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
/*import ManagerService from "../../service/ManagerService";*/
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Datatable = () => {
  const navigate = useNavigate();
  const [manager, setManager] = useState([
    { 
      userId: "",
      name: "",
      photo: "",
      surname: "",
      email: "",
      companyName: "",
      taxNumber: "",
      status:""
    },
  ]);
  /*çalışan metot fecth hatası verdiği için kapattım
  useEffect(()=>{
    fetch('http://localhost:8060/api/v1/user-profile/role-manager-status-inactive',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(data => data.json())
    .then(data =>{
        setManager(data);
        console.log(data);
        const userIds = data.map(x => x.userId); // Tüm kullanıcı profillerinden userId'leri alın
        localStorage.setItem('userIds', JSON.stringify(userIds)); // userIds'yi localStorage'e JSON formatında kaydedin
    });
},[]);*/

/*
  useEffect(() => {
    ManagerService.getAllAdminSummaryInfo().then((response) => {
      setManager([...response.data]);
    });
    return () => {};
  }, []);
*/
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellAction">
           {/* <div className="view">
              <Link
                className="linksecompany"
                to={"/manager/" + params.row.id}
                style={{ textDecoration: "none" }}
              >
                <span>View</span>
              </Link>
            </div>*/}
            <div>
            {gridOrderButtons(params.row.id)}
          </div>
          </div>
        );
      },
    },
  ];
  
 const gridOrderButtons = () => {
    const handleCheck = () => {
      
      const userIds = JSON.parse(localStorage.getItem('userIds'));
      console.log(userIds);
      console.log(localStorage.getItem('token'));
      const selectedUserId = userIds[0];
      console.log(selectedUserId);
      const url = `http://localhost:8060/api/v1/user-profile/admin-change-manager-status-check?token=${localStorage.getItem('token')}&userId=${selectedUserId}`;
      fetch(url,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          /*token: localStorage.getItem('token'),*/
          /*userId: selectedUserId,*/
        }),
      }).then((response) => {
        if (response.ok) {
          toast.success("Manager Onaylandı! Anasayfaya Yönlendiriliyorsunuz...", { autoClose: 2000 });
          return response.json(); 
        } else {
          throw new Error("Giriş başarısız"); 
        }
          })
          .then((data) => {
            console.log(data.token); 
            localStorage.setItem('token', data.token)
            setTimeout(() => {
              navigate("/manager");
            }, 3000);
          })
          .catch((error) => {
            toast.error("İşlem başarısız.Lütfen daha sonra deneyiniz...", { autoClose: 3000 });
            console.error(error);
          });
      console.log("Yeşil ok butonuna tıklandı!");
        
    };
  
    const handleCross = () => {
      const userIds = JSON.parse(localStorage.getItem('userIds'));
      console.log(userIds);
      console.log(localStorage.getItem('token'));
      const selectedUserId = userIds[0];
      console.log(selectedUserId);
      const url = `http://localhost:8060/api/v1/user-profile/admin-change-manager-status-cross?token=${localStorage.getItem('token')}&userId=${selectedUserId}`;
      fetch(url,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          /*token: localStorage.getItem('token'),*/
          /*userId: selectedUserId,*/
        }),
      }).then((response) => {
        if (response.ok) {
          toast.success("Manager Reddedildi! Anasayfaya Yönlendiriliyorsunuz...", { autoClose: 2000 });
          return response.json(); 
        } else {
          throw new Error("Giriş başarısız"); 
        }
          })
          .then((data) => {
            console.log(data.token); 
            localStorage.setItem('token', data.token)
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          })
          .catch((error) => {
            toast.error("İşlem başarısız.Lütfen daha sonra deneyiniz...", { autoClose: 3000 });
            console.error(error);
          });
      console.log("Kırmızı çarpı butonuna tıklandı!");
      // İlgili işlemleri burada gerçekleştirebilirsiniz
    };
  
    return (
      <div>
        <button type="button" style={{ backgroundColor: 'green', color: 'white', marginRight: '5px', fontSize: '3vh' , width:'4vh' }} onClick={handleCheck}>✔</button>
        <button type="button" style={{ backgroundColor: 'red', color: 'white', fontSize: '3vh', width:'4vh'}} onClick={handleCross}>✖</button>
      </div>
    );
  };

  

  const getRowId = (row) => row.userId;
  return (
    <div className="datatable">
      <ToastContainer />
    <div className="dataTableTitle">
      <Link to="/manager/new" className="links">
        <span>Add new manager</span>
      </Link>
    </div>

    <DataGrid
      rows={manager}
      columns={managerColumns.concat(actionColumn)}
      rowHeight={90}
      pageSizeOptions={[5]}
      getRowId={getRowId}
    />
  </div>
);
};

export default Datatable;
