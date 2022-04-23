import React from 'react'
import CustomerReview from '../CustomerReview';
import Updates from '../Updates'
import './RightSide.css'

const RightSide = () => {
  return (
    <div className="rightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Reveiw</h3>
        <CustomerReview />
      </div>
    </div>
  );
}

export default RightSide