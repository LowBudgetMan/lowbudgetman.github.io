import footerStyles from './footer.module.css';
import GitHubLink from '../Logos/GitHubLink';
import LinkedInLink from '../Logos/LinkedInLink';

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
        <GitHubLink />
        <p className={footerStyles.copyright}>© {new Date().getFullYear()} Nick Reuter. All&nbsp;rights&nbsp;reserved.</p>
        <LinkedInLink />
    </footer>
  );
}
