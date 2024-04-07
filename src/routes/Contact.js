import React from 'react'
import { Navbar } from './Navbar';
import Footer from './Footer'
import Heroimage2 from './Heroimage2'
import Form from "../Components/Form"
export const Contact = () => {
  return (
    <div> 
    <Navbar />
    <Heroimage2 heading="CONTACTS." text="I Am a friendly Front-End Developer..!"/>
    <Form />
    <Footer /></div>
  )
}
