import {useState, useEffect} from "react";
import DriverService from "../services/DriverService";
import GetDriver from "../components/GetDriver";
import AddDriver from "../components/AddDriver";
import DriverList from "../components/DriverList";


const DriverPage =() =>{
    const [driver, setDriver] = useState([]);
    const [allDrivers, setAllDrivers] = useState([]);

    const getAllDrivers = async()=>{
        const response = await DriverService.getAllDrivers();
        //setDriver(response);
        setAllDrivers(response);
    }
    const getDriverById = async (id) => {
        const targetDriver = allDrivers.find((driver)=>
            driver.id === parseInt(id)
        );
        if(targetDriver != null){
            setDriver([targetDriver]);
        }
        else{
            setDriver([]);
        }
    }
    const addDriver = (newDriver) => {
        setDriver([...driver, newDriver]);
    }
    useEffect(()=>{
        getAllDrivers();
    },[addDriver]);

    return(
        <div className="mx-auto mt-8">
            <h1>Drivers</h1>
            <div>
                <section>
                    <AddDriver onAddDriver={addDriver} />
                </section>
                <section>
                    <GetDriver onGetDriver={getDriverById} />
                </section>
            </div>

            <div className="grid grid-cols-3">
                <DriverList drivers={allDrivers} setDrivers={setAllDrivers} />
            </div>
        </div>
    )
}
export default DriverPage;