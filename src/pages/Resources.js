import { useEffect, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { SearchBox, Card } from "../components";
import { useData } from "../hooks";
import { useGetResourcesQuery } from "../services/apiService";

export const Resources = ({ type = "" }) => {
  const { data: resources, isLoading: isLoadingApi } = useGetResourcesQuery();
  const [filter, setFilter] = useState({
    title: "",
    tag: type,
  });
  const { data } = useData(resources, filter);

  const handleFilterChange = (key, value) => {
    setFilter((prevState) => ({ ...prevState, [key]: value }));
  };

  const filterList = useMemo(
    () => [
      { label: "Resources", path: "/resources" },
      { label: "Requests", path: "/requests" },
      { label: "Users", path: "/users" },
    ],
    []
  );

  useEffect(() => {
    handleFilterChange("tag", type);
  }, [type]);

  return (
    <main>
      <div className="top-section">
        <nav className="filters">
          {filterList.map((filter) => (
            <NavLink
              className={(navData) =>
                `filter-item ${navData.isActive && "active"}`
              }
              to={filter.path}
              key={filter.path}
            >
              {filter.label}
            </NavLink>
          ))}
        </nav>
        <div className="searchbox-wrapper">
          <SearchBox
            value={filter.title}
            onChange={(value) => handleFilterChange("title", value)}
          />
        </div>
      </div>
      <div className="resource-list">
        {!isLoadingApi &&
          data?.map(({ title, icon_url, category, id, link, description }) => (
            <Card
              title={title}
              iconUrl={icon_url}
              key={id}
              subtitle={category}
              link={link}
              description={description}
            />
          ))}
        {isLoadingApi && <h1>Loading...</h1>}
        {!isLoadingApi && !data?.length && <h1>No Data</h1>}
      </div>
    </main>
  );
};
