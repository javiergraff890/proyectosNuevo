import "./sidebar.css"
import {useState} from 'react'

export default function Sidebar({changeActual}){
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const changeSidebarStatus = () =>{
        setSidebarOpen(!sidebarOpen)
    }

    return(
        <aside className={sidebarOpen ? "aside-sidebar sidebarOpen" : "aside-sidebar sidebarClose"}>
            <div className="section-arrow">
                <div onClick={changeSidebarStatus} className="div-img-arrow">
                    <img className="img-arrow" src={sidebarOpen ? "./src/assets/left-arrow.png" : "./src/assets/right-arrow.png"}></img>
                </div>
            </div>
            <div className={ sidebarOpen ? "section-icons section-icons-big" : "section-icons section-icons-small"}>
                {
                    sidebarOpen ? (
                        <>
                        <img className="profile-pic-big" src="./src/assets/perfil.jpg" onClick={ () => changeActual(0)} />
                        <h2>JAVIER GRAFF</h2>
                        <div className="buttons-options-big">
                            <div onClick={ () => changeActual(0)}>SOBRE MI</div>
                            <div onClick={ () => changeActual(1) }>PROYECTOS</div>
                            <div onClick={ () => changeActual(2) }>CONTACTO</div>
                        </div>
                        
                        </>
                    ) : (
                        <>
                        <img className="profile-pic-small" src="./src/assets/perfil.jpg" onClick={ () => changeActual(0)} />
                        <div className="buttons-options-small">
                            <div>
                                <div onClick={ () => changeActual(0)}>📜</div>
                                <span>SOBRE MI</span>
                            </div>
                            <div>
                                <div onClick={ () => changeActual(1) }>💻</div>
                                <span>PROYECTOS</span>
                            </div>
                            <div>
                                <div onClick={ () => changeActual(2) }>✉️</div>
                                <span>CONTACTO</span>
                            </div>
                            
                        </div>
                        </>
                    )
                }
            </div>
        </aside>
    )
}