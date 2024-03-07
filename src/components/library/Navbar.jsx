import 'w3-css/w3.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const [condition, setCondition] = useState(false)
    return (
        <div className="w3-container ">
            <div className='w3-bottom w3-bar w3-black'>
                <ul className='w3-cell-row'>
                    <li className='w3-container w3-cell'><a className='w3-button w3-black w3-bar-item' href="/inex">Interview Experiences</a></li>
                    <li className='w3-container w3-cell'><a className='w3-button w3-black w3-bar-item' href="/">Study Materials</a></li>
                    <li className='w3-container w3-cell'><a type='button' onClick={() => { document.getElementById('id1').style.display = "block" }} className='w3-circle w3-button w3-black w3-bar-item'>Contribute</a></li>
                    <li className='w3-container w3-cell'><a className='w3-button w3-black w3-bar-item' href="/">Interview questions</a></li>
                    <li className='w3-container w3-cell'><a className='w3-button w3-black w3-bar-item' href="/">Home</a></li>
                </ul>
            </div>
            <div className='w3-block'>
                <div style={{
                    display: "none",
                    position: "fixed",
                    bottom: "8vh",
                    width: "70%",
                    left: "5vw"
                }} id="id1" className=" w3-animate-zoom w3-blue w3-text-white w3-card-4">
                    <div className="w3-padding w3-block">
                        <div className='w3-blue w3-xlarge'>Choose A category  <span onClick={() => { document.getElementById('id1').style.display = 'none' }}
                            className="w3-hover-none w3-hover-blue w3-button w3-display-right">&times;</span></div>
                        <input onClick={() => setCondition(false)} value="experience" type="radio" name="category" id="inex" />
                        <label htmlFor="inex">Interview Experience</label>
                        <br />
                        <input onClick={() => setCondition(false)} value="questions" type="radio" name="category" id="inqu" />
                        <label htmlFor="inqu">Interview Questions</label>
                        <br />
                        <input onClick={() => setCondition(true)} value="material" type="radio" name="category" id="material" />
                        <label htmlFor="material">Study Materials</label>
                        <br />
                        <div className='w3-center'> <button onClick={() => condition ? navigate("/Input2") : navigate("/Input")} className='w3-block w3-black w3-button'>Next</button></div>

                    </div>
                </div>
            </div>
        </div >
    );
}
export default Navbar;