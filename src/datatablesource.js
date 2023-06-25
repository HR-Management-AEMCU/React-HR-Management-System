export const managerColumns = [
  {
    field: "image",
    headerName: "Image",
    width: 150,
    renderCell: (param) => {
      return (
        <div className="cellWithImg">
          <img src={/*param.row.photo*/ "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?w=740&t=st=1687684202~exp=1687684802~hmac=1e8084bd882c88a2b4948cb7456830287fe49ae7dce20e116285dbb354243c85"} className="cell" />
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
