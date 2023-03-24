import '../App.css';
import React from 'react';

function NoAccess() {
  return (      
       
       <div class="flex flex-col my-36 text-center ml-64">
            <p>Hey there :D
            <br></br> 
            Looks like you don't have access to this URL!
            <br></br>
            You can just hit the back button to continue where you left off, or check out
            <code class="text-red-600 font-semibold"> App.js </code>
            to test out the routes.</p><br></br>
            <img class="mx-auto" src="https://media.tenor.com/udq1uD9WHSQAAAAM/oops.gif" alt="mistake monkey gif"></img>
        </div> 
  )};

export default NoAccess