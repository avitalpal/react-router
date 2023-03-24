import '../App.css';
import React from 'react';
// importing Link from react-router-dom to navigate to 
// different end points.
function UnProtLink() {
  return (
    <div class="text-pink-600 text-sm pt-3">
        <p class="font-medium">This is an unprotected link.</p>
        <p class="my-3">You can edit this component in<br /><code>Nested &rarr; UnProtLink.js</code></p>
        <p class="my-3 text-left">To see how the routes work, check out:</p>

        <ul class="list-disc text-left list-inside">
          <li>
            <code>UnProtPage.js</code>
          </li>
          <li>
            <code>App.js</code>
          </li>
        </ul>
    </div>
  )
}

export default UnProtLink;
