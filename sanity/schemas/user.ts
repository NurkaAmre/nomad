import { defineField } from "sanity"

const user = defineField({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: Rule => Rule.required().min(3).error("Min 3 characters").max(100).error("Max 100 characters")
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: Rule => Rule.required().email().error("Please enter a valid email address"),
    }),
    defineField({
      name: "password",
      title: "Password",
      type: "string",
    }),
    defineField({
      name: 'isAdmin',
      title: 'Is Admin',
      type: 'boolean',
      description: 'Check if the user is admin',
      initialValue: false,
      validation: Rule => Rule.required(),
        readOnly: true,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'url',
    }),
    defineField({
      name: 'emailVerified',
      type: 'datetime',
      hidden: true,
    }),

  ]
})

export default user;

// export const userSchema = {
//   name: "user",
//   title: "User",
//   type: "document",
//   fields: [
//     {
//       name: "name",
//       title: "Name",
//       type: "string"
//     },
//     {
//       name: "email",
//       title: "Email",
//       type: "string"
//     },
//     {
//       name: "password",
//       title: "Password",
//       type: "string"
//     }
//   ]
// }
