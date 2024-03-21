import {useState, useEffect} from 'react';
export default function SimpleInput() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    useEffect(() => {
        console.log("Component Loaded!");
        console.log(firstName, lastName);
       
       
    },
    [firstName, lastName]);
    return <div>
        <input id="firstName" type="text" value={firstName} onChange={(e) => {
        console.log("Form Value:",e.target.value);
        const newName = e.target.value;
        setTimeout(() => {
            console.log("Timeout over",e.target.value);
            setFirstName(newName); 
            setLastName(newName);    
        }, 100) 
    }} placeholder="Enter first and last name..." />

</div>;
    
}