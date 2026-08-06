/**
 * Parse Laravel-style API validation errors into a flat field → message map.
 * Supports `{ data: { errors } }` and top-level `{ errors }`.
 */
export function parseApiFormErrors(error) {
  const payload = error?.response?.data
  const errors = payload?.data?.errors || payload?.errors
  if (!errors || typeof errors !== 'object') {
    return {
      message: payload?.message || null,
      fieldErrors: {},
      firstField: null,
    }
  }

  const fieldErrors = {}
  for (const [field, messages] of Object.entries(errors)) {
    const list = Array.isArray(messages) ? messages : [messages]
    fieldErrors[field] = list.filter(Boolean).join(' ')
  }

  return {
    message: payload?.message || null,
    fieldErrors,
    firstField: Object.keys(fieldErrors)[0] || null,
  }
}
