import { PAGES, POSITIONS_OPTIONS } from '@constants'

const engineeringRoles = new Set(
  POSITIONS_OPTIONS.filter((position) =>
    ['engineer', 'developer', 'data'].includes(position.category),
  ).map((pos) => pos.positionName),
)
const managementRoles = new Set(
  POSITIONS_OPTIONS.filter((position) => position.category == 'manager').map(
    (pos) => pos.positionName,
  ),
)
const productRoles = new Set(
  POSITIONS_OPTIONS.filter((position) => ['product'].includes(position.category)).map(
    (pos) => pos.positionName,
  ),
)
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
