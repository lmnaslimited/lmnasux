import React, { useState } from "react";
import Layout from "../components/layout"
import Container from "../components/container"
import Contacts from "../components/contact/contacts";
import Image from "next/image";
import Enquiry from "../components/contact/enquiry";
import { getContactPageData } from "../lib/api";
export default function Contactus({contactData}) {
    return (
      <div>
         <Layout meta={contactData.contacts.contactMeta}>
  <Container>
    <Contacts contacts={contactData.contacts} ></Contacts>
   <Enquiry contacts={contactData.contacts}></Enquiry>
    
  </Container>
         </Layout>
        </div>
    );
}

export async function getStaticProps() {
  const contactData = await getContactPageData()
  return{ 
    props: { contactData}
  }
}

  
