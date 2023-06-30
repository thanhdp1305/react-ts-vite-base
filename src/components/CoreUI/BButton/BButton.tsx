import './style.scss'

function BButton(props: any) {
  return (
    <button 
      className={props?.className} 
      disabled={props?.disabled == true ? true : undefined }>
      {
        props?.isLoading
        ? (
          <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
        )
        : ''
      }
      {
        props?.children
        ? props?.children
        : props?.label
      }
    </button>
  )
}

export default BButton
