interface EmojiMap {
  [key: string]: string
}

export const emojiMap: EmojiMap = {
  ':eyes:': '👀',
  ':pencil2:': '✏️',
  ':gear:': '⚙️',
}

export const replaceShortcodeEmojis = (text: string) => {
  const regex = /(:\w+:)/g
  return text.replace(regex, (match) => emojiMap[match] || match)
}
