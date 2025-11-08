import type { Schema, Struct } from '@strapi/strapi';

export interface HomeAiCard extends Struct.ComponentSchema {
  collectionName: 'components_home_ai_cards';
  info: {
    description: 'Card item for the AI powered healthcare section';
    displayName: 'AI Card';
    icon: 'columns';
  };
  attributes: {
    class_name: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    feature: Schema.Attribute.Enumeration<
      ['spotlight', 'counter', 'timeline', 'icons', 'typing', 'metrics', 'none']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    href: Schema.Attribute.String;
    identifier: Schema.Attribute.String & Schema.Attribute.Required;
    metrics: Schema.Attribute.Component<'home.ai-metric', true>;
    show_icons: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    size: Schema.Attribute.Enumeration<['sm', 'md', 'lg']> &
      Schema.Attribute.DefaultTo<'md'>;
    spotlight_items: Schema.Attribute.Component<'home.ai-text-item', true>;
    statistic: Schema.Attribute.Component<'home.ai-statistic', false>;
    timeline: Schema.Attribute.Component<'home.ai-timeline-entry', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    typing_text: Schema.Attribute.Text;
  };
}

export interface HomeAiMetric extends Struct.ComponentSchema {
  collectionName: 'components_home_ai_metrics';
  info: {
    description: 'Metric item for AI section';
    displayName: 'AI Metric';
    icon: 'hash';
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'text-primary'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeAiStatistic extends Struct.ComponentSchema {
  collectionName: 'components_home_ai_statistics';
  info: {
    description: 'Counter configuration for AI cards';
    displayName: 'AI Statistic';
    icon: 'hash';
  };
  attributes: {
    end: Schema.Attribute.Integer & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    start: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    suffix: Schema.Attribute.String;
  };
}

export interface HomeAiTextItem extends Struct.ComponentSchema {
  collectionName: 'components_home_ai_text_items';
  info: {
    description: 'Simple text bullet for AI section';
    displayName: 'AI Text Item';
    icon: 'list';
  };
  attributes: {
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeAiTimelineEntry extends Struct.ComponentSchema {
  collectionName: 'components_home_ai_timeline_entries';
  info: {
    description: 'Timeline entry for AI section';
    displayName: 'AI Timeline Entry';
    icon: 'time';
  };
  attributes: {
    event: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeDailyOfferCard extends Struct.ComponentSchema {
  collectionName: 'components_home_daily_offer_cards';
  info: {
    description: 'Hero carousel cards for hospitals, labs, diagnostics';
    displayName: 'Daily Offer Card';
  };
  attributes: {
    accent_color: Schema.Attribute.String;
    badge_label: Schema.Attribute.String;
    category_label: Schema.Attribute.String;
    contact_number: Schema.Attribute.String;
    location: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    offer_text: Schema.Attribute.Text;
    package_text: Schema.Attribute.Text;
    rating: Schema.Attribute.Decimal;
    services: Schema.Attribute.Text;
  };
}

export interface HomeFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_home_faq_items';
  info: {
    description: 'Question and answer for the homepage FAQ section';
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_home_feature_cards';
  info: {
    description: 'Card content for the features section';
    displayName: 'Feature Card';
    icon: 'bold';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeHeroStat extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_stats';
  info: {
    description: 'Statistic item displayed in the homepage hero section';
    displayName: 'Hero Stat';
    icon: 'chartBar';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface HomePricingPlan extends Struct.ComponentSchema {
  collectionName: 'components_home_pricing_plans';
  info: {
    description: 'Pricing plan with features and CTA';
    displayName: 'Pricing Plan';
    icon: 'coins';
  };
  attributes: {
    badge_label: Schema.Attribute.String;
    billing_period: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/month'>;
    button_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get Started'>;
    button_variant: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'home.pricing-plan-feature', true>;
    is_popular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price_display: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomePricingPlanFeature extends Struct.ComponentSchema {
  collectionName: 'components_home_pricing_plan_features';
  info: {
    description: 'Individual feature bullet for pricing plan';
    displayName: 'Pricing Plan Feature';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PartnershipsPartner extends Struct.ComponentSchema {
  collectionName: 'components_partnerships_partners';
  info: {
    description: 'Partner entry for the partnerships page';
    displayName: 'Partner';
    icon: 'handshake';
  };
  attributes: {
    location: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String;
    reason: Schema.Attribute.Text;
  };
}

export interface PatientsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_patients_testimonials';
  info: {
    description: 'Patient testimonial entry used on the patients page';
    displayName: 'Testimonial';
    icon: 'messageSquare';
  };
  attributes: {
    location: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.ai-card': HomeAiCard;
      'home.ai-metric': HomeAiMetric;
      'home.ai-statistic': HomeAiStatistic;
      'home.ai-text-item': HomeAiTextItem;
      'home.ai-timeline-entry': HomeAiTimelineEntry;
      'home.daily-offer-card': HomeDailyOfferCard;
      'home.faq-item': HomeFaqItem;
      'home.feature-card': HomeFeatureCard;
      'home.hero-stat': HomeHeroStat;
      'home.pricing-plan': HomePricingPlan;
      'home.pricing-plan-feature': HomePricingPlanFeature;
      'partnerships.partner': PartnershipsPartner;
      'patients.testimonial': PatientsTestimonial;
    }
  }
}
