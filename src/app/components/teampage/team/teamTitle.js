import "@/app/scss/team.scss";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faEye, faMessage } from "@fortawesome/free-regular-svg-icons";



// TODO: Where to put the awards?
export function TeamTitle({ title, year, group, names, mail, github, tags, awards, view, msg }) {
    return (
        <div className="">
            <div className="bg-title">
                <div className="wrapper grid pt-12 pb-6 gap-2">
                    <h1 className="">{title}</h1>
                    <span className="team-subtitle">
                        {year}&nbsp;{group}&nbsp;｜&nbsp;
                        {names.map((name, index) => (
                            <span key={index}>
                                {name}
                                {index !== names.length - 1 ? "、" : ""}
                            </span>
                        ))}
                    </span>
                    <div className="grid gap-y-1 [&_>_a]:w-fit text-secondary">
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
            </div>

            <aside className="bg-secondary">
                <div className="wrapper-flex items-center justify-between py-4 [&_>_*]:space-x-4">
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
            </aside>
        </div>
    );
}