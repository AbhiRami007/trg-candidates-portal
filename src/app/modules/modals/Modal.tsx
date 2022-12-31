const Modal = ({
  show,
  close,
  title,
  content,
  submit,
  ok,
  cancel,
  isValid,
  invalidMsg,
  showBtn,
  BtnMsg,
  BtnClick,
}: any) => {
  return (
    <>
      {show ? (
        <div className='modalContainer' onClick={() => close()}>
          <div className='modal-border' onClick={(e) => e.stopPropagation()}>
            <header className='modal-border-header'>
              <h2 className='modal-border-header-title'>{title}</h2>
              {/* <button className='close' onClick={() => close()}>
                &times;
              </button> */}
            </header>
            <main className='modal-border-content'>{content}</main>
            {!isValid && <main className='modal-border-error'>{invalidMsg}</main>}
            <footer className='modal-border-footer'>
              {cancel && (
                <button className='modal-border-footer-close' onClick={() => close()}>
                  {cancel}
                </button>
              )}
              {showBtn && (
                <button className='modal-border-footer-close' onClick={() => BtnClick()}>
                  {BtnMsg}
                </button>
              )}

              <button className='modal-border-footer-submit' onClick={() => submit()}>
                {ok}
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal
