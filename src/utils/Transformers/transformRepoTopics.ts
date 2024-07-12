const MAX_TOPICS = 9

export const transformRepoTopics = (topics: string[], language: string): string[] => {
  let repoTopics: string[] = []

  if (topics.length) {
    repoTopics = [...topics.slice(0, MAX_TOPICS)]
  }

  if (Boolean(language)) {
    repoTopics.push(language)
  }

  return repoTopics
}
