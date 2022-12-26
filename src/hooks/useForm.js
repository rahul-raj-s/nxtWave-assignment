import { useEffect, useMemo, useState } from "react";

/**
 *
 * @param {Object} initialState intial state of the form in key,value pair
 * @param {Function} validator a validator function which validated the current state values and returns error object
 * @param {Function} onSubmit function to submit the form, which get call only if form is valid
 * @param {Function} stateChangeCallBack a function to callback whenever there is any change is state
 * @returns {Object} an object with values, touched, errors, setFieldValue, submitForm
 */
const isValidUrl = (urlString) => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(urlString);
};

const jsonBasedValidator = (values, schema) => {
  let errors = {};

  Object.keys(schema).forEach((key) => {
    if (schema[key].required && [undefined, null, ""].includes(values[key])) {
      errors[key] = "Required";
    } else if (schema[key].min && values[key].length < schema[key].min) {
      errors[key] = `Minimum allowed value is ${schema[key].min}`;
    } else if (schema[key].isUrl && !isValidUrl(values[key])) {
      errors[key] = `Not a valid url`;
    }
  });

  return errors;
};

export const useForm = ({
  initialState,
  validationSchema,
  validator,
  onSubmit,
  stateChangeCallBack,
}) => {
  const initialTouchedState = useMemo(() => {
    let touched = {};
    Object.keys(initialState).forEach((key) => {
      touched[key] = false;
    });
    return touched;
  }, [initialState]);

  const [allTouched, setAllTouched] = useState(false);
  const [values, setValues] = useState({ ...initialState });
  const [touched, setTouched] = useState({ ...initialTouchedState });
  const [errors, setErrors] = useState({ ...initialState });
  const [isValid, setIsValid] = useState(false);

  // If there is no key value pair in errors object it's supposed to be valid form
  useEffect(() => {
    setIsValid(Object.keys(errors).length == 0);
  }, [errors]);

  const setFieldValue = (key, value) => {
    let tempVal = { ...values, [key]: value };
    let tempTouched = { ...touched, [key]: true };
    setValues(tempVal);
    setTouched(tempTouched);

    if (validator) {
      setErrors(validator(tempVal));
    } else if (validationSchema) {
      setErrors(jsonBasedValidator(tempVal, validationSchema));
    }
    if (stateChangeCallBack) {
      stateChangeCallBack(tempVal);
    }
  };

  const markAllTouched = () => {
    let touched = {};

    Object.keys(initialState).forEach((key) => {
      touched[key] = true;
    });

    setTouched(touched);
    setAllTouched(true);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!allTouched) {
      markAllTouched();
    }

    if (validator || validationSchema) {
      let errors = {};

      if (validator) {
        errors = validator(values);
      } else {
        errors = jsonBasedValidator(values, validationSchema);
      }

      if (Object.keys(errors).length > 0) {
        setErrors(errors);
      } else {
        onSubmit(values);
      }
    } else {
      onSubmit(values);
    }
  };

  return { values, touched, errors, isValid, setFieldValue, submitForm };
};
