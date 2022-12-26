import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useForm } from "../hooks";
import { Input, Button, Select, TextArea } from "../components";
import { formImg } from "../assets";
import { useCreateResourceQuery } from "../services/apiService";
import sprite from "../assets/icons.svg";

export const NewResource = () => {
  const navigate = useNavigate();
  const [callFlag, setCallFlag] = useState(false);
  const { isLoading, isSuccess, error } = useCreateResourceQuery(
    {},
    { skip: !callFlag }
  );

  // This effect helps to navigate and show toast in case of error or success
  useEffect(() => {
    if (error) {
      toast.error(`Something went wrong! ${error.status} `);
    }
    if(isSuccess){
      toast.success("Successfully create the resource");
      navigate("/users")
    }
  }, [isSuccess, error]);

  // This is custom method to call get api as post
  const createResource = () => {
    setCallFlag(true);
  };

  const validationSchema = {
    title: { required: true, min: 3 },
    icon_url: { required: true, isUrl: true },
    link: { required: true, isUrl: true },
    category: { required: true, min: 3 },
  };

  const form = useForm({
    initialState: {
      title: "",
      icon_url: "",
      link: "",
      description: "",
      category: "",
      tag: "user",
    },
    validationSchema,
    onSubmit: (values) => createResource({ formData: values }),
  });

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
            error={form.touched.title && form.errors.title}
            id="title"
          />
          <Input
            label="LINK"
            value={form.values.link}
            onChange={(e) => form.setFieldValue("link", e.target.value)}
            error={form.touched.link && form.errors.link}
            id="link"
          />
          <Input
            label="Icon Url"
            value={form.values.icon_url}
            onChange={(e) => form.setFieldValue("icon_url", e.target.value)}
            error={form.touched.icon_url && form.errors.icon_url}
            id="icon_url"
          />
          <Select
            label="TAG NAME"
            value={form.values.tag}
            onChange={(e) => form.setFieldValue("tag", e.target.value)}
            error={form.touched.tag && form.errors.tag}
            id="tag"
          >
            <option value="user">User</option>
            <option value="request">Request</option>
          </Select>
          <Input
            label="CATEGORY"
            value={form.values.category}
            onChange={(e) => form.setFieldValue("category", e.target.value)}
            error={form.touched.category && form.errors.category}
            id="category"
          />
          <TextArea
            label="Description"
            value={form.values.description}
            onChange={(e) => form.setFieldValue("description", e.target.value)}
            error={form.touched.description && form.errors.description}
            id="description"
          />
          <Button
            className="new-resource-btn"
            type="submit"
            disabled={!form.isValid}
          >
            {isLoading ? "Creating..." : "Create"}
          </Button>
        </form>
      </div>
      <img src={formImg} className="new-resource_img" />
    </div>
  );
};
