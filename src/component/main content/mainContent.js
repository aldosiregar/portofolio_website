import "./mainContent.css";

function MainContent(){
    const skillsContent = JSON.parse(JSON.stringify(require("./../../data/json/mainContent.json")));

    return(
        <section className="mainContent">
            <div className="container justify-content-center">
                <h3 className="nameIntro centering mt-5 mb-4 m-auto m-md-5">My Skills</h3>
            </div>
            
            <div className="container text-center mb-5">
                <div className="row justify-content-around gap-3 gap-md-5 ">
                    {skillsContent.skills.map((skill) => (
                        <div className="p-5 card-color col-11 col-md-5 rounded-5" key={skill.Title}>
                            <h5>{skill.Title}</h5>
                            <p>{skill.Description}</p>
                            <h5>Keahlian</h5>
                            <ul className="text-lg-start justify-content-center">
                                {
                                    skill.Keahlian.map((Keahlian) => (
                                        <li key={Keahlian}>{Keahlian}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container justify-content-center">
                <h3 className="nameIntro centering mt-5 mb-4 m-auto-m-md-5">Past Project</h3>
            </div>

            <div className="container text-center">
                <div className="row justify-content-around gap-3 gap-md-5">
                    <div className="p-5 rounded-5"></div>
                    <div className="p-5 rounded-5"></div>
                    <div className="p-5 rounded-5"></div>
                </div>
            </div>
        </section>
    )
}

export default MainContent;