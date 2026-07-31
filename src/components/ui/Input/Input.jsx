import { useId } from 'react'
import clsx from 'clsx'
import styles from './Input.module.css'

export function Input({
  label,
  error,
  as = 'input',
  id,
  className,
  wrapperClassName,
  children,
  ...props
}) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const errorId = error ? `${inputId}-error` : undefined
  const controlClass = clsx(
    styles.control,
    as === 'textarea' && styles.textarea,
    as === 'select' && styles.select,
    error && styles.controlError,
    className,
  )
  const controlProps = {
    id: inputId,
    className: controlClass,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': errorId,
    ...props,
  }

  return (
    <div className={clsx(styles.field, wrapperClassName)}>
      {label ? (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      ) : null}
      {as === 'select' ? (
        <select {...controlProps}>{children}</select>
      ) : as === 'textarea' ? (
        <textarea {...controlProps} />
      ) : (
        <input {...controlProps} />
      )}
      {error ? (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
