import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SearchBox, Card } from "../components";
import { useData } from "../hooks";
import { useGetResourcesQuery } from "../services/apiService";

export const Resources = ({ type = "" }) => {
  const { data: resources } = useGetResourcesQuery();
  const [filter, setFilter] = useState({
    title: "",
    tag: type,
  });
  const { data } = useData(resources, filter);

  const handleFilterChange = (key, value) => {
    setFilter((prevState) => ({ ...prevState, [key]: value }));
  };

  useEffect(() => {
    handleFilterChange("tag", type);
  }, [type]);

  return (
    <main>
      <div className="top-section">
        <nav className="filters">
          <NavLink
            className={(navData) =>
              `filter-item ${navData.isActive && "active"}`
            }
            to="/resources"
          >
            Resources
          </NavLink>
          <NavLink
            className={(navData) =>
              `filter-item ${navData.isActive && "active"}`
            }
            to="/requests"
          >
            Requests
          </NavLink>
          <NavLink
            className={(navData) =>
              `filter-item ${navData.isActive && "active"}`
            }
            to="/users"
          >
            Users
          </NavLink>
        </nav>
        <div className="searchbox-wrapper">
          <SearchBox
            value={filter.title}
            onChange={(value) => handleFilterChange("title", value)}
          />
        </div>
      </div>
      <div className="resource-list">
        {data?.map(
          ({ title, icon_url, category, id, link, description, tag }) => (
            <Card
              title={title}
              iconUrl={icon_url}
              key={id}
              subtitle={category}
              link={link}
              description={description}
              tag={tag}
            />
          )
        )}
      </div>
    </main>
  );
};
