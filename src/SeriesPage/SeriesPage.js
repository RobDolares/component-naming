import React from 'react';

const SeriesPage = (props) => {

  return (
    <div className='series-page-container'>
      <h2>Series page components:</h2>
      <div>
        <table className='output-table'>
          <tr>
            <td>Category ID:</td>
            <td>{props.brand}-{props.series}</td>
          </tr>
          <tr>
            <td>Restriction ID:</td>
            <td>ww-{props.brand}-{props.series}-restriction</td>
          </tr>
          <tr>
            <td>Page ID:</td>
            <td>ww-{props.brand}-{props.series}-page</td>
          </tr>
          <tr>
            <td>CSS override:</td>
            <td>ww-{props.brand}-{props.series}-css</td>
          </tr>
          <tr>
            <td>Hero Component IDs</td>
            <td>
              <ul>
                <li>ww-{props.brand}-{props.series}-hero-component-1</li>
                <li>ww-{props.brand}-{props.series}-hero-component-2</li>
                <li>ww-{props.brand}-{props.series}-hero-component-3</li>
                <li>ww-{props.brand}-{props.series}-hero-component-4</li>
                <li>ww-{props.brand}-{props.series}-hero-component-5</li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default SeriesPage;
