// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.TINA_BRANCH || process.env.HEAD || "main",
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ─── Projects ───────────────────────────────────────────
      {
        name: "projects",
        label: "Projects",
        path: "content",
        match: { include: "projects" },
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          {
            name: "projects",
            label: "Projects",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item.title })
            },
            fields: [
              {
                name: "title",
                label: "Titel",
                type: "string",
                required: true
              },
              {
                name: "meta",
                label: "Meta (\xE5r / kanal / produktionsbolag)",
                type: "string",
                required: true
              },
              {
                name: "description",
                label: "Beskrivning",
                type: "string",
                ui: { component: "textarea" },
                required: true
              },
              {
                name: "image",
                label: "Thumbnail",
                type: "image",
                required: true
              },
              {
                name: "blurThumbnail",
                label: "Blurra thumbnail",
                type: "boolean"
              },
              {
                name: "videoMp4",
                label: "Video MP4 (filnamn i /public/videos/)",
                type: "string",
                description: "T.ex. myvideo.mp4"
              },
              {
                name: "videoWebm",
                label: "Video WebM (filnamn i /public/videos/)",
                type: "string"
              },
              {
                name: "videoPoster",
                label: "Video poster (filnamn i /public/images/)",
                type: "string"
              }
            ]
          }
        ]
      },
      // ─── Page ────────────────────────────────────────────────
      {
        name: "page",
        label: "Sidinneh\xE5ll",
        path: "content",
        match: { include: "page" },
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          global: true
        },
        fields: [
          {
            name: "heroTitle",
            label: "Hero \u2014 rubrik",
            type: "string",
            ui: { component: "textarea" }
          },
          {
            name: "heroBody",
            label: "Hero \u2014 br\xF6dtext (HTML till\xE5ten)",
            type: "string",
            ui: { component: "textarea" }
          },
          {
            name: "aboutTitle",
            label: "Om oss \u2014 rubrik",
            type: "string"
          },
          {
            name: "aboutBody",
            label: "Om oss \u2014 br\xF6dtext",
            type: "string",
            ui: { component: "textarea" }
          },
          {
            name: "instagramHandle",
            label: "Instagram (t.ex. @digitalrekvisita)",
            type: "string"
          },
          {
            name: "teamMembers",
            label: "Team",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item.name })
            },
            fields: [
              { name: "name", label: "Namn", type: "string" },
              { name: "email", label: "E-post", type: "string" },
              { name: "phone", label: "Telefon (visas)", type: "string" },
              { name: "phoneHref", label: "Telefon (href, t.ex. +46701234567)", type: "string" },
              { name: "image", label: "Foto (filnamn i /public/images/)", type: "string" }
            ]
          }
        ]
      },
      // ─── Logos ──────────────────────────────────────────────
      {
        name: "logos",
        label: "Logotyper",
        path: "content",
        match: { include: "logos" },
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          {
            name: "logos",
            label: "Logotyper",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item.name })
            },
            fields: [
              { name: "name", label: "Namn", type: "string", required: true },
              { name: "image", label: "Logotyp", type: "image" },
              { name: "height", label: "H\xF6jd (px)", type: "number" }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
