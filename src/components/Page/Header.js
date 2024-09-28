import { useSelector } from "react-redux"

export const Header = () => {
    const {theme} = useSelector((state) => state.theme)
  return (
    <header style={{height: "10%"}} className={`header ${theme}`}>
        <h2> HomeWork 5</h2>
    </header>
  )
}
