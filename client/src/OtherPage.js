import React from 'react';
import { Link } from 'react-router-dom'

const OtherPage = () => {
  return (
     <div>Im some other page! 
        <Link to="/">Go Back to Home</Link>
    </div>
  )
}
export default OtherPage;