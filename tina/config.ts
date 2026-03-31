import { defineConfig } from "tinacms";

export default defineConfig({
  branch:
    process.env.TINA_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "staging",

  // When connecting to Tina Cloud, set these in your environment:
  clientId: process.env.TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") return "/";
            return `/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "headline",
            label: "Page Headline (H1)",
          },
          {
            type: "string",
            name: "subheadline",
            label: "Subheadline",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Page Content",
            isBody: true,
          },
          {
            type: "object",
            name: "sections",
            label: "Content Sections",
            list: true,
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Section Heading",
              },
              {
                type: "rich-text",
                name: "content",
                label: "Section Content",
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "Call to Action",
            fields: [
              {
                type: "string",
                name: "text",
                label: "Button Text",
              },
              {
                type: "string",
                name: "url",
                label: "Button URL",
              },
            ],
          },
        ],
      },
    ],
  },
});
