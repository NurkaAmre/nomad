import { defineField } from 'sanity'

const booking = defineField({
  name: 'booking',
  title: 'Booking',
  type: 'document',
  fields: [
    defineField({
     name: 'isConfirmed',
      title: 'Is Confirmed',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
      initialValue: false,
    }),
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100).error('Min 3 to Max 100 characters'),
    }),

    defineField({
      name: 'nationality',
      title: 'Nationality',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100).error('Min 3 to Max 100 characters'),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).error('Min 3 characters').max(100).error('Max 100 characters'),
    }),
    defineField({
      name: 'yourHight',
      title: 'Your Hight',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100).error('Min 3 to Max 100 characters'),
    }),

    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).error('Min 3 characters').max(100).error('Max 100 characters'),
    }),

    defineField({
      name: 'emergencyContact',
      title: 'Emergency Contact',
      type: 'string',
      validation: (rule) => rule.required().min(3).error('Min 3 characters').max(100).error('Max 100 characters'),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).error('Min 3 characters').max(100).error('Max 100 characters'),
    }),
    defineField({
      name: 'tour',
      title: 'Tour',
      type: 'reference',
      to: [{ type: 'tour' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tripDuration',
      title: 'Trip Duration',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "numberOfPeople",
      title: "Number Of People",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "medicalCondition",
      title: "Medical Condition",
      type: "text",
      validation: (Rule) => Rule.max(500).error('Max 500 characters'),
    }),
    defineField({
      name: "additionalInformation",
      title: "Additional Information",
      type: "text",
      validation: (Rule) => Rule.max(500).error('Max 500 characters'),
    })
  ],
})

export default booking;