import {
  MailOutlined,
  BellOutlined,
  PlusCircleOutlined,
  TeamOutlined,
  GithubOutlined,
} from '@ant-design/icons'
import '@styles/Footer.styles.scss'

const FooterNotes = () => {
  return (
    <div className='footer-notes'>
      <p className='footer-note'>
        <a href='https://api.egytech.fyi' target='_blank'>
          Check our API for Raw Data
        </a>
      </p>
      <p className='footer-note'>
        <a
          href='https://docs.google.com/spreadsheets/d/1-KRL3Pz-S2H3tp60X6V6BO1DsBrl8jKSDSmCY961qwA/edit?usp=sharing'
          target='_blank'>
          Check filtered raw data for more insights (without any PII)
        </a>
      </p>
    </div>
  )
}

const FooterActions = () => {
  return (
    <div className='footer-actions'>
      <a
        href='https://docs.google.com/forms/d/e/1FAIpQLSfBAjjgs14SQ9i3Dgo6BDPp-m7sxqHaUt4kFOghV-44knIUPg/viewform'
        target='_blank'>
        <PlusCircleOutlined />
        Participate
      </a>
      <a href='https://github.com/egytech-fyi' target='_blank'>
        <GithubOutlined />
        Collaborate
      </a>
      <a
        href='https://docs.google.com/forms/d/e/1FAIpQLSfKS-ZBzixfgOlsqpMEmn65_Em1Ek1-wOLXfhrXHORP9gsp0g/viewform?usp=sf_link'
        target='_blank'>
        <TeamOutlined />
        Volunteer
      </a>
      <a href='https://egytechscene.substack.com/' target='_blank'>
        <BellOutlined />
        Subscribe
      </a>
      <a href='mailto:mahsayedsalem@gmail.com' target='_blank'>
        <MailOutlined />
        Contact
      </a>
    </div>
  )
}
export const Footer = () => {
  return (
    <footer className='footers'>
      <FooterNotes />
      <FooterActions />
    </footer>
  )
}
