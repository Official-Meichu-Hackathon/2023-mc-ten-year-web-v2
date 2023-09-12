// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faEye, faMessage } from "@fortawesome/free-regular-svg-icons";



export function TeamTitle({ title, group, name, mail, github, tags, view, msg, onClose }) {
    return (
        <div>
            <div className="wrapper-padding-sm grid pt-12 pb-6 gap-2 bg-card-1">
                <div className="flex justify-between gap-8">
                    <h1 className="">{title}</h1>
                    <button className="self-start p-4" onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes} className="scale-200" />
                    </button>
                </div>
                <span className="team-subtitle">{group} ｜ {name}</span>
                <div className="grid gap-y-1 [&_>_a]:w-fit">
                    <a href={`mailto:${ mail }`} target="_blank" rel="noreferrer noopener">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className="ml-2 text-tag">{mail}</span>
                    </a>
                    <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                        <span className="ml-2 text-tag">{github}</span>
                    </a>
                </div>
            </div>

            <div className="wrapper-padding-sm flex items-center justify-between py-4 bg-card-2 [&_>_*]:space-x-4">
                <div>
                    {tags.map((tag, index) => (
                        <span key={index}>
                            #{tag}
                        </span>
                    ))}
                </div>
                <div className="hidden md:block">
                    <span>
                        <FontAwesomeIcon icon={faEye} className="mr-2"/>
                        {view}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faMessage} className="mr-2" />
                        {msg}
                    </span>
                </div>
            </div>
        </div>
    );
}