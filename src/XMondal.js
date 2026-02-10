import  "./XMondal.css";
import React, { useState } from 'react';

function XMondal() {

    const [isOpenForm, setIsOpenForm] = useState(false);    

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        dob: '',
    })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, phone, dob } = formData;

    if (!username || !email || !phone || !dob) {
      alert("Please fill all the fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    const selectedDate = new Date(dob);
    const today = new Date();

    if (selectedDate > today) {
      alert("Invalid date of birth. Please select a valid date.");
      return;
    }

    setIsOpenForm(false);
    setFormData({
      username: "",
      email: "",
      phone: "",
      dob: ""
    });

  }

    return (
        <div>
            <div style={{textAlign: "center"}}>
             <h1 style={{margin: "20px"}}>User Details Mondal</h1>
                <button style={{margin: "20px", 
                background: "darkblue",
                height:"40px", 
                width:"150px",
                borderRadius: "10px",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
                color: "white"
                }} onClick={() => {
                 setIsOpenForm(true);
                }}>
                    Open Form</button>
               </div>     
             {/* {!isOpenForm && (
            <button onClick={() => setIsOpenForm(true)}>Open Form</button>
                )} */}
        {isOpenForm && (
        <div
          className="modal"
          onClick={() => setIsOpenForm(false)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit}>
              <label>Username:</label>  
              <input
                id="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />

                <label>Email Address:</label>        
              <input
                id="email"
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />

                <label>Phone Number:</label>    
              <input
                id="phone"
                type="text"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
                <label>Date of Birth:</label>    
              <input
                id="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="submit-button"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
        </div>
    )
}   
export default XMondal; 

  // <div style={{textAlign: "center"}}>
        //     <h1 style={{margin: "20px"}}>User Details Mondal</h1>
        //     <button style={{margin: "20px", 
        //         background: "darkblue",
        //         height:"40px", 
        //         width:"150px",
        //         borderRadius: "10px",
        //         border: "none",
        //         fontSize: "16px",
        //         cursor: "pointer",
        //         color: "white"
        //         }} onClick={() => {
        //          setIsOpenForm(true);
        //         }}>
        //             Open Form</button>

        //         <Modal isOpen={isOpenForm} setIsOpen={setIsOpenForm}>
        //            <FormDetails 
        //             setIsOpen={setIsOpenForm}
        //              />
        //         </Modal>