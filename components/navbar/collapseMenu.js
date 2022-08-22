import { useState, useEffect, useRef } from 'react';
export default function CollapseMenu({ subMenus }) {
  const hiddenClass = ' hidden'
  const [collapse, setCollapse] = useState(true);
  // create a React ref for the dropdown element
  const dropdown = useRef(null);
  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (collapse) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setCollapse(true);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [collapse]);

  return (
    <button
      onClick={() => {
        setCollapse(!collapse);
      }}>
      <div  ref={dropdown} className="block  lg:inline-block text-th-text-dark hover:text-th-text-medium">
        <svg
          className="fill-current h-4 w-4 ml-4 text-th-text-dark  dark:hover:text-th-text-dark  hover:text-th-text-dark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
      
      <ul className={"absolute z-10 -ml-24 w-44 py-8  md:h-44 pt-1 group-hover:block" + (collapse ? hiddenClass : null)}>
        {
          subMenus.map((subMenu) => (
            <li key={subMenu.name} className="">
              <a href={subMenu.href} className="px-12 m-2 hover:bg-th-background-cta bg-th-background-secondary text-left text-th-text-dark hover:text-th-text-light py-1 block whitespace-no-wrap">
                {subMenu.name}
              </a>
            </li>))
        }
      </ul>
    </button>
  )
} 