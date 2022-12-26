import { useEffect, useState } from "react";

export const useData = (apiData, filterObj) => {
  const [data, setData] = useState(apiData || []);

  useEffect(() => {
    setData(apiData);
    filter();
  }, [apiData]);

  useEffect(() => {
    filter();
  }, [filterObj]);

  const isSelectable = (datum) => {
    let filterKeys = Object.keys(filterObj);

    for (let i = 0; i < filterKeys.length; i++) {
      let key = filterKeys[i];
      let value = datum[key] || "";
      value = `${value}`?.toLocaleLowerCase()?.trim() || "";
      let searchKey = `${filterObj[key]}`?.toLocaleLowerCase()?.trim() || "";

      if (!value.includes(searchKey)) {
        return false;
      }
    }
    return true;
  };

  const filter = () => {
    if (apiData) {
      let tempData = apiData.filter((datum) => isSelectable(datum));
      setData(tempData);
    }
  };

  return { data };
};
