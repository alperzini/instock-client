// import "./WarehousesPage.scss";
// import WarehouseList from "../../components/WarehouseList/WarehouseList";

// const WarehousesPage = ({ warehouses, setWarehouses }) => {

// console.log("WarehousesPage");

// return (
//     <main className="warehouses-page">
//         <WarehouseList warehouses={warehouses} />
//     </main>
// );

// };

// export default WarehousesPage;


import "./WarehousesPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import { useEffect } from "react";

const WarehousesPage = ({ warehouses, setWarehouses }) => {

useEffect(() => {
    // TEMP: mock data for testing Ticket 45
    setWarehouses([
      {
        id: "1",
        warehouse_name: "Toronto",
        address: "123 King St",
        city: "Toronto",
        country: "Canada",
        contact_name: "Ava Patel",
        contact_phone: "+1 (416) 555-1234",
        contact_email: "ava@instock.com",
      },
      {
        id: "2",
        warehouse_name: "Chicago",
        address: "3218 Guess Rd",
        city: "Chicago",
        country: "USA",
        contact_name: "Jameson Schuppe",
        contact_phone: "+1 (919) 797-2875",
        contact_email: "jschuppe@instock.com",
      },
    ]);
  }, [setWarehouses]);

  return (
    <main className="warehouses-page">
      <WarehouseList warehouses={warehouses} />
    </main>
  );

    
};


export default WarehousesPage;
