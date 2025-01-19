import NextAuth, { AuthOptions } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

const authOptions: AuthOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID || "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET || "",
      version: "2.0", // API de Twitter v2
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token as string; // Asegura que `access_token` sea tratado como `string`
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string; // Asegura que `token.accessToken` sea tratado como `string`
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin", // Página personalizada de inicio de sesión
  },
  secret: process.env.NEXTAUTH_SECRET || "", // Asegúrate de definir esta variable
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
