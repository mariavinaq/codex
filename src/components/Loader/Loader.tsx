import './Loader.scss';

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader__dot loader__dot--1"></div>
            <div className="loader__dot loader__dot--2"></div>
            <div className="loader__dot loader__dot--3"></div>
        </div>
    );
};

export default Loader;