import React, { useState } from 'react';


function Bmi() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();

    if (weight === '' || height === '') {
      setMessage('Please enter both weight and height');
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setMessage('You are underweight!! Follow Wight Gain Dietplan');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage('You have a normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage('You are overweight !! Follow Weight lose Dietplan ');
    } else {
      setMessage('You are obese');
    }
  };

  return (
    <>
      <div className="App ">

        <h1 style={{ color: 'var(--dark-red)' }} className='p-5 text-center'>BMI Calculator</h1>

        <div className='d-flex justify-content-center align-items-center' >
          <div>
            <form onSubmit={calculateBMI}>
              <div>
                <label className='text-white me-3'>Weight (kg):</label>
                <input style={{ borderRadius: '5px' }}
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className='text-white me-3 mt-4'>Height (cm):</label>
                <input style={{ borderRadius: '5px' }}
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
              </div>
              <div className='text-center'>
                <button type="submit" className='btn btn-danger mt-5 p-2 rounded '>Calculate BMI</button>
              </div>

            </form>
            {bmi && (
              <div className='mt-5'>
                <h2 className='text-white'>Your BMI: {bmi}</h2>
                <p className='text-white'>{message}</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </>

  );
}

export default Bmi;