import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    referrerName: ' ',
    referrerMail: ' ',
    refereeName: ' ',
    refereeMail: ' '
  });


  const handleChange = (e) => {
    e.preventDefault();
    if (!formData.referrerName) {
      alert('Referrer Name cannot be empty');
      return;
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setFormData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://accredian-backend-task-u66t.onrender.com/referrals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      setTimeout(() => {
        setIsSubmitted(true);
      }, 1000);
      const result = await response.json();

      if (!response.ok) {
        // Handle HTTP errors
        const errorText = await response.text();
        console.log(errorText);
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
      const data = await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
      <div>
      {isSubmitted ? (
        <div className="text-black">Thank you for your submission!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer Name:</label>
            <input
              type="text"
              className="w-full px-3 py-2 text-black border rounde"
              value={formData.referrerName}
              onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })}
              placeholder="Referrer Name" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer Email:</label>
            <input
              type="email"
              className="w-full px-3 py-2 text-black border rounded"
              value={formData.referrerMail}
              onChange={(e) => setFormData({ ...formData, referrerMail: e.target.value })}
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee Name:</label>
            <input
              type="text"
              className=" border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              value={formData.refereeName}
              onChange={(e) => setFormData({ ...formData, refereeName: e.target.value })}
              placeholder="Referee Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee Email:</label>
            <input
              type="email"
              className="w-full px-3 py-2 text-black border rounded"
              value={formData.refereeMail}
              onChange={(e) => setFormData({ ...formData, refereeMail: e.target.value })}
              placeholder="example@email.com"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
        )}
        </div>
        <button onClick={onClose} className="mt-4 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
