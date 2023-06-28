import { useState } from 'react';
import React from 'react'
import './components.css'
import { useDispatch, useSelector } from 'react-redux';




export default function RadioBtn() {

    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {setSelectedOption(event.target.value)}
    const colorChange = (optionValue) => {
        if (selectedOption === optionValue) {
          return { backgroundColor: '#f489a0', color : '#fff'};
        }
        return {};
    };


  return (
    <div>
        <label className='lab01' style={colorChange('0')}>
            <input
            className='opt01'
            name="radio_opt"
            type="radio"
            value="0"
            checked={selectedOption === '0'}
            onChange={handleOptionChange}
            defaultChecked={true}
            />
            싱글레귤러 + 0
       </label>

        <label className='lab02' style={colorChange('800')}>
            <input
            className='opt02'
            name="radio_opt"
            type="radio"
            value="800"
            checked={selectedOption === '800'}
            onChange={handleOptionChange}
            defaultChecked={false}
            />
            싱글킹 + 800
        </label>

        <label className='lab03' style={colorChange('1300')}>
            <input
            className='opt03'
            name="radio_opt"
            type="radio"
            value="1300"
            checked={selectedOption === '1300'}
            onChange={handleOptionChange}
            defaultChecked={false}
            />
            더블주니어 + 1300
        </label>

        <label className='lab04' style={colorChange('3300')}>
            <input
            className='opt04'
            name="radio_opt"
            type="radio"
            value="3300"
            checked={selectedOption === '3300'}
            onChange={handleOptionChange}
            defaultChecked={false}
            />
            더블레귤러 + 3300
        </label>

        <p className='opt_price'>옵션가격 : {selectedOption}</p>

    </div>
    )
  
}
