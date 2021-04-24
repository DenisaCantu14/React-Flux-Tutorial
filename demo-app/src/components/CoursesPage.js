import React, {useState, useEffect} from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList"
function CoursesPage () {
  const [courses, setCourse] = useState([])
  useEffect(() => {
      getCourses().then( _courses => setCourse(_courses));
  }, [])
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={courses} />
      </>
    );
  }

export default CoursesPage;
