import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fija la raíz del proyecto. Evita que Turbopack infiera mal el workspace
  // por un package-lock.json ajeno ubicado en un directorio superior
  // (C:\Users\egpfe\package-lock.json), lo que causaba el warning de build
  // y problemas de file-watching del servidor de desarrollo en Windows.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
