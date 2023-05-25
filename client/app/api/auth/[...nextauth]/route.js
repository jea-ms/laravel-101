import axios from "@libs/axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const API_URL = process.env.API_URL

const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied

                const res = await axios.post('/login', {
                    email: credentials?.email,
                    password: credentials?.password,

                })
                // const res = await fetch(API_URL + "/login", {
                //     method: "POST",
                //     headers: {
                //         'Content-Type': 'application/json',
                //         'X-Requested-With': 'XMLHttpRequest',
                //     },
                //     body: JSON.stringify({
                //         email: credentials?.email,
                //         password: credentials?.password,
                //     }),
                // });
                const user = res.data;

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user;
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null;

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user, account }) {
            console.log({ account });

            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            //   session.user = token as any;

            return session;
        },
    },

})

export { handler as GET, handler as POST }