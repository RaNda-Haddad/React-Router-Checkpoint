import React from "react";
import { Form } from "react-bootstrap";


function FilterMovie({ inputSearch, setInputSearch}) {

  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Search your Movie..."
        onChange={(e) => setInputSearch(e.target.value)}
        value={inputSearch}
      />


    </div>
  );
}

export default FilterMovie;