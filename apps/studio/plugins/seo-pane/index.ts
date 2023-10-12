import { StructureBuilder } from 'sanity/desk';
import { SEOPane } from 'sanity-plugin-seo-pane';

/**
 * This currently isn't working, due to changes by the underlying Yoast package.
 * We'll want to come up with a solution for SEO, so I've left this in for now for when we do.
 * When we come to use it, it should be as simple as adding a view to `desk/index.ts`
 *   if (SEO_ANALYSIS_DOCUMENT_TYPES.includes(schemaType)) {
 *     views.push(seoPane(S));
 *   }
 */
export function seoPane(S: StructureBuilder) {
  return S.view
    .component(SEOPane)
    .title('SEO')
    .options({
      // Retrieve the keywords and synonyms at the given dot-notated strings
      keywords: `seo.keywords`,
      synonyms: `seo.synonyms`,
      url: (_doc: any) => 'https://google.com', // resolvePreviewUrl(doc),

      // Alternatively, specify functions (may be async) to extract values
      // keywords: doc => doc.seo?.keywords,
      // synonyms: async(doc) => client.fetch('some query to get synonyms', {id: doc._id}),
      // url: async(doc) => client.fetch('some query to construct a url with refs', {id: doc._id})
    });
}


