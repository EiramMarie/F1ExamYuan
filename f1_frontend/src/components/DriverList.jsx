import {useState} from "react";
import DriverItem from "./DriverItem";
import UpdateDriver from "./UpdateDriver";
import DriverService from "../services/DriverService";

const DriverList=({drivers, setDrivers}) =>{
    const [updatedDriverId, setUpdatedDriverId] = useState({});
    const [isUpdateFromVisible, setIsUpdateFormVisible] = useState(false);

    const handleDeleteDriver =async(id) =>{
        try{
            await DriverService.deleteDriver(id);
            const driversAfterDelete = drivers.filter((driver=>driver.id!==id));
            setDrivers(driversAfterDelete)
        }
        catch(error){
            console.error("error deleting driver", error)
        }
    }
    const toggleUpdateForm = (driver)=>{
        setIsUpdateFormVisible(!isUpdateFromVisible);
        setUpdatedDriverId(driver.id);
    }
    const handleUpdateDriver=async(updatedDriver)=>{
        try{
            const driversAfterUpdate = drivers.map((driver)=>
                driver.id===updatedDriver.id? updatedDriver:driver
            );
            setDrivers(driversAfterUpdate);
            setIsUpdateFormVisible(false);
        }
        catch(error) {
            console.error("error updating driver")
        }
    }
    return(
        <div className="bg-gray-500 p-4">
            <h1 >Drivers</h1>
            {drivers.map((driver=>(
                <div>
                    <DriverItem driver={driver}></DriverItem>
                    <button
                        onClick={()=>handleDeleteDriver(driver.id)}
                        className="bg-red-500 hover:bg-red-700 test-white fond-bold rounded px-4 py-2"
                    >
                    Delete Driver
                    </button>
                    <button
                        onClick={()=>toggleUpdateForm(driver)}
                    >
                    Update Driver
                    </button>
                    {isUpdateFromVisible && updatedDriverId===driver.id &&(
                        <UpdateDriver 
                            driver={driver}
                            onUpdateDriver={handleUpdateDriver}
                        />
                    )}
                </div>
            )))}
            {!drivers.length && (
                <p className="text-red-500 text-lg mt-2">No drivers found</p>
            )}
        </div>
    )
}
export default DriverList;