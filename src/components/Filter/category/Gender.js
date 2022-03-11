/* eslint react/prop-types: 0 */
import React from 'react'
import FilterBTN from '../FilterBTN'

const Gender = ({ updateGender, updatePageNumber }) => {
  const genders = ['Female', 'Male', 'Genderless', 'Unknown']
  return (
    <div className='accordion-item'>
        <h2 className='accordion-header' id='headingThree'>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >Gender</button>
        </h2>
        <div
            id='collapseThree' className='accordion-collapse collapse'
            aria-labelledby='headingThree' data-bs-parent='#accordionExample'
        >
            <div className='accordion-body d-flex flex-wrap' gap-3>
                {genders.map((items, index) => {
                  return (
                    <FilterBTN
                        key={index}
                        index={index}
                        name="genders"
                        task={updateGender}
                        updatePageNumber={updatePageNumber}
                        input={items}
                    />
                  )
                })}

            </div>
        </div>
    </div>
  )
}

export default Gender
