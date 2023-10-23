import preview from './previews/Preview.module.css';

interface Props {
  children: React.ReactNode,
  canShowPreview: boolean
  type: string
  Icon: React.ComponentType<{ className: string }>
}

export function SeoPreviewCard({ canShowPreview, children, Icon, type }: Props) {
  return (
    <div className={preview.seoItem}>
      <h3 className={preview.seoItemTitle}>
        <Icon className={preview.seoItemLogo} />
        {type} preview
      </h3>
      <div className={preview.seoItemContent}>
        {canShowPreview ? (
          <div className={preview.seoItemCard}>
            {children}
          </div>
        ) : (
          <p>Please add a title and fill out your SEO fields first.</p>
        )}
      </div>
    </div>
  );
}
