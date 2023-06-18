import './tatil.css';

const Tatil = () => {

    const tatilGunleri = [
        { tarih: '01-01-2023', ad: 'Yılbaşı' },
        { tarih: '23-04-2023', ad: 'Ulusal Egemenlik ve Çocuk Bayramı' },
        { tarih: '01-05-2023', ad: 'Emek ve Dayanışma Günü' },
        { tarih: '20-04-2023', ad: 'Ramazan Bayramı Arefe' },
        { tarih: '21-04-2023', ad: 'Ramazan Bayramı 1. Gün' },
        { tarih: '22-04-2023', ad: 'Ramazan Bayramı 2. Gün' },
        { tarih: '23-04-2023', ad: 'Ramazan Bayramı 3. Gün' },
        { tarih: '19-05-2023', ad: "Atatürk'ü Anma, Gençlik ve Spor Bayramı" },
        { tarih: '27-06-2023', ad: 'Kurban Bayramı Arefe' },
        { tarih: '28-06-2023', ad: 'Kurban Bayramı 1. Gün' },
        { tarih: '29-06-2023', ad: 'Kurban Bayramı 2. Gün' },
        { tarih: '30-06-2023', ad: 'Kurban Bayramı 3. Gün' },
        { tarih: '01-07-2023', ad: 'Kurban Bayramı 4. Gün' },
        { tarih: '15-07-2023', ad: 'Demokrasi Bayramı' },
        { tarih: '30-08-2023', ad: 'Zafer Bayramı' },
        { tarih: '29-10-2023', ad: 'Cumhuriyet Bayramı' },
      ];

    const renderTatiller = () => {
        const tatilEtkinleri = tatilGunleri.map((tatil, index) => (
          <div key={index} className="tatil">
            <div className="icon-container">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="tatil-info">
              <div className="tarih">{tatil.tarih}</div>
              <div className="ad">{tatil.ad}</div>
            </div>
          </div>
        ));
    
        return (
          <div className="tatil-listesi">
            <h2 className='baslik'>2023 Resmi Tatiller Takvimi</h2>
            {tatilEtkinleri}
          </div>
        );
      };
    
      return <div className="board">{renderTatiller()}</div>;
}


export default Tatil