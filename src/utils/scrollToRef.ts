export const scrollToRef = (elem: HTMLElement | null) => {
  elem?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
