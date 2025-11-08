import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiContactRequestContactRequest
  extends Struct.CollectionTypeSchema {
  collectionName: 'contact_requests';
  info: {
    description: 'Submissions from the AI health assistant landing form';
    displayName: 'AI Contact Request';
    pluralName: 'contact-requests';
    singularName: 'contact-request';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      list: {
        layout: [
          {
            key: 'first_name';
            metadatas: {
              label: 'First name';
              searchable: true;
              sortable: true;
            };
            name: 'first_name';
          },
          {
            key: 'last_name';
            metadatas: {
              label: 'Last name';
              searchable: true;
              sortable: true;
            };
            name: 'last_name';
          },
          {
            key: 'phone_number';
            metadatas: {
              label: 'Phone';
              searchable: true;
              sortable: true;
            };
            name: 'phone_number';
          },
          {
            key: 'email';
            metadatas: {
              label: 'Email';
              searchable: true;
              sortable: true;
            };
            name: 'email';
          },
          {
            key: 'location';
            metadatas: {
              label: 'Location';
              searchable: true;
              sortable: true;
            };
            name: 'location';
          },
          {
            key: 'preferred_language';
            metadatas: {
              label: 'Preferred language';
              searchable: true;
              sortable: true;
            };
            name: 'preferred_language';
          },
          {
            key: 'preferred_call_time';
            metadatas: {
              label: 'Preferred call time';
              searchable: true;
              sortable: true;
            };
            name: 'preferred_call_time';
          },
          {
            key: 'message';
            metadatas: {
              label: 'Message';
              searchable: true;
              sortable: false;
            };
            name: 'message';
          },
          {
            key: 'source';
            metadatas: {
              label: 'Source';
              searchable: true;
              sortable: true;
            };
            name: 'source';
          },
          {
            key: 'timestamp';
            metadatas: {
              label: 'Timestamp';
              searchable: false;
              sortable: true;
            };
            name: 'timestamp';
          },
        ];
      };
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email;
    first_name: Schema.Attribute.String & Schema.Attribute.Required;
    last_name: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-request.contact-request'
    > &
      Schema.Attribute.Private;
    location: Schema.Attribute.String;
    message: Schema.Attribute.Text;
    phone_number: Schema.Attribute.String & Schema.Attribute.Required;
    preferred_call_time: Schema.Attribute.String;
    preferred_language: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    source: Schema.Attribute.String;
    timestamp: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDoctorProfileDoctorProfile
  extends Struct.CollectionTypeSchema {
  collectionName: 'doctor_profiles';
  info: {
    description: 'Directory entry for recommended doctors';
    displayName: 'Doctor Profile';
    pluralName: 'doctor-profiles';
    singularName: 'doctor-profile';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    awards: Schema.Attribute.Text;
    book_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    degrees: Schema.Attribute.Text;
    license_number: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::doctor-profile.doctor-profile'
    > &
      Schema.Attribute.Private;
    location: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    patients_treated: Schema.Attribute.Integer;
    phone_number: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    rating: Schema.Attribute.Decimal;
    specialization: Schema.Attribute.String;
    super_specialization: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    years_experience: Schema.Attribute.Integer;
  };
}

export interface ApiHomeAiHomeAi extends Struct.SingleTypeSchema {
  collectionName: 'home_ai_sections';
  info: {
    description: 'AI-powered healthcare section for the homepage';
    displayName: 'Home AI';
    pluralName: 'home-ais';
    singularName: 'home-ai';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ai_badge_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'AI-Powered Healthcare for Kashmir'>;
    ai_cards: Schema.Attribute.Component<'home.ai-card', true>;
    ai_description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Experience the future of healthcare with our advanced AI voice assistant designed specifically for Kashmir. Get instant medical guidance, symptom analysis, and personalized health recommendations through natural conversation in Urdu or English - available 24/7 across all districts of the valley.'>;
    ai_heading_primary: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Intelligent Health'>;
    ai_heading_secondary: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Voice Assistant'>;
    ai_voice_description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Speak naturally about your health concerns. Our AI understands symptoms, provides guidance, and connects you with the right healthcare professionals.'>;
    ai_voice_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Health Voice Assistant'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-ai.home-ai'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeCtaHomeCta extends Struct.SingleTypeSchema {
  collectionName: 'home_cta_sections';
  info: {
    description: 'Call-to-action section for the homepage';
    displayName: 'Home CTA';
    pluralName: 'home-ctas';
    singularName: 'home-cta';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    cta_description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Join over 5,000 Kashmir residents who trust our AI-powered platform for smarter, faster, and more accessible healthcare solutions. Experience healthcare in your language, available 24/7 across all districts.'>;
    cta_heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ready to Transform Healthcare in Kashmir?'>;
    cta_primary_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Call AI Health Assistant'>;
    cta_secondary_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Download App'>;
    cta_secondary_message: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Download the jkhealthcare.org App to access on-the-go health monitoring, offline health records, emergency features with local contacts, Kashmir-specific health tips, and multi-language support. Coming soon to the Play Store and App Store!'>;
    cta_secondary_tooltip: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Coming soon'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-cta.home-cta'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeFaqHomeFaq extends Struct.SingleTypeSchema {
  collectionName: 'home_faq_sections';
  info: {
    description: 'Frequently asked questions section for the homepage';
    displayName: 'Home FAQ';
    pluralName: 'home-faqs';
    singularName: 'home-faq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faq_badge: Schema.Attribute.String & Schema.Attribute.DefaultTo<'FAQ'>;
    faq_description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Get answers to common questions about our AI-powered healthcare platform and services.'>;
    faq_heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Frequently Asked Questions'>;
    faq_items: Schema.Attribute.Component<'home.faq-item', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-faq.home-faq'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeFeaturesHomeFeatures extends Struct.SingleTypeSchema {
  collectionName: 'home_feature_sections';
  info: {
    description: 'Feature highlights section for the homepage';
    displayName: 'Home Features';
    pluralName: 'home-feature-sections';
    singularName: 'home-features';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    features_badge: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'AI-Powered Healthcare'>;
    features_cards: Schema.Attribute.Component<'home.feature-card', true>;
    features_description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Experience the future of healthcare with our AI-powered voice assistant. Get instant medical guidance, connect with top specialists, and access world-class healthcare services across all districts of Kashmir - available 24/7 in your preferred language.'>;
    features_footer_description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'jkhealthcare.org revolutionizes healthcare access in Kashmir with AI-powered voice technology. Every feature is designed to overcome geographical barriers, language challenges, and accessibility issues unique to the Kashmir Valley, ensuring quality healthcare reaches every resident, everywhere.'>;
    features_footer_heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Built for Kashmir. Powered by AI.'>;
    features_heading_primary: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Revolutionary Healthcare'>;
    features_heading_secondary: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'for Kashmir Valley'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-features.home-features'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeHeroHomeHero extends Struct.SingleTypeSchema {
  collectionName: 'home_heroes';
  info: {
    description: 'Hero section content for the homepage';
    displayName: 'Home Hero';
    pluralName: 'home-heroes';
    singularName: 'home-hero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    daily_offer_cards: Schema.Attribute.Component<
      'home.daily-offer-card',
      true
    >;
    hero_badge_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'AI-Powered Healthcare Center'>;
    hero_heading_highlight: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Healthcare in Kashmir'>;
    hero_heading_lead: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Revolutionizing'>;
    hero_heading_tail: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'with AI Technology'>;
    hero_offer_discount: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'15% off diagnostics today'>;
    hero_offer_highlight_one_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Availability'>;
    hero_offer_highlight_one_value: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'24/7 emergency desk'>;
    hero_offer_highlight_two_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Includes'>;
    hero_offer_highlight_two_value: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Doctor consult + lab reports'>;
    hero_offer_hospital: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Valley Care Hospital'>;
    hero_offer_phone: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'+91 70000 00000'>;
    hero_offer_price: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'INR 2,499 health check bundle'>;
    hero_primary_cta_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Call AI Health Assistant'>;
    hero_secondary_cta_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Try Voice Consultation'>;
    hero_stats: Schema.Attribute.Component<'home.hero-stat', true>;
    hero_subtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Experience the future of healthcare with our AI-powered voice assistant. Talk directly to our intelligent voice assistant on the website, get instant medical guidance, symptom analysis, and connect with top specialists across Kashmir - available 24/7 in Urdu and English.'>;
    hero_testimonial_avatars: Schema.Attribute.Media<'images', true>;
    hero_testimonial_highlight: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'5,000+ Kashmir residents'>;
    hero_testimonial_rating: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'4.9/5'>;
    hero_testimonial_subtitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Trusted by'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-hero.home-hero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomePricingHomePricing extends Struct.SingleTypeSchema {
  collectionName: 'home_pricing_sections';
  info: {
    description: 'Pricing plans section for the homepage';
    displayName: 'Home Pricing';
    pluralName: 'home-pricing-sections';
    singularName: 'home-pricing';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::home-pricing.home-pricing'
    > &
      Schema.Attribute.Private;
    pricing_badge_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Simple Pricing'>;
    pricing_description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Access AI-powered healthcare services designed for Kashmir. Get instant health guidance, connect with specialists, and book appointments - all through our intelligent voice assistant.'>;
    pricing_heading_primary: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Choose your'>;
    pricing_heading_secondary: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'AI healthcare plan'>;
    pricing_plans: Schema.Attribute.Component<'home.pricing-plan', true>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPartnerRequestPartnerRequest
  extends Struct.CollectionTypeSchema {
  collectionName: 'partner_requests';
  info: {
    description: 'Submissions from the partnerships form';
    displayName: 'Partner Request';
    pluralName: 'partner-requests';
    singularName: 'partner-request';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      list: {
        layout: [
          {
            key: 'organization_name';
            metadatas: {
              label: 'Organization';
              searchable: true;
              sortable: true;
            };
            name: 'organization_name';
          },
          {
            key: 'contact_name';
            metadatas: {
              label: 'Contact';
              searchable: true;
              sortable: true;
            };
            name: 'contact_name';
          },
          {
            key: 'email';
            metadatas: {
              label: 'Email';
              searchable: true;
              sortable: true;
            };
            name: 'email';
          },
          {
            key: 'phone_number';
            metadatas: {
              label: 'Phone';
              searchable: true;
              sortable: true;
            };
            name: 'phone_number';
          },
          {
            key: 'location';
            metadatas: {
              label: 'Location';
              searchable: true;
              sortable: true;
            };
            name: 'location';
          },
          {
            key: 'organization_type';
            metadatas: {
              label: 'Organization type';
              searchable: true;
              sortable: true;
            };
            name: 'organization_type';
          },
          {
            key: 'services_provided';
            metadatas: {
              label: 'Services provided';
              searchable: true;
              sortable: false;
            };
            name: 'services_provided';
          },
          {
            key: 'monthly_patient_volume';
            metadatas: {
              label: 'Monthly patient volume';
              searchable: true;
              sortable: true;
            };
            name: 'monthly_patient_volume';
          },
          {
            key: 'website';
            metadatas: {
              label: 'Website';
              searchable: true;
              sortable: true;
            };
            name: 'website';
          },
          {
            key: 'preferred_contact_time';
            metadatas: {
              label: 'Preferred contact time';
              searchable: true;
              sortable: true;
            };
            name: 'preferred_contact_time';
          },
          {
            key: 'message';
            metadatas: {
              label: 'Message';
              searchable: true;
              sortable: false;
            };
            name: 'message';
          },
          {
            key: 'source';
            metadatas: {
              label: 'Source';
              searchable: true;
              sortable: true;
            };
            name: 'source';
          },
          {
            key: 'timestamp';
            metadatas: {
              label: 'Timestamp';
              searchable: false;
              sortable: true;
            };
            name: 'timestamp';
          },
        ];
      };
    };
  };
  attributes: {
    contact_name: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::partner-request.partner-request'
    > &
      Schema.Attribute.Private;
    location: Schema.Attribute.String;
    message: Schema.Attribute.Text;
    monthly_patient_volume: Schema.Attribute.String;
    organization_name: Schema.Attribute.String & Schema.Attribute.Required;
    organization_type: Schema.Attribute.String;
    phone_number: Schema.Attribute.String & Schema.Attribute.Required;
    preferred_contact_time: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    services_provided: Schema.Attribute.Text;
    source: Schema.Attribute.String;
    timestamp: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    website: Schema.Attribute.String;
  };
}

export interface ApiPartnershipsPagePartnershipsPage
  extends Struct.SingleTypeSchema {
  collectionName: 'partnerships_pages';
  info: {
    description: 'Content for the partnerships landing page';
    displayName: 'Partnerships Page';
    pluralName: 'partnerships-pages';
    singularName: 'partnerships-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero_primary_cta_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Request a call back'>;
    hero_secondary_cta_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get help as a patient'>;
    hero_stat_count: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<24>;
    hero_stat_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'active partnerships'>;
    hero_subtitle: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Trusted by healthcare providers across Kashmir Valley.'>;
    hero_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Our Partnerships'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::partnerships-page.partnerships-page'
    > &
      Schema.Attribute.Private;
    partners: Schema.Attribute.Component<'partnerships.partner', true>;
    partners_heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Our partner network'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPatientPagePatientPage extends Struct.SingleTypeSchema {
  collectionName: 'patient_pages';
  info: {
    description: 'Content for the patient landing page';
    displayName: 'Patient Page';
    pluralName: 'patient-pages';
    singularName: 'patient-page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    hero_primary_cta_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Request a call back'>;
    hero_secondary_cta_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Become a partner'>;
    hero_subtitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Available in Kashmir only'>;
    hero_title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<"India's First In-Hospital Concierge For You. And Your Family.">;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::patient-page.patient-page'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    stats_caption: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'and counting \u2014 thanks to our growing network of partners and clinicians.'>;
    stats_heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Total Patients Helped'>;
    stats_value: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<12876>;
    testimonials: Schema.Attribute.Component<'patients.testimonial', true>;
    testimonials_heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'What patients are saying'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPatientRequestPatientRequest
  extends Struct.CollectionTypeSchema {
  collectionName: 'patient_requests';
  info: {
    description: 'Submissions from the patient assistance form';
    displayName: 'Patient Request';
    pluralName: 'patient-requests';
    singularName: 'patient-request';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      list: {
        layout: [
          {
            key: 'first_name';
            metadatas: {
              label: 'First name';
              searchable: true;
              sortable: true;
            };
            name: 'first_name';
          },
          {
            key: 'last_name';
            metadatas: {
              label: 'Last name';
              searchable: true;
              sortable: true;
            };
            name: 'last_name';
          },
          {
            key: 'phone_number';
            metadatas: {
              label: 'Phone';
              searchable: true;
              sortable: true;
            };
            name: 'phone_number';
          },
          {
            key: 'email';
            metadatas: {
              label: 'Email';
              searchable: true;
              sortable: true;
            };
            name: 'email';
          },
          {
            key: 'location';
            metadatas: {
              label: 'Location';
              searchable: true;
              sortable: true;
            };
            name: 'location';
          },
          {
            key: 'preferred_language';
            metadatas: {
              label: 'Preferred language';
              searchable: true;
              sortable: true;
            };
            name: 'preferred_language';
          },
          {
            key: 'preferred_contact_method';
            metadatas: {
              label: 'Preferred contact method';
              searchable: true;
              sortable: true;
            };
            name: 'preferred_contact_method';
          },
          {
            key: 'preferred_contact_time';
            metadatas: {
              label: 'Preferred contact time';
              searchable: true;
              sortable: true;
            };
            name: 'preferred_contact_time';
          },
          {
            key: 'reason_for_visit';
            metadatas: {
              label: 'Reason for visit';
              searchable: true;
              sortable: false;
            };
            name: 'reason_for_visit';
          },
          {
            key: 'insurance_provider';
            metadatas: {
              label: 'Insurance provider';
              searchable: true;
              sortable: true;
            };
            name: 'insurance_provider';
          },
          {
            key: 'additional_notes';
            metadatas: {
              label: 'Additional notes';
              searchable: true;
              sortable: false;
            };
            name: 'additional_notes';
          },
          {
            key: 'consent';
            metadatas: {
              label: 'Consent';
              searchable: false;
              sortable: true;
            };
            name: 'consent';
          },
          {
            key: 'source';
            metadatas: {
              label: 'Source';
              searchable: true;
              sortable: true;
            };
            name: 'source';
          },
          {
            key: 'timestamp';
            metadatas: {
              label: 'Timestamp';
              searchable: false;
              sortable: true;
            };
            name: 'timestamp';
          },
        ];
      };
    };
  };
  attributes: {
    additional_notes: Schema.Attribute.Text;
    consent: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email;
    first_name: Schema.Attribute.String & Schema.Attribute.Required;
    insurance_provider: Schema.Attribute.String;
    last_name: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::patient-request.patient-request'
    > &
      Schema.Attribute.Private;
    location: Schema.Attribute.String;
    phone_number: Schema.Attribute.String & Schema.Attribute.Required;
    preferred_contact_method: Schema.Attribute.String;
    preferred_contact_time: Schema.Attribute.String;
    preferred_language: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    reason_for_visit: Schema.Attribute.Text;
    source: Schema.Attribute.String;
    timestamp: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::contact-request.contact-request': ApiContactRequestContactRequest;
      'api::doctor-profile.doctor-profile': ApiDoctorProfileDoctorProfile;
      'api::home-ai.home-ai': ApiHomeAiHomeAi;
      'api::home-cta.home-cta': ApiHomeCtaHomeCta;
      'api::home-faq.home-faq': ApiHomeFaqHomeFaq;
      'api::home-features.home-features': ApiHomeFeaturesHomeFeatures;
      'api::home-hero.home-hero': ApiHomeHeroHomeHero;
      'api::home-pricing.home-pricing': ApiHomePricingHomePricing;
      'api::partner-request.partner-request': ApiPartnerRequestPartnerRequest;
      'api::partnerships-page.partnerships-page': ApiPartnershipsPagePartnershipsPage;
      'api::patient-page.patient-page': ApiPatientPagePatientPage;
      'api::patient-request.patient-request': ApiPatientRequestPatientRequest;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
