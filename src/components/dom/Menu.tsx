export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        className="bg-[#ff8e38] z-20 fixed top-12 right-12 p-2 w-12 h-12 rounded-2xl"
        onClick={() => setMenuOpened(!menuOpened)}>
        <div className={`bg-white h-1 rounded-md w-full transition-all ${
          menuOpened ? 'rotate-45 translate-y-0.5' : ''
          }`}
        />
        <div className={`bg-white h-1 rounded-md w-full my-1 ${
          menuOpened ? 'hidden' : ''
        }`}
        />
        <div className={`bg-white h-1 rounded-md w-full transition-all ${
          menuOpened ? '-rotate-45' : ''
        }`}
        />
      </button>
    </>
  )
}
