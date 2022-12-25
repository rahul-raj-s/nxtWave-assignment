import { SearchBox, Card } from "../components";
import { useGetResourcesQuery } from "../services/apiService";

export const Resources = () => {
  const { data: resources } = useGetResourcesQuery();

  return (
    <main>
      <h1>Resources</h1>
      <SearchBox />
      <nav></nav>
      <div className="resource-list">
        {resources?.map(({ title, icon_url, id }) => (
          <Card title={title} iconUrl={icon_url} key={id} />
        ))}
      </div>
    </main>
  );
};
