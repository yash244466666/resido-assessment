import footerLogo from '../../res/footer-logo.svg';
import footerSocialIco from '../../res/footer-social-ico.svg'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={footerLogo} alt="logo" />
                </div>
                <div className="social-ico">
                    <img src={footerSocialIco} alt="social-ico" />
                </div>
            </div>
        </div>
    );
}

export default Footer;