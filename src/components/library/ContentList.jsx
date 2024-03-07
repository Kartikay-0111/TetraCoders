import 'w3-css/w3.css';
import { useEffect, useState } from "react";
import Navbar from "./Navbar"

const ContentList = () => {
    const [content, setContent] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)
    useEffect(() => {

        fetch('http://localhost:8010/content')
            .then(res => {
                return res.json();
                if (!res.ok) {
                    throw Error('unable to fetch data')
                }
            })
            .then(content => {
                setIsPending(false);
                setContent(content);
                console.log(content)
                setError(null)
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message)
            })
    }, [])
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <div className='w3-xxlarge'>Some content regarding interviews</div>
            <div>
                <button className='w3-button w3-black w3-margin' onClick={() => handleCategoryChange('question')}>Questions</button>
                <button className='w3-button w3-black' onClick={() => handleCategoryChange('experience')}>Experiences</button>
            </div>
            <div>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {content && content.map((content) => {
                    if (selectedCategory === '' || content.category === selectedCategory) {
                        return (
                            <div className= "w3-animate-zoom w3-padding w3-hover-shadow w3-margin" key={content.id} >
                                <header className="w3-container w3-blue">
                                    <div className="w3-xlarge">Contributed by {content.username}</div>
                                </header>
                                <div className="w3-xlarge">{content.title}</div>
                                <p>{content.body}</p>
                                <footer className="w3-container w3-blue">
                                    <span>Contributed on : {content.date}</span>&nbsp;&nbsp;
                                </footer>
                                <br />
                            </div>
                        );
                    }
                    return null;
                  })}
          
             </div>
             <Navbar />
        </div>
        
    );}
    export default ContentList;
