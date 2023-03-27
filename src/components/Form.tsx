import { FormEvent, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          type="text"
          id="name"
          value={person.name}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
          id="age"
          type="number"
          value={person.age}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
