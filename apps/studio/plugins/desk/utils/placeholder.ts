import type { StructureBuilder } from 'sanity/desk';
import { CircleIcon } from '@sanity/icons'

export function placeholder(S: StructureBuilder, title: string, icon?: any) {
  return S.listItem()
    .title(title)
    .icon(icon || CircleIcon)
    .child(S.list().title(title));
}
