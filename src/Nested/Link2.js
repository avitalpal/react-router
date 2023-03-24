import '../App.css';
import React from 'react';
// importing Link from react-router-dom to navigate to 
// different end points.
function Link2() {
  return (
    <div class="text-pink-600 text-sm pt-3">
        <p class="font-medium">This is Link #2.</p>
        For example, you can use them to render comments or like counts under a social media post.
        <p class="my-3">You can edit this component in<br /><code>Nested &rarr; Link2.js</code></p>
    </div>
  )
}

export default Link2;
