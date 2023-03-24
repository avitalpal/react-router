import './App.css';
import React from 'react';
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Outlet } from "react-router-dom"

function NestedPage() {

const [isShowing, setIsShowing] = useState(true);

  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 md:pl-64">
        <img src={require("./bck4.svg")} alt="" class="bg-cover" width="1308" />
        <div class="absolute inset-0 bg-[url(./bck4.svg)] bg-cover"></div>
        <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div class="mx-auto max-w-md">
            <img src={require("./logo.png")} alt="Wiz logo" class="h-12 mx-auto" />
            <br></br>
            <p class="font-semibold text-lg text-left">To see this page's links, go to your <code class="italic">NestedPage.js</code> file.</p>
            <p class="font-semibold text-lg text-left">To edit the <i>routes</i>, go to your <code class="italic">App.js</code> file.</p>
            <p class="text-left leading-loose">
              <b>You can experiment with things like:</b>

              <div>
                <ul class="list-disc list-inside">
                  <li class="hover:text-purple-500">Parent routes</li>
                  <li class="hover:text-purple-500">Child routes</li>
                  <li class="hover:text-purple-500">Locations and matching</li>
                  <li class="hover:text-purple-500">Navigation</li>
                  <li class="hover:text-purple-500">History objects</li>
                </ul>
              </div>
            </p>
            <br></br>
            <div class="relative bg-violet-600/90 px-6 pt-3 pb-3 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-auto">
              <p class="leading-loose font-medium text-white text-center">Feel free to play around with the links below!</p>
            </div>
            <br></br>
            <div class="flex flex-col gap-3 text-center whitespace-pre-wrap relative bg-slate-200/70 px-6 pt-3 pb-5 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
              
                <Link to="link1" class="underline underline-offset-2 decoration-1 hover:text-teal-500" onClick={() => {
                          setIsShowing(false)
                        }}
                >Nested link #1</Link>
                <Link to="link2" class="underline underline-offset-2 decoration-1 hover:text-pink-600" onClick={() => {
                          setIsShowing(false)
                        }}
                >Nested link #2</Link>
                <Link to="link3" class="underline underline-offset-2 decoration-1 hover:text-blue-600" onClick={() => {
                          setIsShowing(false)
                        }}
                >Nested link #3</Link>
                <Link to="./" class="underline underline-offset-2 decoration-1 hover:text-lg" onClick={() => {
                          setIsShowing(true)
                        }}
                >Reset link</Link>

                <div class="flex flex-col gap-3 text-center whitespace-pre-wrap relative bg-white px-3 pb-3 shadow-sm ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">

                  <p class={`${isShowing ? 'opacity-100 text-slate-500/50 pt-3 my-2' : 'opacity-0 text-zero pt-0'}`}>Pay attention to the URL :)</p>
                  <Outlet />

                </div>

              </div>
            <div class="pt-8 text-base font-semibold leading-7 whitespace-pre-line text-center">
              <p class="text-gray-900">Need a reminder of React Router's API?</p>
              <p>
                <a href="https://www.notion.so/wizteam/React-Router-c5f0d013eeb7450aa1494fad2fea2f9a" class="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
              </p>
              <p class="text-gray-900 my-3">Want to go back to the home page?</p>
              <button class=" hover:bg-violet-600 active:bg-violet-700 mx-w-sm mx-auto bg-violet-500 rounded-2xl h-12 w-32 shadow-lg flex items-center space-x-4">
                <Link to="/homepage" class="text-white margin-5 hover:text-slate-300 m-auto" >&larr; Click Here</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default NestedPage;
