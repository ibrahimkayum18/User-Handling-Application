import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div>
                <h2>!Something Went Wrong</h2>
                <Link to={'/'}>
                    <button className="btn btn-primary">Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;