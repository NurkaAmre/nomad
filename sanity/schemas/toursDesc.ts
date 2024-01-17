interface CustomRule {
  required(): any;
  min(length: number): any;
  max(length: number): any;
  positive(): any;
  // Add other validation methods if necessary
}

export default {
  name: 'tourDetails',
  title: 'Tour Details',
  type: 'document',
  fields: [
    {
      name: 'tour',
      title: 'Tour',
      type: 'reference',
      to: [{ type: 'tour' }],
      description: 'Reference to the main tour',
      validation: (Rule: CustomRule) => Rule.required(),
    },
    {
      name: 'detailedDescription',
      title: 'Detailed Description',
      type: 'text',
      description: 'Detailed description of the tour',
      validation: (Rule: CustomRule) => Rule.required().min(50),
    },
    {
      name: 'itinerary',
      title: 'Itinerary',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tour itinerary details',
      validation: (Rule: CustomRule) => Rule.required(),
    },
    {
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Tour highlights',
      validation: (Rule: CustomRule) => Rule.required(),
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'reviewerName',
              title: 'Reviewer Name',
              type: 'string',
              description: 'Name of the reviewer',
              validation: (Rule: CustomRule) => Rule.required(),
            },
            {
              name: 'review',
              title: 'Review',
              type: 'text',
              description: 'Review content',
              validation: (Rule: CustomRule) => Rule.required().min(20),
            },
          ],
        },
      ],
      description: 'Customer reviews for the tour',
      validation: (Rule: CustomRule) => Rule.required(),
    },
    {
      name: 'pricingOptions',
      title: 'Pricing Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'optionTitle',
              title: 'Option Title',
              type: 'string',
              description: 'Title of the pricing option',
              validation: (Rule: CustomRule) => Rule.required(),
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
              description: 'Price of the option',
              validation: (Rule: CustomRule) => Rule.required().positive(),
            },
          ],
        },
      ],
      description: 'Different pricing options for the tour',
      validation: (Rule: CustomRule) => Rule.required(),
    },
    // Add other relevant fields if needed
  ],
};
