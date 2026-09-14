import { forwardRef } from "react";
import { Link } from "react-router-dom";

const VARIANTS = {
  primary:
    "bg-amber text-onAmber hover:bg-amber-light active:scale-[0.98] shadow-[0_0_0_0_rgba(223,160,80,0)] hover:shadow-[0_8px_24px_-8px_rgba(223,160,80,0.6)]",
  secondary:
    "bg-transparent text-cream border border-cream/40 hover:border-cream hover:bg-cream/5 active:scale-[0.98]",
  ghost: "bg-transparent text-cream/90 hover:text-amber underline-offset-4",
};

const SIZES = {
  md: "px-6 py-3.5 text-sm",
  sm: "px-5 py-2.5 text-sm",
};

/**
 * Polymorphic button: renders an internal <Link>, an external <a>, or a
 * <button>, chosen automatically from the props you pass.
 */
const Button = forwardRef(function Button(
  { as, to, href, variant = "primary", size = "md", className = "", children, icon: Icon, ...props },
  ref
) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 ease-smooth whitespace-nowrap";
  const cls = `${base} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (to) {
    return (
      <Link ref={ref} to={to} className={cls} {...props}>
        {children}
        {Icon ? <Icon className="w-4 h-4" strokeWidth={2.25} /> : null}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cls}
        {...props}
      >
        {children}
        {Icon ? <Icon className="w-4 h-4" strokeWidth={2.25} /> : null}
      </a>
    );
  }

  const Comp = as || "button";
  return (
    <Comp ref={ref} className={cls} {...props}>
      {children}
      {Icon ? <Icon className="w-4 h-4" strokeWidth={2.25} /> : null}
    </Comp>
  );
});

export default Button;
