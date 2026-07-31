import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './Button.module.css'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  className,
  type = 'button',
  ...props
}) {
  const classes = clsx(styles.btn, styles[variant], styles[size], className)

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
