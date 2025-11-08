import type { Core } from "@strapi/strapi";

type HomeSingleTypeUID =
  | "api::home-hero.home-hero"
  | "api::home-faq.home-faq"
  | "api::home-features.home-features"
  | "api::home-pricing.home-pricing"
  | "api::home-cta.home-cta"
  | "api::home-ai.home-ai";

const SINGLE_TYPES: HomeSingleTypeUID[] = [
  "api::home-hero.home-hero",
  "api::home-faq.home-faq",
  "api::home-features.home-features",
  "api::home-pricing.home-pricing",
  "api::home-cta.home-cta",
  "api::home-ai.home-ai",
];

const PUBLIC_COLLECTION_TYPES = ["api::doctor-profile.doctor-profile"];

async function ensureSingleTypeEntries(strapi: Core.Strapi) {
  const now = new Date().toISOString();

  for (const uid of SINGLE_TYPES) {
    const existing = await strapi.entityService.findMany(uid, {
      limit: 1,
      publicationState: "preview",
    });
    const entry = Array.isArray(existing) ? existing[0] : existing;

    if (!entry) {
      await strapi.entityService.create(uid, {
        data: {
          publishedAt: now,
        },
      });
      continue;
    }

    if (!entry.publishedAt) {
      await strapi.entityService.update(uid, entry.id, {
        data: {
          publishedAt: now,
        },
      });
    }
  }
}

async function ensurePublicPermissions(strapi: Core.Strapi) {
  const publicRole = await strapi.db
    .query("plugin::users-permissions.role")
    .findOne({ where: { type: "public" } });

  if (!publicRole) {
    return;
  }

  const permissionQuery = strapi.db.query("plugin::users-permissions.permission");
  const contentTypes = [...SINGLE_TYPES, ...PUBLIC_COLLECTION_TYPES];

  for (const uid of contentTypes) {
    const action = `${uid}.find`;

    const existingPermission = await permissionQuery.findOne({
      where: {
        action,
        role: publicRole.id,
      },
    });

    if (existingPermission) {
      if (!existingPermission.enabled) {
        await permissionQuery.update({
          where: { id: existingPermission.id },
          data: { enabled: true },
        });
      }
      continue;
    }

    await permissionQuery.create({
      data: {
        action,
        role: publicRole.id,
        enabled: true,
        conditions: [],
      },
    });
  }
}

export default {
  register() {},
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await ensureSingleTypeEntries(strapi);
    await ensurePublicPermissions(strapi);
  },
};
