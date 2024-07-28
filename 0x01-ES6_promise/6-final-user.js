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
     result.push({
      status: 'rejected',
      value: `Error: ${fileName} cannot be processed`,
    });   
  }

  try {
    const upload = await uploadPhoto(fileName);
    result.push({ status: 'fulfilled', value: upload });
  }
  catch (error) {
    result.push({
      status: 'rejected',
      value: `Error: ${fileName} cannot be processed`,
    });
  }
  return result;
}
