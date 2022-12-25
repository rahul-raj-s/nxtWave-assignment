import { SearchBox, Card } from "../components";
import resources from "./resources.json";

export const Resources = () => {
  return (
    <main>
      <h1>Resources</h1>
      <SearchBox />
      <nav></nav>
      <div className="resource-list">
        {resources.map((resource) => (
          <Card title={resource.title} iconUrl={resource.icon_url}/>
        ))}
      </div>
    </main>
  );
};
