import { ConfigContext } from 'sanity';
import { StructureBuilder } from 'sanity/desk';
import { Divider, ListItem, ListItemBuilder } from 'sanity/lib/exports/desk';

/**
 * Helper for creating and typing composable desk structure parts.
 */
export function defineStructure<StructureType>(
  factory: (S: StructureBuilder, context: ConfigContext) => StructureType
) {
  return factory;
}

export type ListItems = Array<ListItemBuilder | ListItem | Divider>;
