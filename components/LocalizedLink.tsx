import React from "react";
import { Link, useParams } from "react-router-dom";

/**
 * Interface for localizing links for site translation.
 * Currently not in use, but keeping this file around in case
 * I ever translate this site to Spanish!
 */
interface LocalizedLinkProps {
    to: string;
    children: React.ReactNode;
    [key: string]: any; // allow other props like className, style, etc.
}

// TODO: make this a global variable for use across the site
const supportedLocales = ['es'];

export const LocalizedLink: React.FC<LocalizedLinkProps> = ({ to, children, ...rest }) => {
  const { locale } = useParams<{ locale?: string }>();

  // Only add prefix if we're in a supported locale like "es"
  const prefix = supportedLocales.includes(locale || "") ? `/${locale}` : "";

  const localizedTo = `${prefix}${to.startsWith("/") ? to : `/${to}`}`;

  return (
    <Link to={localizedTo} {...rest}>
      {children}
    </Link>
  );
};