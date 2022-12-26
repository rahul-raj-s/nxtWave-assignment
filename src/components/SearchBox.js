import { useEffect, useState, useMemo, useRef } from "react";
import { debounce } from "../helper";
import sprite from "../assets/icons.svg";

export const SearchBox = ({ value = "", onChange, debounceTime = 1000 }) => {
  const [currentVal, setCurrentVal] = useState(value);
  const debouncedFun = useMemo(() => debounce(onChange, debounceTime), []);
  const wrapperRef = useRef(null);

  useEffect(() => {
    debouncedFun(currentVal);
  }, [currentVal]);

  return (
    <div className="search-wrapper" onClick={() => wrapperRef.current.focus()}>
      <input
        type="search"
        placeholder="Search"
        className="search-box"
        value={currentVal}
        onChange={(e) => setCurrentVal(e.target.value)}
        ref={wrapperRef}
      />
      <span className="search-icon">
        <svg>
          <use href={`${sprite}#search`} />
        </svg>
      </span>
    </div>
  );
};
