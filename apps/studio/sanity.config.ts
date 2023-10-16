import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { media } from 'sanity-plugin-media';
import { title, dataset, projectId, apiVersion } from './config'
import { DOCUMENT } from '@packages/studio';
import { schemaTypes } from '@packages/studio/schemas';
import { NavigationActiveBadge } from '@packages/studio/badges/NavigationActive';
import { setupSingletons } from './plugins/singletons'
import { structure, defaultDocumentNode } from './plugins/desk';
import { addMenuItemOpenPreview } from './plugins/preview/addMenuItemOpenPreview';

export default defineConfig({
  name: 'default',
  title,

  projectId,
  dataset,
  apiVersion,

  // basePath: '/studio', // for when we embed the studio in a Next.js app

  plugins: [
    deskTool({
      name: 'content',
      title: 'Content',
      structure,
      defaultDocumentNode,
    }),
    // Configures the global "new document" button, and document actions, for singletons
    setupSingletons(),
    // Add the "Open preview" action
    addMenuItemOpenPreview(),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Add a tab for the media manager with tags and searching
    media(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    badges: (prev, context) => {
      const badges = [...prev];
      if (context.schemaType === DOCUMENT.NAVIGATION_HEADERS || DOCUMENT.NAVIGATION_FOOTERS) {
        badges.unshift(NavigationActiveBadge);
      }

      return badges;
    },
  },
})

