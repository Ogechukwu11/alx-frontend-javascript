#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
}
