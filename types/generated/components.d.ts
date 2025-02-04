import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFeaturedPosts extends Struct.ComponentSchema {
  collectionName: 'components_shared_featured_posts';
  info: {
    displayName: 'Featured_posts';
    icon: 'bulletList';
  };
  attributes: {
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
  };
}

export interface SharedHeroSectionBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_section_blocks';
  info: {
    displayName: 'Hero_Section_Block';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.String;
    Small_text_in_top: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_items';
  info: {
    displayName: 'Menu_Item';
  };
  attributes: {
    Link: Schema.Attribute.String;
    Text: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    Slide: Schema.Attribute.Component<'shared.slides', false>;
  };
}

export interface SharedSliderItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_slider_items';
  info: {
    description: '';
    displayName: 'Slider Item';
  };
  attributes: {
    Date: Schema.Attribute.Date & Schema.Attribute.DefaultTo<'2025-01-07'>;
    Desription: Schema.Attribute.Text;
    Link: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SharedSlides extends Struct.ComponentSchema {
  collectionName: 'components_shared_slides';
  info: {
    displayName: 'Slides';
  };
  attributes: {
    Slide: Schema.Attribute.Component<'shared.slider-item', true>;
  };
}

export interface SharedTopics extends Struct.ComponentSchema {
  collectionName: 'components_shared_topics';
  info: {
    displayName: 'Topics';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.featured-posts': SharedFeaturedPosts;
      'shared.hero-section-block': SharedHeroSectionBlock;
      'shared.media': SharedMedia;
      'shared.menu-item': SharedMenuItem;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.slider-item': SharedSliderItem;
      'shared.slides': SharedSlides;
      'shared.topics': SharedTopics;
    }
  }
}
