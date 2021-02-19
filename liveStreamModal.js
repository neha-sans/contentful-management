module.exports = {
  name: "Livestream",
  fields: [
    {
      id: "videoTitle",
      name: "Video Name",
      required: true,
      type: "Symbol",
      validations: [
        {
          regexp: {
            pattern: "[a-z0-9]{3,}",
            flags: null,
          },
        },
      ],
    },
    {
      id: "date",
      name: "Date",
      type: "Date",
      required: true,
    },
    {
      id: "videoURL",
      name: "Video URL",
      type: "Symbol",
      required: true,
      validations: [
        //   {
        //     regexp: {
        //       pattern: `https:\/\/www\.youtube\.com\/watch\?v=.*`,
        //       flags: null,
        //     },
        //   },
      ],
    },
    {
      id: "contentType",
      name: "Content Type",
      required: true,
      type: "Array",
      items: {
        type: "Symbol",
        validations: [
          {
            in: ["STANDARD", "PREMIUM"],
          },
        ],
      },
    },
  ],
};
