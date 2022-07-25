import Header from "./Header";
import Footer from "./Footer";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
