import "./managerspendlist.css";
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ManagerSpendList = () => {
    const [data, setData] = useState([]);

    // Backend'den verileri fetch etmek için kullanılacak fonksiyon
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8060/api/v1/spend/spend-status-pending'); // Backend URL'nizi buraya ekleyin
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };
  
    // Sayfa yüklendiğinde verileri fetch etmek için useEffect kullanıyoruz
    useEffect(() => {
      fetchData();
    }, []);
  
    // Onayla ve Reddet için fetch işlemleri
    const handleApprove = async (spendId) => {
        try {
            const token = localStorage.getItem('token');
            const params = new URLSearchParams({ token, spendId });
            const requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json', // Gerekirse isteğinize uygun olarak güncelleyin
              },
            };
            
            await fetch(`http://localhost:8060/api/v1/spend/manager-spend-status-check?${params}`, requestOptions);
            // Backend'de reddetme işlemi başarılı olursa, verileri tekrar fetch edebilirsiniz.
            toast.info("Personel Avans Talebi Onaylanmıştır....", { autoClose: 2000 });
            setTimeout(() => {
                fetchData();
              }, 5000);
          } catch (error) {
            toast.error("Reddetme işlemi başarısız. Lütfen daha sonra tekrar deneyiniz...", { autoClose: 2000 });
            console.error('Reddetme hatası:', error);
          }
    };
  
    const handleReject = async (spendId) => {
        try {
          const token = localStorage.getItem('token');
          const params = new URLSearchParams({ token, spendId });
          const requestOptions = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json', // Gerekirse isteğinize uygun olarak güncelleyin
            },
          };
      
          await fetch(`http://localhost:8060/api/v1/spend/manager-spend-status-cross?${params}`, requestOptions);
          // Backend'de reddetme işlemi başarılı olursa, verileri tekrar fetch edebilirsiniz.
          toast.info("Personel Avans Talebi Reddedilmiştir....", { autoClose: 2000 });
          setTimeout(() => {
            fetchData();
          }, 5000);
        } catch (error) {
          toast.error("Reddetme işlemi başarısız. Lütfen daha sonra tekrar deneyiniz...", { autoClose: 2000 });
          console.error('Reddetme hatası:', error);
        }
      };
      
     // Tarihi belirli bir formata dönüştüren fonksiyon
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
  };
  
    return (
        <div className="avansgenel">
        <ToastContainer />
        {Array.isArray(data) && data.length > 0 ? (
          <>
            <p className="avansdbaslik">Personnel Spend Request</p>
            <div className="tableavans">
              <div className="table-headeravans">
                <div className="indexx">Index</div>
                <div className="columnavansname">Name</div>
                <div className="columnavansname">Surname</div>
                <div className="columnavansname">Phone</div>
                <div className="columnavansname">Avans Total</div>
                <div className="columnavans">Avans Description</div>
                <div className="columnavans">Avans Date</div>
                <div className="columnavans">Onay</div>
              </div>
              <div className="table-bodyavans">
                {data.map((item, index) => (
                  <div key={index} className="rowavans">
                    <div className="indexx">{index + 1 + "-)"}</div>
                    <div className="columnavansname">{item.name}</div>
                    <div className="columnavansname">{item.surname}</div>
                    <div className="columnavansname">{item.phone}</div>
                    <div className="columnavansname">{item.spendTotal}</div>
                    <div className="columnavans">{item.spendDescription}</div>
                    <div className="columnavans">{formatDate(item.spendDate)}</div>
                    <div className="columnavans">
                      <button className="avansbtn avanscheck" onClick={() => handleApprove(item.spendId)}>Onayla</button>
                      <button className="avansbtn avanscross" onClick={() => handleReject(item.spendId)}>Reddet</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p className="avansddbaslik">Sistemde Harcama Talebi bulunamamıştır.</p>
        )}
      </div>
      
      );
  };
export default ManagerSpendList