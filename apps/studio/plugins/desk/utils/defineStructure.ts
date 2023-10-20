import type { ConfigContext } from 'sanity';
import type { StructureBuilder, Divider, ListItem, ListItemBuilder } from 'sanity/desk';

/**
 * Helper for creating and typing composable desk structure parts.
 */
export function defineStructure<StructureType>(
  factory: (S: StructureBuilder, context: ConfigContext) => StructureType
) {
  return factory;
}

export type ListItems = Array<ListItemBuilder | ListItem | Divider>;
