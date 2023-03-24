import '../App.css';
import React from 'react';
// importing Link from react-router-dom to navigate to 
// different end points.
function ProtLink() {
  return (
    <div class="text-blue-600 text-sm pt-3">
        <p class="font-medium">This is a protected link.</p>
        <p class="my-3">You can edit this component in<br /><code>Nested &rarr; ProtLink.js</code></p>
        <p class="my-3 text-left">To see how the routes work, check out:</p>

        <ul class="list-disc text-left list-inside">
          <li>
            <code>ProtPage.js</code>
          </li>
          <li>
            <code>App.js</code>
          </li>
          <li>
            <code>Nested &rarr; NoAccess.js</code>
          </li>
          <li>
            <code>Authentication &rarr; Safeguard.js</code>
          </li>
        </ul>
    </div>
  )
}

export default ProtLink;
