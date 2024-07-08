const MAX_TOPICS = 9

export const transformRepoTopics = (topics: string[], language: string): string[] => {
  if (topics.length === 0 && language) {
    return [language]
  } else {
    return topics.slice(0, MAX_TOPICS)
  }
}
