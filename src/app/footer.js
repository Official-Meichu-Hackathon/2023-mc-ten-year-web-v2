import "@/app/scss/footer.scss"

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

export default function Footer() {
	return (
		<footer className="bg-slate-50">
			<div className="grid place-items-center gap-y-2 p-8">
                <div className="flex gap-x-6 [&_>_*]:transition-colors [&_>_*]:motion-reduce:transition-none">
                    <a id="fb-link" href="https://www.facebook.com/HackMeiChu" aria-label="Facebook" target="_blank" rel="noreferrer noopener"
                                    className="footer-link">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a id="ig-link" href="https://www.instagram.com/mc_hackathon/" aria-label="Instagram" target="_blank" rel="noreferrer noopener"
                                    className="footer-link">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    
                    <a id="mail-link" href="mailto:mchackathon2023@gmail.com" aria-label="Mail" target="_blank" rel="noreferrer noopener"
                                      className="footer-link">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
                <span className="text-fineprint">Copyright © 2023 Meichu Hackathon. All rights reserved</span>
            </div>
		</footer>
	);
}