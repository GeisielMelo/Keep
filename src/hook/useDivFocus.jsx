import { useRef, useEffect, useState } from 'react';

export const useDivFocus = () => {
  const focus = useRef();
  const [isFocused, setIsFocused] = useState(false);
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (focus.current && !focus.current.contains(e.target)) {
        setIsFocused(false);
      } else {
        setIsFocused(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { isFocused, focus };
};
