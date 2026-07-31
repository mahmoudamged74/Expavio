import { useId, useState } from 'react'
import clsx from 'clsx'
import { HiChevronDown } from 'react-icons/hi2'
import styles from './Accordion.module.css'

export function Accordion({ items = [], allowMultiple = false, className }) {
  const baseId = useId()
  const [openIds, setOpenIds] = useState([])

  const toggle = (id) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id)
      if (allowMultiple) {
        return isOpen ? prev.filter((item) => item !== id) : [...prev, id]
      }
      return isOpen ? [] : [id]
    })
  }

  return (
    <div className={clsx(styles.accordion, className)}>
      {items.map((item, index) => {
        const itemId = item.id ?? `${baseId}-${index}`
        const triggerId = `${itemId}-trigger`
        const panelId = `${itemId}-panel`
        const isOpen = openIds.includes(itemId)

        return (
          <div
            key={itemId}
            className={clsx(styles.item, isOpen && styles.itemOpen)}
          >
            <h3 className={styles.header}>
              <button
                id={triggerId}
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(itemId)}
              >
                <span>{item.title ?? item.q}</span>
                <HiChevronDown
                  className={styles.chevron}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={styles.panel}
            >
              <div className={styles.content}>
                {item.content ?? item.a}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
