export const Menu = (props) => {
  const { menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-12 right-12 p-3 bg-[#ff8e38] w-11 h-11 rounded-2xl">
        <div className={`bg-white h-0.5 rounded-md w-full transition-all
          ${menuOpened ? "rotate-45 translate-y-0.5" : ""}`}/>
        <div className={`bg-white h-0.5 rounded-md w-full my-1
          ${menuOpened ? "hidden" : ""}`}/>
        <div className={`bg-white h-0.5 rounded-md transition-all 
          ${menuOpened ? "-rotate-45" : ""}`}/>
      </button>
      <div className={`z-10 fixed top-0 right-0 bottom-0 duration-500 backdrop-blur-2xl transition-all overflow-hidden flex flex-col
        ${menuOpened ? "w-screen" : "w-0"}`}>
        <div className="flex-1 flex items-center justify-center flex-col gap-6 p-8">
          {/* TODO: Fix click function*/}
          <MenuButton label="Home" onClick={() => alert("Projects")} />
          <MenuButton label="Projects" onClick={() => alert("Projects")} />
          <MenuButton label="Contact" onClick={() => alert("Projects")} />
        </div>
      </div>
    </>
  )
}

const MenuButton = (props: any) => {
  const { label, onClick } = props;
  return (
    <button onClick={onClick} className="text-2xl font-bold cursor-pointer hover:text-[#ff8e38] transition-colors">
      {label}
    </button>
  )
}
