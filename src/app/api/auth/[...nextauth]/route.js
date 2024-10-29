import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; // Example provider
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name:'Credentials',
      username: {label:'email',type:'text',placeholder:'email'},
      password: {label:'password',type:'text',placeholder:'password'},
      async authorize(credentials) {
        return{
          id: 'user1',
          name: 'asd',
          userId: 'asd',
          email: 'randomemail'

        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ user, token }) => {
    if (user) {
        token.uid = user.id;
    }
    return token;
    },
  session: ({ session, token, user }) => {
      if (session.user) {
          session.user.id = token.uid
      }
      return session
  } 
}
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


