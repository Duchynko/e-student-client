/* eslint-disable @typescript-eslint/no-explicit-any */
import events from './data/events.json'
import tasks from './data/tasks.json'
import currentUser from './data/currentUser.json'
import school from './data/schools.json'

const fetch = (data: any, time = 0): Promise<any> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, time)
  })
}

export const fetchCurrentUser = () => {
  return fetch(currentUser, 300)
}

export const getSchoolPosts = () => {
  return fetch(school.posts, 300)
}

export const getEvents = () => {
  return fetch(events, 300)
}

export const getTasks = () => {
  return fetch(tasks, 300)
}

export * from './index'
