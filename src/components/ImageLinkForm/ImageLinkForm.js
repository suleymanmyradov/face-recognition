import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) =>{
    return (
        <div>
            <p className='f3'>
                {'This magic brain will detect faces in your pictures. Git it a chance  '}
            </p>
            <div className='center '>
                <div className='form center pa4 br3 shadow-5'>
                 <input className='f4 bn pa2 w-70 center' type='text'
                  onChange={ onInputChange }/>
                 <button 
                   className='w-30 grow f4 link ph3 pv2 bn dib white bg-light-blue pointer'
                   onClick={ onButtonSubmit }>Detect
                 </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;