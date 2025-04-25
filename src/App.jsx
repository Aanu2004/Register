import React, { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    branch: '',
    state: '',
    college: '',
    phone: '',
    gender: '',
    course: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration successful! Check console for details.');
    setFormData({
      name: '',
      email: '',
      password: '',
      branch: '',
      state: '',
      college: '',
      phone: '',
      gender: '',
      course: '',
    });
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label><br />
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone:</label><br />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender:</label><br />
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Course:</label><br />
          <input type="text" name="course" value={formData.course} onChange={handleChange} required />
        </div>
        <div>
          <label>Branch:</label><br />
          <input type="text" name="branch" value={formData.branch} onChange={handleChange} required />
        </div>
        <div>
          <label>State:</label><br />
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </div>
        <div>
          <label>College:</label><br />
          <input type="text" name="college" value={formData.college} onChange={handleChange} required />
        </div>
        <br />
        <button type="submit" style={{ padding: '8px 16px' }}>Register</button>
      </form>
    </div>
  );
}
