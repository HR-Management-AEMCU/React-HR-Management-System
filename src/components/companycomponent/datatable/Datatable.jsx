import "./datatable.scss";
import { DataGrid, GridColumnHeaderFilterIconButton } from "@mui/x-data-grid";
import { companyColumns } from "../../../datatablesource";
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
      companyId: "",
      companyName: "",
      companyLogoUrl: "",
    },
  ]);
  useEffect(() => {
    
    fetch('http://localhost:8070/api/v1/company/get-companies-list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Verileri istenen şekilde formatlayarak duruma kaydetmek
        setManager(data);
        console.log(data);
       
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  

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
      width: 150,
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
          toast.success("Login Başarılı! Anasayfaya Yönlendiriliyorsunuz...", { autoClose: 2000 });
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
      // Kırmızı çarpı butonuna tıklandığında gerçekleştirilecek işlem
      console.log("Kırmızı çarpı butonuna tıklandı!");
      // İlgili işlemleri burada gerçekleştirebilirsiniz
    };
  
    return (
      <div>
        <ToastContainer />
        <button type="button" style={{ backgroundColor: 'gray', color: 'white', marginRight: '5px', fontSize: '2vh' , width:'5vh' }} onClick={handleCheck}>View</button></div>
    );
  };

  

  const getRowId = (row) => row.companyId;
  return (
    <div className="datatable">
   {/*<div className="dataTableTitle">
      <Link to="/manager/new" className="links">
        <span>Add new manager</span>
      </Link>
    </div>*/}

    <DataGrid
      rows={manager}
      columns={companyColumns.concat(actionColumn)}
      rowHeight={70}
      pageSizeOptions={[5]}
      getRowId={getRowId}
    />
  </div>
);
};

export default Datatable;
