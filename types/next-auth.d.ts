import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string; // Propiedad personalizada
  }

  interface JWT {
    accessToken?: string; // Propiedad personalizada en el token
  }
}
