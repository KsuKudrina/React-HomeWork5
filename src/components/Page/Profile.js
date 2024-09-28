import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "../store/themeReducer";

const Profile = () => {
  const {theme} = useSelector((state) => state.theme)
  const dispatch = useDispatch();
  
  return (
    <div style={{height: '80%'}} className={`content ${theme}`} >
      <div className="content">
        <button className={`button ${theme}`} onClick={() => {dispatch(toggleTheme())}}>Сменить тему</button>
        <p>Тут какой то контент</p>
      </div>  
    </div>
  )
}

export default Profile;