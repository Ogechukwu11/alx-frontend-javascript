#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName, lastName, fileName,
) {
  const result = [];
  try {
    const signup = await signUpUser(firstName, lastName);
    result.push({ status: 'fulfilled', value: signup }); 
  }
  catch (error) {
    result.push({ status: 'rejected', value: error });   
  }

  try {
    const upload = await uploadPhoto(filename);
    result.push({ status: 'fulfilled', value: upload });
  }
  catch (error) {
    result.push({ status: 'rejected', value: error });
  }
  return result;
}
