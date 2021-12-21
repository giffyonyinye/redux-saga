// import { selectContact } from "./selector";
import { useSelector } from "react-redux";
import React from "react";
const ContactList=() => { 
    // const deleteData = (index) => {
    //     const newData = [...props.details];
    //     newData.splice(index, 1);
    // }

    // console.log(selectContact())
    const contact = useSelector(state => state.contactList.contact);

    return (
        <div style={{marginTop:"2rem"}}>
            <div className="contact-list">
                <table>
                    <thead >
                        <tr>
                            <th style={{width:"10rem", textAlign:"left"}}>Name</th>
                            <th style={{width:"10rem", textAlign:"left"}}>Email Address</th>
                            <th style={{width:"10rem", textAlign:"left"}}>Phone Number</th>
                            <th style={{width:"10rem", textAlign:"left"}}>Date of Birth</th>
                            <th style={{width:"10rem", textAlign:"left"}}>Level</th>
                        </tr>
                    </thead>

                    <tbody>
                        {contact?.map((form,index) => (
                            <tr  key = {index}>
                            <td>{form.firstName} {form.lastName}</td>
                            <td>{form.email}</td>
                            <td>{form.phone}</td>
                            <td>{form.dob}</td>
                            <td>{form.level}</td>
                            {/* <td>
                                <button onClick={() => deleteData(index)}>DELETE</button>
                            </td> */}
                        </tr>
                        ))}
                        
                    </tbody>      
                </table>
            </div>
        </div>
    )
}
// class giffy extends React.Component{
//     constructor (props){
//         super()
//     }
//     render  () {
//       return <></>  
//     }
// }
// ContactList.propTypes = {
//     details : PropTypes.string 
// }

export default ContactList;
