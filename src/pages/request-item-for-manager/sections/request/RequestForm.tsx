import React, { useState } from "react"

export function RequestForm() {
  const [type, setType] = useState("")
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSuccessMessage(null)
    const res = await fetch("/api/inventory-api/requests/for-employee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type }),
    })
    if (res.ok) {
      const data = await res.json()
      setSuccessMessage(data.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="type">Тип</label>
      <select
        id="type"
        name="type"
        value={type}
        onChange={e => setType(e.target.value)}
      >
        <option value="">Выберите тип</option>
        <option value="Laptop">Laptop</option>
        {/* ...другие опции... */}
      </select>
      <button type="submit">Создать заявку</button>
      {successMessage && <div>{successMessage}</div>}
    </form>
  )
}
