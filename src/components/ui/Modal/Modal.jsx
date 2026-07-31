import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { HiXMark } from 'react-icons/hi2'
import styles from './Modal.module.css'

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
  closeLabel = 'Close',
}) {
  const titleId = useId()
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleOverlayClick = (event) => {
    if (event.target === overlayRef.current) onClose()
  }

  return createPortal(
    <div
      ref={overlayRef}
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="presentation"
    >
      <div
        className={clsx(styles.dialog, className)}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
      >
        <div className={styles.header}>
          {title ? (
            <h2 id={titleId} className={styles.title}>
              {title}
            </h2>
          ) : (
            <span />
          )}
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label={closeLabel}
          >
            <HiXMark aria-hidden="true" />
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>,
    document.body,
  )
}
