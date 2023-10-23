interface Prepare {
  title?: string
  slug?: string
  visibility?: string
}

export function defaultPreview() {
  return {
    select: {
      title: 'title',
      slug: 'slug.current',
      visibility: 'pageVisibility',
    },
    prepare({ title, slug, visibility }: Prepare) {
      const vis = visibility || 'public';
      const subtitle = [vis.charAt(0).toUpperCase() + vis.slice(1)];

      if (slug !== undefined) {
        subtitle.push(`/${slug}`);
      }

      return {
        title,
        subtitle: subtitle.join(' - '),
      };
    },
  };
}
