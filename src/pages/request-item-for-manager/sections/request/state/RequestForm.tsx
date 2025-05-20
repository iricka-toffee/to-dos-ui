
export function RequestForm() {
  return (
    <form>
      <label htmlFor="type">Тип</label>
      <select id="type">
        <option>Monitor</option>
        <option>Laptop</option>
      </select>

      <label htmlFor="maxPrice">Максимальная цена</label>
      <input type="number" id="maxPrice" />

      <label htmlFor="count">Количество</label>
      <input type="number" id="count" />

      <label htmlFor="employee">Для кого</label>
      <select id="employee"></select>
    </form>
  )
}
