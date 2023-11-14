const imageUrl = "http://localhost:5056/images";
const DriverItem=({driver})=>{
    return(
        <div className="bg-grey-300 rounded-lg p-3">
            <p> Id: {driver.id}</p>
            <p> Name: {driver.name}</p>
            <p> Age: {driver.age}</p>
            <p> Nationality: {driver.nationality}</p>
            <img src={`${imageUrl}/${driver.driverImage}`} alt={`${driver.name}`}/>
        </div>
    )
}
export default DriverItem;