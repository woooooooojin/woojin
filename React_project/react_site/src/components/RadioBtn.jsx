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
        <label className='lab01' style={colorChange('3800')}>
            <input
            className='opt01'
            name="radio_opt"
            type="radio"
            value="3800"
            checked={selectedOption === '3800'}
            onChange={handleOptionChange}
            defaultChecked={true}
            />
            싱글레귤러
        </label>

        <label className='lab02' style={colorChange('4300')}>
            <input
            className='opt02'
            name="radio_opt"
            type="radio"
            value="4300"
            checked={selectedOption === '4300'}
            onChange={handleOptionChange}
            />
            싱글킹
        </label>

        <label className='lab03' style={colorChange('4800')}>
            <input
            className='opt03'
            name="radio_opt"
            type="radio"
            value="4800"
            checked={selectedOption === '4800'}
            onChange={handleOptionChange}
            />
            더블주니어
        </label>

        <label className='lab04' style={colorChange('6800')}>
            <input
            className='opt04'
            name="radio_opt"
            type="radio"
            value="6800"
            checked={selectedOption === '6800'}
            onChange={handleOptionChange}
            />
            더블레귤러
        </label>

        <p className='opt_price'>가격 : {selectedOption}</p>

    </div>
    )
  
}
