module.exports = {
  name: "Circuits",
  fields: [
    {
      id: "id",
      name: "Id",
      required: true,
      type: "Symbol",
      validations: [
        {
          unique: true,
        },
        {
          regexp: {
            pattern: "[a-z]{1}[0-9]{9}",
            flags: null,
          },
        },
      ],
    },
    {
      id: "repetitions",
      name: "Repetitions",
      type: "Number",
      required: true,
    },
    {
      id: "restDuration",
      name: "Rest duration",
      type: "Number",
      required: true,
    },
    {
      id: "exercises",
      name: "Exercises",
      required: true,
      type: "Array",
      items: {
        type: "Link",
        linkType: "Entry",
        validations: [
          {
            linkContentType: ["exercise"],
          },
        ],
      },
    },
  ],
};
