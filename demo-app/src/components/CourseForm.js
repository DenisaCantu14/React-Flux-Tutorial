import React, { useState, useEffect } from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";
import authorStore from "../stores/authorsStore";

import { loadAuthors } from "../actions/courseActions";

function CourseForm(props) {
  const [authors, setAuthors] = useState(authorStore.getAuthors());
  useEffect(() => {
    authorStore.addChangeListener(onChangeAuthors);
    if (authorStore.getAuthors().length === 0) {
      loadAuthors();
    }
    return () => {
      authorStore.removeChangeListener(onChangeAuthors);
    };
    //cleanup on unmount
  }, []);

  function onChangeAuthors() {
    setAuthors(authorStore.getAuthors());
  }
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        name="title"
        value={props.course.title || ""}
        onChange={props.onChange}
        error={props.errors.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            value={props.course.authorId || ""}
            className="form-control"
            onChange={props.onChange}
          >
             <option value="" />
            {authors.map (author => {return(
              <option value={author.id} key = {author.id} >{author.name}</option>
            )})}
           
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId} </div>
        )}
      </div>

      <TextInput
        id="category"
        label="Category"
        name="category"
        value={props.course.category || ""}
        onChange={props.onChange}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}
CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
export default CourseForm;
