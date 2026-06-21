import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Usa os certificados TLS do sistema ao ir buscar fontes do Google em
    // ambientes/CI com cadeias de certificados personalizadas.
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
