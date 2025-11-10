"use client";


import Header from "./components/Header";
import About from "./components/About";
import Classes from "./components/Classes";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Booking from "./components/Booking";


import { useEffect, useState } from "react";

export default function HomePage() {
    return (    
        <>
        <Header />
        <About />
        <Classes />
        <Team />
        <Booking />
        <Contact />
        </>
    );
}