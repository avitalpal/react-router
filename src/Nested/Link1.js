import '../App.css';
import React from 'react';
// importing Link from react-router-dom to navigate to 
// different end points.
function Link1() {
  return (
    <div class="text-teal-500 text-sm pt-3">
        <p class="font-medium">This is Link #1.</p>
        You can use links to render different components by using them as child routes for the parent route (the page).
        <p class="my-3">You can edit this component in<br /><code>Nested &rarr; Link1.js</code></p>
    </div>
  )
}

export default Link1;
