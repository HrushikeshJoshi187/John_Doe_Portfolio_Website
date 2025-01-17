import React from "react";

interface ButtonProps {
  href?: string;
  target?: string;
  label: string;
  icon?: React.ReactNode;
  classes?: string;
  variant: "primary" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
  variant,
}) => {
  const baseClass = `btn btn-${variant} ${classes}`.trim();

  if (href) {
    return (
      <a href={href} target={target} className={baseClass}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <button className={baseClass}>
      {label}
      {icon && (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};

export const ButtonPrimary: React.FC<Omit<ButtonProps, "variant">> = (
  props
) => <Button {...props} variant="primary" />;

export const ButtonOutline: React.FC<Omit<ButtonProps, "variant">> = (
  props
) => <Button {...props} variant="outline" />;
