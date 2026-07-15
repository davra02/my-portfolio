import type { NextConfig } from "next";

// The n-dim maze planner is a separate Vercel deployment surfaced under
// /maze_planner. The rewrite strips the prefix, so that app is built with
// Vite base "/maze_planner/" and its assets resolve back through this proxy.
// Override the origin per-environment with MAZE_PLANNER_ORIGIN.
const MAZE_PLANNER_ORIGIN =
  process.env.MAZE_PLANNER_ORIGIN ?? "https://mazeplanner.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/maze_planner",
        destination: MAZE_PLANNER_ORIGIN,
      },
      {
        source: "/maze_planner/:path*",
        destination: `${MAZE_PLANNER_ORIGIN}/:path*`,
      },
    ];
  },
};

export default nextConfig;
