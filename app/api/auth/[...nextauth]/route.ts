import NextAuth, { NextAuthOptions } from "next-auth";
import { SanityCredentials, SanityAdapter } from "next-auth-sanity";
import { client } from "@/sanity/lib/client";
import { SanityClient } from "@sanity/client";

const authOptions: NextAuthOptions = {
  providers: [
    SanityCredentials(client as SanityClient),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: SanityAdapter(client as SanityClient),
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: async ({ session, token }) => {
      const userEmail = token.email;
      const userIdObj = await client.fetch<{ _id: string }>(
        `*[_type == "user" && email == $email][0] {
            _id
        }`,
        { email: userEmail }
      );
      return {
        ...session,
        user: {
          ...session.user,
          id: userIdObj._id,
        },
      };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };