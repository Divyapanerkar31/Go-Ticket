import React, { useState } from 'react';
import VideoComponent from './components/VideoComponent';
import './App.css';
import { jsPDF } from 'jspdf';

function App() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [date, setDate] = useState('');
  const [mob, setMob] = useState('');
  const [email, setEmail] = useState('');

  const getTodayDate=()=>{
    const today= new Date();
    return today.toISOString().split('T')[0];

  };
  const minDate=getTodayDate();


  const downloadTicket = () => {
    if (source === destination) {
      alert('Source city and destination city should not be the same');
    } else if (!source || !destination || !name || !age || !mob || !date || !email) {
      alert('Cannot book ticket with empty details');
    } else {
      const ticket = new jsPDF();


ticket.addImage("./logo.png", 10, 10, 20, 20); 


ticket.setFont("helvetica", "bold");
ticket.setFontSize(22);
ticket.setTextColor(116, 27, 127);
ticket.text("Ticket Booking Confirmation", 105, 22, { align: "center" });


ticket.setFontSize(16);
ticket.setTextColor(0, 0, 0);
ticket.text("Passenger Details", 105, 45, { align: "center" });


ticket.setDrawColor(150, 150, 150);
ticket.roundedRect(15, 50, 180, 90, 5, 5, 'S');


ticket.setFontSize(12);
let y = 60;
const lineHeight = 10;
ticket.text(`Name: ${name}`, 25, y); y += lineHeight;
ticket.text(`Age: ${age}`, 25, y); y += lineHeight;
ticket.text(`Mob: ${mob}`, 25, y); y += lineHeight;
ticket.text(`Email: ${email}`, 25, y); y += lineHeight;
ticket.text(`From: ${source}`, 25, y); y += lineHeight;
ticket.text(`To: ${destination}`, 25, y); y += lineHeight;
ticket.text(`Date: ${date}`, 25, y);


ticket.setFontSize(10);
ticket.setTextColor(100);
ticket.text("Thank you for booking!", 105, 155, { align: "center" });


ticket.save("ticket.pdf");


setSource('');
setDestination('');
setName('');
setAge('');
setMob('');
setDate('');
setEmail('');


    }
  };

  return (
    <>
      <div className="main">
        <div className="header">
          <img src="./logo.png" width="80" style={{ borderRadius: '12px' }} alt="logo" />
          <div className="heading">
            <h1>Go-Ticket</h1>
          </div>
        </div>

        <div className='bg'>
          <div className='ticket'>
            <h2 className='book'>Book Your Ticket</h2>

            <div className='form'>
              <div className='row'>
                <select value={source} onChange={(e) => setSource(e.target.value)}>
                  <option value="">Select source city</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Vizag">Vizag</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Delhi">Delhi</option>
                  <option value="New York">New York</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="UttarPradesh">UttarPradesh</option>
                </select>

                <select value={destination} onChange={(e) => setDestination(e.target.value)}>
                  <option value="">Select destination city</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Vizag">Vizag</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Delhi">Delhi</option>
                  <option value="New York">New York</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="UttarPradesh">UttarPradesh</option>
                </select>
              </div>

              <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
              min={minDate} 
              placeholder="yyyy-mm-dd"/>

              <div className='row'>
                <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="Enter your age" value={age} min="1" max="120" onChange={(e) => setAge(e.target.value)} />
              </div>

              <input type="tel" placeholder="Enter your mobile" pattern="[0-9]{10}" maxLength="10" value={mob} onChange={(e) => setMob(e.target.value)} />
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />

              <button onClick={downloadTicket}>Download Ticket</button>
            </div>
          </div>
        </div>
      </div>

      <VideoComponent />
    </>
  );
}

export default App;
