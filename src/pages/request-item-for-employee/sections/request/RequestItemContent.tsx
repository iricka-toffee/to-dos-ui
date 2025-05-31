import { useContext } from "react"
import { observer } from "mobx-react-lite"
import { RequestItemStateContext } from "./state/RequestItemStateContext"

type Props = {
  onSubmitClick: () => Promise<void>,
};

export const RequestItemContent = observer(({ onSubmitClick }: Props) => {
  const requestItemState = useContext(RequestItemStateContext)

  return (
    <div style={{ fontFamily: 'Arial', maxWidth: '600px' }}>
      {/* Меняем <input> на <textarea> */}
      <textarea
        rows={4} // количество видимых строк (опционально)
        cols={50} // ширина области ввода (опционально)
        data-cy="request-item-textarea"
        value={requestItemState.description}
        onChange={(e) =>
          requestItemState.changeDescription({ newDescription: e.target.value })
        }
      ></textarea>

      <p
        data-cy="request-item-preview"
        style={{
          wordWrap: 'break-word',
          whiteSpace: 'pre-wrap', // поддерживает перенос + \n
        }}
      >
        <span>{requestItemState.description}</span>
      </p>

      <button
        type="button"
        data-cy="submit-button"
        onClick={onSubmitClick}
      >
        Submit
      </button>
    </div>
  )
})