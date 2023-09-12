import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

export default function Footer() {
	return (
		<footer className="bg-slate-50">
			<div className="grid place-items-center p-10">
                <div className="flex gap-x-8">
                    <a href="https://www.facebook.com/HackMeiChu" target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/mc_hackathon/" target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    
                    <a href="mailto:mchackathon2023@gmail.com" target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
                <span className="text-fineprint">Copyright © 2023 MeiChu Hackathon. All rights reserved</span>
            </div>
		</footer>
	);
}