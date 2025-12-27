import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";


const Instagram = () => {
  const links = [
    {
      label: "CWT Studio",
      href: "/",
      external: false,
    },
    {
      label: "Book Assessment",
      href: "/contact?service=assessment",
      external: false,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shanmag/",
      external: true,
    },
    {
      label: "Maguire Fine Art",
      href: "#",
      external: true,
      disabled: true,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Shannon Maguire</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm text-center">
          {/* Name */}
          <h1 className="font-mono text-xl font-semibold text-foreground mb-2">
            Shannon Maguire
          </h1>

          {/* Bio */}
          <p className="text-muted-foreground text-sm mb-8">
            Revenue systems architect. Sometimes photographer.
          </p>

          {/* Links */}
          <div className="space-y-3">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.disabled ? undefined : link.href}
                  target={link.disabled ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3 px-4 border border-border text-foreground font-mono text-sm transition-colors ${
                    link.disabled
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-foreground hover:text-background"
                  }`}
                >
                  {link.label}
                  {!link.disabled && <ExternalLink className="w-3.5 h-3.5" />}
                  {link.disabled && <span className="text-xs text-muted-foreground">(coming soon)</span>}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="flex items-center justify-center w-full py-3 px-4 border border-border text-foreground font-mono text-sm hover:bg-foreground hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Instagram;
