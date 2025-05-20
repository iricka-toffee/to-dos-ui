export function RequestForm() {
  return (
    <form>
      <label htmlFor="type">Тип</label>
      <select id="type">
        <option>Monitor</option>
        <option>Laptop</option>
      </select>
    </form>
  )
}