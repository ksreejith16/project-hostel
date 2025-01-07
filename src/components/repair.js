import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './repair.css';

function Repair() {
  const [roomNo, setRoomNo] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [repairType, setRepairType] = useState('');
  const [otherRepair, setOtherRepair] = useState('');
  const [status, setStatus] = useState('pending');

  const handleRoomNoChange = (e) => {
    setRoomNo(e.target.value);
  };

  const handleIssueDateChange = (e) => {
    setIssueDate(e.target.value);
  };

  const handleRepairTypeChange = (e) => {
    const value = e.target.value;
    setRepairType(value);
    // Reset otherRepair state if repairType is changed
    if (value !== 'others') {
      setOtherRepair('');
    }
  };

  const handleOtherRepairChange = (e) => {
    setOtherRepair(e.target.value);
  };

  const handleReportRepair = (e) => {
    e.preventDefault();

    // Log the data before sending the email
    console.log('Reported Repair Data:', { roomNo, issueDate, repairType, status });

    // Send email notification with the new service, template, and public key
    emailjs
      .send(
        'service_pv3b0po', // Your new service ID
        'template_hbq60mr', // Your new template ID
        {
          room_no: roomNo,
          issue_date: issueDate,
          repair_type: repairType === 'others' ? otherRepair : repairType,
          status: status,
        },
        'E9NT9CfJlsHEAiDqt' // Your new public key
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Repair report sent successfully!');
        // Update status after email is sent
        setStatus('pending'); // You might want to change this based on your logic
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('Failed to send repair report. Please try again.');
      });

    // Reset form fields
    setRoomNo('');
    setIssueDate('');
    setRepairType('');
    setOtherRepair('');
  };

  return (
    <div className="repair-form-container">
      <h2>Report Repair</h2>
      <form onSubmit={handleReportRepair}>
        <div className="repair-form-group">
          <label className="repair-label" htmlFor="roomNo">
            Room No:
          </label>
          <input
            className="repair-input"
            type="text"
            id="roomNo"
            value={roomNo}
            onChange={handleRoomNoChange}
            required
          />
        </div>
        <div className="repair-form-group">
          <label className="repair-label" htmlFor="issueDate">
            Issue Date:
          </label>
          <input
            className="repair-input"
            type="date"
            id="issueDate"
            value={issueDate}
            onChange={handleIssueDateChange}
            required
          />
        </div>
        <div className="repair-form-group">
          <label className="repair-label" htmlFor="repairType">
            Repair Type:
          </label>
          <select
            className="repair-select"
            id="repairType"
            value={repairType}
            onChange={handleRepairTypeChange}
            required
          >
            <option value="">Select Repair Type</option>
            <option value="fan">Fan</option>
            <option value="light">Light</option>
            <option value="lan cable">LAN Cable</option>
            <option value="washing">Washing</option>
            <option value="others">Others</option>
          </select>
        </div>
        {repairType === 'others' && (
          <div className="repair-form-group">
            <label className="repair-label" htmlFor="otherRepair">
              Other Repair Type:
            </label>
            <input
              className="repair-input"
              type="text"
              id="otherRepair"
              value={otherRepair}
              onChange={handleOtherRepairChange}
              required
            />
          </div>
        )}
        <button className="repair-button" type="submit">
          Report Repair
        </button>
      </form>
    </div>
  );
}

export default Repair;
