import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import authorStore from "../stores/authorsStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import {
  loadCourses,
  deleteCourse,
  loadAuthors,
} from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourse] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState(authorStore.getAuthors());
  useEffect(() => {
    courseStore.addChangeListener(onChangeCourses);
    authorStore.addChangeListener(onChangeAuthors);
    if (courseStore.getCourses().length === 0) {
      loadCourses();
      loadAuthors();
    }
    return () => {
      courseStore.removeChangeListener(onChangeCourses);
      authorStore.removeChangeListener(onChangeAuthors);
    };
    //cleanup on unmount
  }, []);

  function onChangeCourses() {
    setCourse(courseStore.getCourses());
  }
  function onChangeAuthors() {
    console.log(authorStore.getAuthors())
    setAuthors(authorStore.getAuthors());
  }
 
  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to={"/course"}>
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} authors = {authors} />
    </>
  );
}

export default CoursesPage;
