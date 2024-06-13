"use client"
import * as React from "react";
import { useState } from "react";

export default function Contact(){
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [mob, setMob] = useState("");
        return(
        <form autoComplete="off" className="items-center justify-center flex flex-col gap-4 mt-10">
            <label htmlFor="input credentials" className="text-lg font-semibold mb-2 mt-2 text-yellow-700">For contact please enter your details</label>
            <input className="w-full max-w-xs border-2 border-gray-300 p-2 rounded bg-transparent shadow-lg" type="text" id="name" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input className="w-full max-w-xs border-2 border-gray-300 p-2 rounded bg-transparent shadow-lg" type="email" id="email" placeholder="Enter Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className="w-full max-w-xs border-2 border-gray-300 p-2 rounded bg-transparent shadow-lg" type="text" id="mobilenumber" placeholder="Enter Your Mobile Number" value={mob} onChange={(e) => setMob(e.target.value)}/>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded shadow-lg" type="submit">Submit</button>
        </form>
    );
};