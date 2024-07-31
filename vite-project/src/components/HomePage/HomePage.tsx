import ContainerComponent from '../ContainerComponent/ContainerComponent';
import BodyComponent from '../BodyComponent/BodyComponent';
import BodyComponent2 from '../BodyComponent2/BodyComponent2';
import Footer from '../Footer/Footer';

const HomePage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <ContainerComponent />
            <BodyComponent />
            <BodyComponent2 />
            <Footer />
        </div>
    );
};

export default HomePage;
