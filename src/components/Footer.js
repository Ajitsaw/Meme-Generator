import { Link } from "react-router-dom";

export default function Footer(props) {
    return (
        <footer className={props.darkMode ? "dark" : ""}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-auto">
                        <div className="copyright">
                            AJ © 2022. All Rights Reserved.
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="footer-right">
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="">Imprint</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}