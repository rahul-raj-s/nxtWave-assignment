import { useState } from "react";
import { Button, Input } from "../components";

const ExperienceForm = ({ experience, hasError, onChange }) => {
  return (
    <div style={{ border: `${hasError ? "1px solid red" : " "}` }}>
      <Input
        label="Company"
        value={experience.company}
        onChange={(e) => onChange("company", e.target.value)}
      />
      <Input
        label="Role"
        value={experience.role}
        onChange={(e) => onChange("role", e.target.value)}
      />
    </div>
  );
};

export const Interview = () => {
  const [experiences, setExperiences] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleAddNew = () => {
    let tempErrors = [];
    for (let i = 0; i < experiences.length; i++) {
      if (!isValid(experiences[i])) {
        tempErrors.push(i);
      }
    }
    setErrors(tempErrors);

    if (experiences.length == 0 || tempErrors.length == 0) {
      let temp = [...experiences, { company: "", role: "" }];
      setExperiences(temp);
    }
  };

  const onChange = (index, key, value) => {
    let temp = [...experiences];
    temp[index][key] = value;
    setExperiences(temp);
  };

  const isValid = (experience) => {
    if (!experience.company) {
      return false;
    }
    return true;
  };

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <h1>Experiences</h1>
      {experiences.map((experience, index) => (
        <ExperienceForm
          experience={experience}
          hasError={errors.includes(index)}
          onChange={(key, value) => onChange(index, key, value)}
          key={index}
        />
      ))}
      <Button onClick={handleAddNew}>Add New</Button>
    </div>
  );
};
