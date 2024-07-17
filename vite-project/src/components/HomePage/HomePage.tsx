import ContainerComponent from '../ContainerComponent/ContainerComponent';
import BodyComponent from '../BodyComponent/BodyComponent';
import Footer from '../Footer/Footer';

const HomePage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ContainerComponent />
            <BodyComponent />
            <Footer />
        </div>
    );
};

export default HomePage;
