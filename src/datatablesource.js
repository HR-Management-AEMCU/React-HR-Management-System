export const managerColumns = [
  {
    field: "image",
    headerName: "Image",
    width: 150,
    renderCell: (param) => {
      return (
        <div className="cellWithImg">
          <img src={/*param.row.photo*/ "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1686742697~exp=1686743297~hmac=2332b27b2c39602256581e4bc382e0bcdf087b6e2774488c029992dcc00e98e4"} className="cell" />
        </div>
      );
    },
  },
  { field: "name", headerName: "Firstname", width: 150 },
  { field: "surname", headerName: "Surname", width: 150 },
  { field: "email", headerName: "Email", width: 150 },
  { field: "companyName", headerName: "Company Name", width: 150 },
  { field: "taxNumber", headerName: "Tax Number", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
  { field: "userId", headerName: "UserId", width: 150 },
];
export const companyColumns = [
  {
    field: "image",
    headerName: "Image",
    width: 250,
    renderCell: (param) => {
      return (
        <div className="cellWithImg">
          <img src={/*param.row.photo*/ ""} className="cell" />
        </div>
      );
    },
  },
  { field: "companyName", headerName: "Company Name", width: 250 },
  { field: "companyId", headerName: "CompanyId", width: 250 },
];

export const managerRows = [
  {
    id: 1,
    firtName: "abc",
    img: "abchttp",
    surname: "abc",
    email: "abc@gmail.com",
    phone: 5555555555,
    address: "abc caddesi",
  },
];
