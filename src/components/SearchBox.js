import { useEffect, useState, useMemo } from "react";
import { debounce } from "../helper";
import sprite from "../assets/icons.svg";

export const SearchBox = ({ value = "", onChange, debounceTime = 1000 }) => {
  const [currentVal, setCurrentVal] = useState(value);
  const debouncedFun = useMemo(() => debounce(onChange, debounceTime), []);

  useEffect(() => {
    debouncedFun(currentVal);
  }, [currentVal]);

  return (
    <div className="search-wrapper">
      <input
        type="search"
        placeholder="Search"
        className="search-box"
        value={currentVal}
        onChange={(e) => setCurrentVal(e.target.value)}
      />
      <span className="search-icon">
        <svg className="icon">
          <use href={`${sprite}#search`} />
        </svg>
      </span>
    </div>
  );
};
