import React from 'react';
import { useState } from 'react';
import './form.css';
import ContactList from './ContactList';
import { connect } from 'react-redux';
import {createContact} from './Actions/action';
import { selectContact } from './selector';

const Form = (props) =>{

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        phone: '',
        level: ''
    });




    const handleChange = (e) => {
        return setForm({...form, [e.target.name] : e.target.value});

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.createContact(form) 
        console.log("props",props.contactForm)  
    }
    console.log("props",props.contactForm)  

    
    
    return (
        <div className="contact">
            <div className="form">
                <div>
                    <h2>Contact Details</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="FirstName">First Name</label><br />
                        <input type="text" name="firstName" id="firstName" onChange={handleChange}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="LastName">Last Name</label><br />
                        <input type="text" name="lastName" id="lastName" onChange={handleChange}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" name="dob" id="dob" onChange={handleChange}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={handleChange}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="number" name="phone" id="phone" onChange={handleChange}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="level">Level</label><br />
                        <select name="level" id="level" onClick={handleChange}>
                            <option value="select">Select</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Amateur">Amateur</option>
                            <option value="Professional">Professional</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            
            
            {/* <tbody>
                   { props.contactForm.map(u =>
                       <tr key={u.id}>
                           <td>{u.firstName}</td>
                           <td>{u.lastName}</td>
                       </tr>
                   )} 
               </tbody> */}

            <div>
                <div>
                    <ContactList />
                </div>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    contactForm: selectContact(state)           
})

const mapDispatchToProps = (dispatch) => ({
    createContact: (payload) => dispatch(createContact(payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(Form);
