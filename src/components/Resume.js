import './Resume.css';

function Resume() {
    return(
        <>
        <div className="container"></div>
        <div className='stuff'>
        <div className="header">
            <br></br>
            <h1>Resume</h1>
            <h2>Emily</h2>
            <hr />
        
        </div>
        <div className="body">
            <div className="sub-heading">
               Interests
            </div>
            <div>   
                <ul>
                    <li>Drawing</li>
                    <li>Photography</li>
                    <li>Design</li>
                    <li>Programming</li>
                    <li>CS</li>
                </ul>
            </div>


            <div className="sub-heading">
               Skills
            </div>
           <div >
             <ul><li>Web Design with HTML & CSS</li></ul>
           </div>


           <div className="sub-heading">
               Education
            </div>
            <div>   
                <ul>
                    <li>Wilton High School</li>
                    <li>Silvermine School of arts</li>
                    <li>Codeacademy</li>
                </ul>
            </div>

            <div className="sub-heading">
               Experience
            </div>
            <div>   
                <ul>
                    <li>Wilton High School District</li>
                    <li>Babysitter</li>
                </ul>
            </div>

            <div className="sub-heading">
               Extracurriculars
            </div>
            <div>   
                <ul>
                    <li>Recycling Club</li>
                    <li>Gardening club</li>
                    <li>Book Club</li>
                </ul>
            </div>

            
        </div>
        </div>
        <div className="container"><h2 className='name'>Emily</h2></div>
        </>
    )
}

export default Resume;