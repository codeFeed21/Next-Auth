import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter Email",
        },
        password: {
          label: "Password",
          type: "pssword",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials: any) {
        console.log(credentials);
        return { id: "user1", name: "Rengoku Kyojoro", password: "Mom" };
      },
    }),
  ],
});

export const GET = handler;
export const POST = handler;
