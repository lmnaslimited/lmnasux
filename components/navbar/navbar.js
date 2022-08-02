import React from "react"
import { useEffect, useState, useContext } from 'react';
import SunMoon from "./sunMoon";
import Search from "./search";
import Login from "./login";
import MenuList from "./menuList";
import Logo from "./logo";
import ToggleMobileMenu from "./toggleMobileMenu";
import AppContext from '../../context/appContext';
import Container from "../container";
const industries = ['Retail', 'Education', 'Healthcare', 'Distribution', 'Manufacturing', 'Agriculture']


const Navbar = ({ categories }) => {
  const menuItems = BuildMenu({ categories })
  const [mounted, setMounted] = useState(false);
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  const appContext = useContext(AppContext);
  if (!mounted) return null;
  return (<div>
    <Container>
    <nav className="mx-auto flex items-center justify-between flex-wrap py-6">
      <Logo />
      {/**Handle Hamburger toggle and set the display MobileMenu AppContext */}
      <ToggleMobileMenu />
      <div className={"w-full block flex-grow lg:flex  lg:items-center lg:w-auto " + (appContext.displayMobileMenu ? " hidden" : null)}>
        <MenuList menuItems={menuItems} />
        {/**To be replaced with Typesense Search 
        <Search />*/}
        <div className="flex items-center justify-between flex-row-reverse lg:flex-row">
          <div className="mt-4 lg:mt-0">
            <SunMoon />
          </div>
         {/**  <Login />*/}
        </div>
      </div>
    </nav>
    </Container>
  </div>
  )
}

export default Navbar

function BuildMenu({ categories }) {
  //const cat = categories.map((category) => { return {name: category.name, slug: category.slug}  })
  return [
    {
      menu: 'About Us',
      target: '/aboutus'
    },
    {
      menu: 'Products',
      target: 'products'
    },
    {
      menu: 'Industries',
      target: 'https://lmnas.com/#industries'
    },
    {
      menu: 'Services',
      target: 'https://lmnas.com/#pricing'
    },
    {
      menu: 'Pricing',
      target: 'https://lmnas.com/#pricing'
    },

    {
      menu: 'Testimonials',
      target: 'https://lmnas.com/contact'
    },
    {
      menu: 'Contact Us',
      target: '/contactus'
    }
  ]
}