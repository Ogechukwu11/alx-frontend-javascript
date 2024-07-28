#!/usr/bin/node
/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.toString());  
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
