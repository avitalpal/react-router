import '../App.css';
import React from 'react';
// importing Link from react-router-dom to navigate to 
// different end points.
function Link3() {
  return (
    <div class="text-blue-600 text-sm pt-3">
        <p class="font-medium">This is Link #3.</p>
        You can also use them to avoid repeating code by just having one source to render data from.
        <p class="my-3">You can edit this component in<br /><code>Nested &rarr; Link3.js</code></p>
    </div>
  )
}

export default Link3;
