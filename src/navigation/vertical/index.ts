import type { VerticalNavItems } from '@/@layouts/types'

export default [
  {
    title: 'Жисмоний шахслар',
    to: { name: 'individuals' },
    icon: { icon: 'tabler-users' },
    subject: 'Admin',
  },
  {
    title: 'Юридик шахслар',
    to: { name: 'legal-people' },
    icon: { icon: 'tabler:git-pull-request-draft' },
    subject: 'Admin',
  },

] as VerticalNavItems
