/* eslint-disable @typescript-eslint/no-explicit-any */
import feed from './data/feed.json'
import events from './data/events.json'
import tasks from './data/tasks.json'

const fetch = (data: any, time = 0) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, time)
  })
}

export const fetchFeed = () => {
  return fetch(feed, 1000)
}

export const fetchEvents = () => {
  return fetch(events, 1000)
}

export const fetchTasks = () => {
  return fetch(tasks, 1000)
}

export * from './index'
