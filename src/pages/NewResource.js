import { useNavigate } from "react-router";
import { useForm } from "../hooks";
import { Input, Button, Select, TextArea } from "../components";
import { formImg } from "../assets";
import { useCreateResourceMutation } from "../services/apiService";
import sprite from "../assets/icons.svg";

export const NewResource = () => {
  const navigate = useNavigate();
  const form = useForm({
    initialState: {
      title: "",
      icon_url: "",
      link: "",
      description: "",
      category: "",
      tag: "user",
    },
    validator: (values) => validate(values),
    onSubmit: (values) => createResource({ formData: values }),
  });

  const [createResource, { isLoading, error }] = useCreateResourceMutation();

  const validate = (values) => {
    let errors = {};
    return errors;
  };

  return (
    <div className="new-resource">
      <div className="new-resource_left">
        <div className="breadcrum">
          <span className="back-icon" onClick={() => navigate("/users")}>
            <svg className="icon">
              <use href={`${sprite}#back`} />
            </svg>
            Users
          </span>
        </div>
        <form className="resource-form" onSubmit={form.submitForm}>
          <h1 className="resource-form-title">Item Details</h1>
          <Input
            label="ITEM TITLE"
            value={form.values.title}
            onChange={(e) => form.setFieldValue("title", e.target.value)}
          />
          <Input
            label="LINK"
            value={form.values.link}
            onChange={(e) => form.setFieldValue("link", e.target.value)}
          />
          <Input
            label="Icon Url"
            value={form.values.icon_url}
            onChange={(e) => form.setFieldValue("icon_url", e.target.value)}
          />
          <Select
            label="TAG NAME"
            value={form.values.tag}
            onChange={(e) => form.setFieldValue("tag", e.target.value)}
          >
            <option value="user">User</option>
            <option value="request">Request</option>
          </Select>
          <Input
            label="CATEGORY"
            value={form.values.category}
            onChange={(e) => form.setFieldValue("category", e.target.value)}
          />
          <TextArea
            label="Description"
            value={form.values.description}
            onChange={(e) => form.setFieldValue("description", e.target.value)}
            textArea
          />
          <Button className="new-resource-btn" type="submit">
            Create
          </Button>
        </form>
      </div>
      <img src={formImg} className="new-resource_img" />
    </div>
  );
};
