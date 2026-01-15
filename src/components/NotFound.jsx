import { Link } from 'react-router-dom';
import Disordine from '../assets/Disordine.png';

const NotFound = () => {
    return (
        <div className='container' style={{ textAlign: 'center', marginTop: '50px' }} >
            <h1>Oops... Error 404</h1>
            <h4 className="text-lg text-gray-600 font-light leading-relaxed mb-10 max-w-lg mx-auto">
                Even if frustration arises, don't worry.
                <br />
                At <span>Dualia</span>, you will find
                everything you need to restore your calm and rediscover your inner peace.
            </h4>
            <div className="dualia-img m-2">
                <img src={Disordine} className="mx-auto w-64 md:w-80 drop-shadow-2xl animate-bounce-slow" alt="Page not found" />
            </div>
            <h2><strong>Title:</strong> "Something went wrong, but it’s not your fault... probably."</h2>
            <h6>
                <strong>Message:</strong> We’ve looked everywhere: under the desk,
                inside the server, even in the programmer's coffee. Nothing... this page just isn't here.
            </h6>
            <br />
            <p>Don't worry, it happens to the best of us. Let us get you back on the right track.</p>
            <br />
            <Link to="/"><button className="btn btn-dualia-dark">Let's go back to Home</button></Link>
            <br />
            <br />
        </div>
    );
};

export default NotFound;