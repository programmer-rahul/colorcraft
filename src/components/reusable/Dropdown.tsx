import { useState } from "react";

interface DropdownProps {
  title: string;
  items: string[];
  clickHandler: (item: string) => void;
  style?: string;
  selectedItem?: string;
  updateWithSelectedItem?: boolean;
  maxHeight?: string; // Added maxHeight parameter
}

const Dropdown = ({
  title,
  items,
  clickHandler,
  style,
  updateWithSelectedItem,
  maxHeight,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleItemClick = (item: string) => {
    clickHandler(item);
    setIsOpen(false);
    if (updateWithSelectedItem) {
      setTitle(item);
    }
  };
  const [currentTitle, setTitle] = useState(title);
  return (
    <div className={`relative ${style}`}>
      <div
        className="z-10 flex cursor-pointer items-center justify-between rounded-md border px-2 py-1 font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{currentTitle}</p>
        <span className="text-2xl">▼</span>
      </div>
      {isOpen && (
        <div
          className="custom-scrollbar absolute top-10 z-10 w-40 overflow-y-auto rounded-md border bg-white"
          style={{ maxHeight: maxHeight || "auto" }} // Apply maxHeight
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer px-2 py-1 text-black hover:bg-gray-200"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
