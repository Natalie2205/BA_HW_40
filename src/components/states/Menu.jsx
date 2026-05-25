import { useState } from "react";


export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
 const menuItems = ["Home", "About", "Portfolio", "Contacts", "Works"];
    
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Меню</button>
          {isOpen && (
              <ul className="menu-list" style={{ listStyle: 'none', padding: 10 }}>
          {menuItems.map((item, index) => (
            <li key={index} style={{ margin: '8px 0' }}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Menu;
