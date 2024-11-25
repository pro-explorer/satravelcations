import React from "react";
import { twMerge } from "tailwind-merge";

interface HeadlineProps {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  tagline?: string | React.ReactNode;
  classes?: {
    container?: string;
    title?: string;
    subtitle?: string;
  };
}

const Headline: React.FC<HeadlineProps> = ({
  title = '',
  subtitle = null,
  tagline = null,
  classes = {},
}) => {
  const {
    container: containerClass = "max-w-3xl",
    title: titleClass = "text-3xl md:text-4xl",
    subtitle: subtitleClass = "text-xl",
  } = classes;

  return (
    (title || subtitle || tagline) && (
      <div
        className={twMerge(
          "mb-8 md:mx-auto md:mb-12 text-center",
          containerClass
        )}
      >
        {tagline && (
          <p
            className={twMerge(
              "text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase"
            )}
            dangerouslySetInnerHTML={{
              __html: typeof tagline === "string" ? tagline : "",
            }}
          >
            {typeof tagline !== "string" && tagline}
          </p>
        )}
        {title && (
          <h2
            className={twMerge(
              "font-bold leading-tighter tracking-tighter font-heading text-heading text-3xl",
              titleClass
            )}
            dangerouslySetInnerHTML={{
              __html: typeof title === "string" ? title : "",
            }}
          >
            {typeof title !== "string" && title}
          </h2>
        )}
        {subtitle && (
          <p
            className={twMerge("mt-4 text-muted", subtitleClass)}
            dangerouslySetInnerHTML={{
              __html: typeof subtitle === "string" ? subtitle : "",
            }}
          >
            {typeof subtitle !== "string" && subtitle}
          </p>
        )}
      </div>
    )
  );
};

export default Headline;
