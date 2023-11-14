import { useState } from "react";

import ImageUploadService from "../services/ImageUploadService";
import DriverService from "../services/DriverService";

const UpdateDriver = ({ driver, onUpdateDriver}) => {
    const [updatedImage, setUpdatedImage] = useState(null);
    const [updatedDriver, setUpdatedDriver] = useState ({
        id: driver.id,
        name: driver.name,
        age: driver.age,
        nationality: driver.nationality,
        driverImage: driver.driverImage
    })

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setUpdatedImage(file);
        setUpdatedDriver({...updatedDriver, driverImage: file.name});
    }
    const handleUpdateDriver = async () => {
        try{
            if(updatedImage!=null){
                await ImageUploadService.uploadImage(updatedImage);
            }
            const response = await DriverService.updateDriver(updatedDriver);
            onUpdateDriver(updatedDriver);
        }
        catch(error){
            console.error("error updating driver", error);
        }
    }
    return(
        <div>
            <input
                type="number"
                placeholder="id"
                value={updatedDriver.id}
                onChange={(e) => setUpdatedDriver({...updatedDriver, id: e.target.value})}
                className="w-full p-2 border-gray-300 rounded"
            >
            </input>
            <input
                type="text"
                placeholder="name"
                value={updatedDriver.name}
                onChange={(e) => setUpdatedDriver({...updatedDriver, id: e.target.value})}
                className="w-full p-2 border-gray-300 rounded"
            >
            </input>
            <input
                type="number"
                placeholder="age"
                value={updatedDriver.age}
                onChange={(e) => setUpdatedDriver({...updatedDriver, id: e.target.value})}
                className="w-full p-2 border-gray-300 rounded"
            >
            </input>
            <input
                type="text"
                placeholder="nationality"
                value={updatedDriver.nationality}
                onChange={(e) => setUpdatedDriver({...updatedDriver, id: e.target.value})}
                className="w-full p-2 border-gray-300 rounded"
            >
            </input>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border-gray-300 rounded"    
            >
            </input>
            <button
                onClick={handleUpdateDriver}
                className="bg-red-500 hover:bg-red-700 test-white fond-bold rounded px-4 py-2"
            >
                Update Driver
            </button>
        </div>
    )
}
export default UpdateDriver;