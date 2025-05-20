import { useState } from 'react'

type Props = {
  onSubmit: (data: {
    type: string
    maxPrice: number
    count: number
    employee: string
    dueDate: string
  }) => void
}

export function RequestForm({ onSubmit }: Props) {
  const [type, setType] = useState('Monitor')
  const [maxPrice, setMaxPrice] = useState('')
  const [count, setCount] = useState('')
  const [employee, setEmployee] = useState('Иван Иванов')
  const [dueDate, setDueDate] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      type,
      maxPrice: Number(maxPrice),
      count: Number(count),
      employee,
      dueDate,
    })
    setIsSubmitted(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        margin: '40px auto',
        gap: '12px',
      }}
    >
      <label htmlFor="type">Тип</label>
      <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
        <option>Monitor</option>
        <option>Laptop</option>
      </select>

      <label htmlFor="maxPrice">Максимальная цена</label>
      <input
        type="number"
        id="maxPrice"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      <label htmlFor="count">Количество</label>
      <input
        type="number"
        id="count"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />

      <label htmlFor="employee">Для кого</label>
      <select
        id="employee"
        value={employee}
        onChange={(e) => setEmployee(e.target.value)}
      >
        <option>Иван Иванов</option>
        <option>Мария Петрова</option>
      </select>

      <label htmlFor="dueDate">Дедлайн</label>
      <input
        type="date"
        id="dueDate"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit">Отправить</button>

      {isSubmitted && (
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          Заявка отправлена
        </p>
      )}
    </form>
  )
}