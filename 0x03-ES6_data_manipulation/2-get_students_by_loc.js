#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function getStudentsByLocation(students, city) {
  return students.filter(student => student.location === city);
}
