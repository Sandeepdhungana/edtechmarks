// components/HoverCard.tsx
import React from 'react';
import Link from 'next/link';

interface Item {
  title: string;
  list: string[];
}

interface HoverCardProps {
  items: Item[];
  closeDropdown: () => void; // Function to close the dropdown
}

const HoverCard: React.FC<HoverCardProps> = ({ items, closeDropdown }) => {
  const createSlug = (name: string) => {
    return `/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  };

  return (
    <div
      className="absolute left-0 mt-2 bg-white text-black py-2 rounded shadow-lg"
      onMouseLeave={closeDropdown} // This will close the dropdown when mouse leaves the card
      style={{ minWidth: '600px' }} // Adjust width as necessary
    >
      <div className="grid grid-cols-3 gap-4 p-4">
        {items.map((item, index) => (
          <div key={index} className="space-y-1">
            <p className="font-bold">{item.title}</p>
            <ul className="list-disc list-inside">
              {item.list.map((subItem, subIndex) => (
                <li key={subIndex} className="hover:bg-gray-100 cursor-pointer px-2 py-1">
                  <Link href={createSlug(subItem)}>
                    <a className="hover:underline">{subItem}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverCard;
