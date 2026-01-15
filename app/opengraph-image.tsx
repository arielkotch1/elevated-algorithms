import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#040712",
          color: "#E6EDF7",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(101,163,255,0.18) 0, transparent 28%), radial-gradient(circle at 80% 40%, rgba(94,234,212,0.14) 0, transparent 26%), linear-gradient(135deg, rgba(10,16,28,0.85), rgba(7,10,19,0.95))",
          border: "1px solid rgba(255,255,255,0.05)",
          boxShadow: "0 40px 120px rgba(0,0,0,0.55)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
            fontFamily: "monospace",
            letterSpacing: 0.5,
            color: "#9EB6FF",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <svg
              width={42}
              height={42}
              viewBox="0 0 64 64"
              aria-hidden
              style={{
                filter: "drop-shadow(0 0 18px rgba(126,224,195,0.6))",
              }}
            >
              <rect x="4" y="4" width="56" height="56" rx="14" fill="#0A0F1E" />
              <path d="M22 16 44 32 22 48Z" fill="#7EE0C3" />
            </svg>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "#7C9BFF" }}>&gt;</span> elevated algorithms
            </span>
          </span>
          <span
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              background: "rgba(124,155,255,0.14)",
              color: "#C3D7FF",
              fontSize: 18,
            }}
          >
            From prototype to production
          </span>
        </div>

        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <div style={{ flex: 2 }}>
            <div
              style={{
                fontSize: 64,
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: -1.2,
              }}
            >
              Your AI site.
              <br />
              <span style={{ color: "#7EE0C3" }}>Actually working.</span>
            </div>
            <p
              style={{
                marginTop: 18,
                fontSize: 26,
                lineHeight: 1.4,
                color: "rgba(230,237,247,0.78)",
                maxWidth: 680,
              }}
            >
              I turn AI-generated designs into production-ready products with real
              backends, auth, payments, and deployments.
            </p>
          </div>

          <div
            style={{
              flex: 1.1,
              padding: 20,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(12,18,31,0.9)",
            }}
          >
            <div
              style={{
                fontSize: 18,
                marginBottom: 12,
                color: "#9EB6FF",
                letterSpacing: 0.4,
              }}
            >
              What ships
            </div>
            <ul
              style={{
                display: "grid",
                gap: 10,
                fontSize: 20,
                paddingLeft: 20,
                color: "rgba(230,237,247,0.9)",
              }}
            >
              <li>Real backends & APIs</li>
              <li>Auth, payments, & data</li>
              <li>Production deployment</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "rgba(230,237,247,0.75)",
          }}
        >
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#7EE0C3",
                boxShadow: "0 0 10px rgba(126,224,195,0.7)",
              }}
            />
            Production-grade, no placeholder buttons.
          </div>
          <div style={{ fontFamily: "monospace", color: "#C3D7FF" }}>
            Next.js · TypeScript · Web3 · SaaS
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
