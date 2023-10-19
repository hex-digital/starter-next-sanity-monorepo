/**
 * This plugin contains all the logic for setting up the singletons
 */

import { DocumentActionComponent, PluginOptions } from 'sanity';
import { LOCKED_DOCUMENT_TYPES } from '@packages/studio/schemas/config';

export function setupSingletons(): PluginOptions {
  return {
    name: 'singletonPlugin',
    document: {
      // Hide 'Singletons (such as Home)' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter(
            (templateItem) => !LOCKED_DOCUMENT_TYPES.includes(templateItem.templateId),
          )
        }

        return prev
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
      actions: (prev, { schemaType }) => {
        if (LOCKED_DOCUMENT_TYPES.includes(schemaType)) {
          prev = prev.filter(
            ({ action }: DocumentActionComponent) =>
              action !== 'duplicate' && action !== 'unpublish' && action !== 'delete'
          )
        }


        return prev
      },
    },
  }
}
