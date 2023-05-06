import React from 'react'

export const DropDrown = () => {
  return (
    <div>
      <select name="contents" id="contents">
        <option selected disabled>
          Contents
        </option>
        <option value="history">History</option>
        <option value="architectureAndHousing">Architecture and housing</option>
        <option value="religion">Religion</option>
        <option value="waysOfLife">Ways of life</option>
        <option value="childhoodAndAdolescence">
          Childhood and adolescence
        </option>
        <option value="socialOrganization">Social organization</option>
        <option value="clothing">Clothing</option>
        <option value="artsAndLiterature">Arts and literature</option>
      </select>
    </div>
  )
}
