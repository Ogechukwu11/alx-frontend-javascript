#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map(student => {
    return student['id'];
  });
}
