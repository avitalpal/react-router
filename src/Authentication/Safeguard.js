import React from 'react'
import { Navigate } from 'react-router-dom'

function Safeguard ({ hasAccess, children }) {
  if (!hasAccess) {
    return <Navigate to="*" replace />
  }
  return children
}
export default Safeguard