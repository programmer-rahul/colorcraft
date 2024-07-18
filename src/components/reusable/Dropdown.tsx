import { useState } from 'react';

interface DropdownProps {
    title: string;
    items: string[];
    clickHandler: (item: string) => void;
    style?: string;
    selectedItem?: string;
    updateWithSelectedItem?: boolean;
}

const Dropdown = ({ title, items, clickHandler, style, updateWithSelectedItem }: DropdownProps) => {
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
                className="flex items-center justify-between px-2 py-1 border font-semibold rounded-md cursor-pointer z-10"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p>{currentTitle}</p>
                <span className="text-2xl">▼</span>
            </div>
            {isOpen && (
                <div className="absolute top-10 w-40 bg-white border rounded-md z-10">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="px-2 py-1 cursor-pointer hover:bg-gray-200 text-black"
                            onClick={() => handleItemClick(item)}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;