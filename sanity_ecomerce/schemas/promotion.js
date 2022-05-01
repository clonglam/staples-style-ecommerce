export default {
  name: "promotion",
  title: "Promotion",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "promotiontext",
      title: "PromotionText",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
    },
  ],
};
