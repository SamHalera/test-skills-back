import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentSeo extends Schema.Component {
  collectionName: 'components_content_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.seo': ContentSeo;
    }
  }
}
