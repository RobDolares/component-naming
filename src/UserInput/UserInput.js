import React from 'react';

const UserInput = (props) => {

  const userInputStyle = {
    margin: '0 auto',
    display:'flex',
    flexDirection:'column'
  }

  return (
    <div style={userInputStyle}>

        <h3>Enter applicable information:</h3>
        <form className='input-container'>
          <div>
            <label htmlFor="">Brand:</label>
            <input type="text" name="brand" onChange={props.change} value={props.brand}/>
          </div>
          <div>
            <label htmlFor="">Series:</label>
            <input type="text" name="series" onChange={props.change} value={props.series}/>
          </div>
          <div>
            <label htmlFor="">Product Name:</label>
            <input type="text" name="productName" onChange={props.change} value={props.productName}/>
          </div>
          <div>
            <label htmlFor="">Product Type:</label>
            <select type="select" name="productType" onChange={props.change} value={props.productType}>
              <option value="">Select Type</option>
              <option value="desktop">Desktops</option>
              <option value="laptop">Laptops</option>
              <option value="tablet">Tablet</option>
              <option value="smart-device">Smart Device</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>
        </form>

    </div>)

  }

export default UserInput;
