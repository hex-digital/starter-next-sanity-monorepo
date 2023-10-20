import type {
  DefaultDocumentNodeResolver,
  StructureResolver,
  View,
  ViewBuilder,
  ListItemBuilder,
  StructureBuilder,
} from 'sanity/desk';
import { DOCUMENT, SINGLETON } from '@packages/studio';
import { PREVIEWABLE_DOCUMENT_TYPES } from '@packages/studio/schemas/config';
import homepage from './homepage';
import legalPages from './legalPages';
import globalContent from './globalContent';
import siteConfig from './siteConfig';
import { previewPane } from '../preview';
import {JsonPane} from "../json-pane";

const DOCUMENT_TYPES_IN_STRUCTURE = [
  SINGLETON.HOME,
  SINGLETON.NAVIGATION,
  SINGLETON.ANNOUNCEMENT,
  SINGLETON.CONFIG_SEO,
  DOCUMENT.LEGAL_PAGES,
  DOCUMENT.MEDIA_TAG,
  DOCUMENT.NAVIGATION_HEADERS,
  DOCUMENT.NAVIGATION_FOOTERS,
  DOCUMENT.ANNOUNCEMENTS,
];

export const structure: StructureResolver = (S, context) =>
  // See: https://www.sanity.io/docs/structure-builder-reference
  S.list()
    .title('Content')
    .items([
      homepage(S, context),
      legalPages(S, context),
      S.divider(),
      globalContent(S, context),
      siteConfig(S, context),
      S.divider(),
      // Automatically add new document types to the root pane
      ...S.documentTypeListItems().filter(
        (listItem: ListItemBuilder) =>
          // @ts-expect-error Object is possibly 'undefined'
          !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId().toString())
      ),
    ]);

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, options) => {
  return S.document().views(defaultViews(S, options.schemaType));
};

export function defaultViews(S: StructureBuilder, schemaType: string): Array<View | ViewBuilder> {
  const views:  Array<View | ViewBuilder> = [S.view.form(), JsonPane(S)];

  if (PREVIEWABLE_DOCUMENT_TYPES.includes(schemaType)) {
    views.push(previewPane(S));
  }

  return views;
}
