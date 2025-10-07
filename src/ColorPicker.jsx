import {useState} from 'react';

export default function ColorPicker(props) {
    const [selectedColor, setSelectedColor] = useState({hex: null, name: null});
    const [focusedIndex, setFocusedIndex] = useState(null);

    const colors = [
        {hex: '#FF5733', name: 'Red'},
        {hex: '#33FF57', name: 'Green'},
        {hex: '#3357FF', name: 'Blue'},
        {hex: '#F1C40F', name: 'Yellow'},
        {hex: '#8E44AD', name: 'Purple'},
        {hex: '#E67E22', name: 'Orange'},
        {hex: '#2ECC71', name: 'Emerald'},
        {hex: '#3498DB', name: 'Sky Blue'},
        {hex: '#E74C3C', name: 'Crimson'},
        {hex: '#1ABC9C', name: 'Turquoise'}
    ];

    function handleClick(color) {
        setSelectedColor(color);
    }
    function handleMouseEnter(hex) {
        setSelectedColor({hex: hex, name: null});
    }
    function handleMouseLeave() {
        setSelectedColor({hex: null, name: null});
    }
    function handleFocus(index) {
        setFocusedIndex(index);
        setSelectedColor({hex: colors[index].hex, name: null});
    } 

    function handleBlur() {
        setFocusedIndex(null);
        setSelectedColor({hex: null, name: null});
    }
    function handleKeyDown(e, index) {
        if(e.key === 'ArrowRight') {
            const nextIndx = (index + 1) % colors.length;
            setFocusedIndex(nextIndx);
            setSelectedColor({hex: colors[nextIndx].hex, name: null});
        }
        if(e.key === 'ArrowLeft') {
            const prevIndx = (index - 1 + color.length) % colors.length;
            setFocusedIndex(nextIndx);
            setSelectedColor({hex: colors[prevIndx].hex, name: null});
        }
    }

    return ( 
        <div className="color-picker">
            <h1 className="title">Color Picker</h1>
            <div className="color-list">
            {colors.map((color, index) => (
                <div key={index}
                    className={`color-item ${focusedIndex === index ? 'focused' : ''}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => handleClick(color)}
                    onMouseEnter={() => handleMouseEnter(color.hex)}
                    onMouseLeave={handleMouseLeave}
                    onFocus={() => handleFocus(index)}
                    onBlur={handleBlur}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    tabIndex={0}
                >  
                    {selectedColor.hex === color.hex && (
                    <span className="color-code">{selectedColor.name || color.hex}</span>
                    )}
                </div>
            ))}
            </div>
        </div>
    )
}