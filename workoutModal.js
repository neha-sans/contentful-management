module.exports = {
  name: "Workouts",
  fields: [
    {
      id: "name",
      name: "Name",
      type: "Symbol",
      required: true,
    },
    {
      id: "format",
      name: "Format",
      required: true,
      type: "Array",
      items: {
        type: "Symbol",
      },
    },
    {
      id: "goals",
      name: "Goals",
      type: "Array",
      items: {
        type: "Symbol",
      },
      required: true,
    },

    {
      id: "fitnessLevel",
      name: "FitnessLevel",
      type: "Symbol",
      required: true,
    },
    {
      id: "bodyAreas",
      name: "BodyAreas",
      required: true,
      type: "Array",
      items: {
        type: "Symbol",
        validations: [
          {
            in: ["Upper Body", "Full Body"],
          },
        ],
      },
    },
    {
      id: "thumbnail",
      name: "Thumbnail",
      type: "Link",
      linkType: "Asset",
      required: true,
    },
  ],
};
