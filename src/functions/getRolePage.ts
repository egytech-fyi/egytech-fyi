import { PAGES, POSITIONS_OPTIONS } from '@constants'

const createRoleSet = (categories: string[]) =>
  new Set(
    POSITIONS_OPTIONS.filter((position) => categories.includes(position.category)).map(
      (pos) => pos.positionName,
    ),
  )

const engineeringRoles = createRoleSet(['engineer', 'developer', 'data'])

const managementRoles = createRoleSet(['manager'])

const productRoles = createRoleSet(['product'])
// MISC: other, designer

export function getRoleSpecificPage(role: string): number {
  switch (true) {
    case role === '':
    case engineeringRoles.has(role):
      return PAGES.ENGINEERING_SKILLS
    case managementRoles.has(role):
      return PAGES.MANAGEMENT_ACTIVITIES
    case productRoles.has(role):
      return PAGES.PRODUCT_ACTIVITIES
    default:
      return PAGES.SALARY
  }
}
