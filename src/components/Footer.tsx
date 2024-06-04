import {
    MailOutlined,
    BellOutlined,
    PlusCircleOutlined,
    TeamOutlined,
} from "@ant-design/icons";
import "@styles/Footer.styles.scss";

const FooterNotes = () => {
    return (
        <div className="footer-notes">
            <p className="footer-note">
                Built by{" "}
                <a
                    href="https://www.linkedin.com/in/abdelrahman-el-adawy/"
                    target="_blank"
                >
                    Abdelrahman El-Adawy
                </a>
                ,{" "}
                <a
                    href="https://www.linkedin.com/in/ahmed-eladawy-00b4a3115/"
                    target="_blank"
                >
                    Ahmed ElAdawy
                </a>
                , and{" "}
                <a
                    href="https://www.linkedin.com/in/mahsayedsalem/"
                    target="_blank"
                >
                    Mahmoud Salem
                </a>
            </p>
            <p className="footer-note">
                <a
                    href="https://lookerstudio.google.com/reporting/fe186294-7d07-45c7-bab5-ea172cb1d632"
                    target="_blank"
                >
                    Looker Studio Dashboard
                </a>
            </p>
            <p className="footer-note">
                <a href="https://api.egytech.fyi" target="_blank">
                    Check our API for Raw Data
                </a>
            </p>
            <p className="footer-note">
                Inspired from{" "}
                <a
                    href="https://handpickedberlin.com/berlin-salary-trends-2024-dashboard/"
                    target="_blank"
                >
                    Berlin Salary Trends Dashboard
                </a>
            </p>
        </div>
    );
};

const FooterActions = () => {
    return (
        <div className="footer-actions">
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfBAjjgs14SQ9i3Dgo6BDPp-m7sxqHaUt4kFOghV-44knIUPg/viewform"
                target="_blank"
            >
                <PlusCircleOutlined />
                Contribute
            </a>
            <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfKS-ZBzixfgOlsqpMEmn65_Em1Ek1-wOLXfhrXHORP9gsp0g/viewform?usp=sf_link"
                target="_blank"
            >
                <TeamOutlined />
                Volunteer
            </a>
            <a href="https://egytechscene.substack.com/" target="_blank">
                <BellOutlined />
                Subscribe
            </a>
            <a href="mailto:mahsayedsalem@gmail.com" target="_blank">
                <MailOutlined />
                Contact
            </a>
        </div>
    );
};
export const Footer = () => {
    return (
        <footer className="footers">
            <FooterNotes />
            <FooterActions />
        </footer>
    );
};
