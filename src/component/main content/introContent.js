import "./mainContent.css";
import "../js/animation/typing";

function IntroContent() {
    return (
        <section className="introContent">
            <div className="container">
                <div className="justify-content-center row column-gap-2">
                    <div className="text-center text-md-start col-md-5 col-11 container">
                        <h5 className="text-white-50">Hi, I'm</h5>
                        <h1 className="mt-2 mb-2 nameIntro">Muhammad Aldora Fausta</h1>
                        <h4>
                            <span className="text-white">I'm Specializing At</span><br/>
                            <span className="text-white typewrite nameEmphasize" data-period="2000"
                                data-type='[ "Front-end Web Programming", "Back-end Web Programming",
                                "Data Science"]'>
                                <span className="wrap"></span>
                            </span>
                        </h4>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin enim quis nibh consequat tincidunt. Praesent efficitur vehicula ligula, a consequat arcu sodales nec. Donec auctor odio sed ante pulvinar maximus. Nullam aliquet tempor orci, non condimentum lectus imperdiet ut. Nunc velit erat, luctus sit amet diam at, euismod tincidunt libero. Ut molestie nisi vel neque rhoncus fermentum. Suspendisse ullamcorper bibendum gravida. Praesent vel lacus non urna auctor porttitor at id purus. Praesent suscipit lacus ac erat tempus porta. Proin iaculis vulputate vehicula. Vestibulum magna augue, aliquet eu pellentesque rhoncus, vehicula eget ipsum. Curabitur vestibulum enim ac eros iaculis semper.
                        </p>
                        <div className="container">
                            <div className="row justify-content-around gap-3">
                                <div className="col-2 rounded-5">
                                    <a href="#" className="bg-white">
                                        <img src="assets/logo/instagram-logo-facebook-2.svg" className="LogoSize" alt=""/>
                                    </a>
                                </div>
                                <div className="col-2 rounded-5">
                                    <a href="#">
                                        <img src="" alt=""/>
                                    </a>
                                </div>
                                <div className="col-2 rounded-5">
                                    <a href="#"><img src="" alt=""/>
                                    </a>
                                </div>
                                <div className="col-2 rounded-5">
                                    <a href="#">
                                        <img src="" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-5 d-none d-md-block container">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroContent;