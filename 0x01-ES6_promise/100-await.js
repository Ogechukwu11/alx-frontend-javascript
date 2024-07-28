#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
import { uploadPhoto, createUser } from "./utils";

export default async function asyncUploadUser() {
  try {
    const upload = await uploadPhoto();
    const us = await createUser();
    return ({
      photo: upload,
      user: us,
    });
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
