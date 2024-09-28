import { useSelector } from "react-redux";

export const Footer = () => {
  const {theme} = useSelector((state => state.theme))
    const currentYear = new Date().getFullYear();
  return (
    <footer style={{height: "10%"}} className={`footer ${theme}`}>
        {currentYear}
    </footer>
  )
}
