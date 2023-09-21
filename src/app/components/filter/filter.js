import "@/app/scss/filter.scss"
import { useState, useEffect } from "react";
import { SearchBar, Post } from "./gadgets";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faAngleDown } from "@fortawesome/free-solid-svg-icons";



export function generateInitialState(checkboxes) {
    const initialState = {};
    checkboxes.forEach(group => {
        initialState[group.category] = {};
        group.names.forEach(name => {
            initialState[group.category][name] = false;
        });
    });
    return initialState;
}

export default function Filter({ id, checkboxes, hasSearch, hasSubmit, checkboxStates, setCheckboxStates }) {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        console.log(checkboxStates);
    }, [checkboxStates])

    function handleCheckboxChange(category, name, value) {
        setCheckboxStates(prevState => ({
            ...prevState,
            [category]: {
                ...prevState[category],
                [name]: value
            }
        }));
    };

    function handleReset() {
        const resetStates = { ...checkboxStates };
        Object.keys(resetStates).forEach(category => {
            Object.keys(resetStates[category]).forEach(name => {
                resetStates[category][name] = false;
            });
        });
        setCheckboxStates(resetStates);
    }

	return (
		<div id={id} className="filter">
			<div className="flex items-center justify-between gap-2">
                <button title="Toggle filter" onClick={() => setExpanded(!expanded)} aria-controls={id + "-checkboxes"} aria-expanded={expanded}
                        className="flex items-center justify-center gap-2 font-bold mt-3 mb-3 px-1">
                    <FontAwesomeIcon icon={faFilter} />
                    <span className="whitespace-nowrap">篩選</span>
                    <FontAwesomeIcon icon={faAngleDown} className={`${expanded ? "rotate-180" : ""} transition-transform motion-reduce:transition-none`} />
                </button>

                <div className="flex items-center gap-8">
                    {hasSearch && <SearchBar />}
                    {hasSubmit && <Post />}
                </div>
            </div>

            {checkboxes && (
			    <div id={id + "-checkboxes"} className={`${expanded ? "opacity-100" : "opacity-0"} filter-content`} aria-hidden={!expanded} role="region">
                    {/* // TODO: Could use "subgrid" when its global usage gets higher */}
                    <div className="flex place-items-start gap-x-8 md:flex-col">
                        {checkboxes.map((group, groupIndex) => (
                            <div key={`group-${groupIndex}`} className="grid md:grid-flow-col">
                                <span className="flex items-center md:w-16 mr-8 font-bold whitespace-nowrap">
                                    {group.category}
                                </span>
                                {group.names.map((name, index) => (
                                    <CheckBox 
                                        key={`group-${groupIndex}-${index}`} 
                                        category={group.category} 
                                        name={name}
                                        checkboxState={checkboxStates[group.category][name]}
                                        setCheckboxState={handleCheckboxChange}
                                        expanded={expanded} />
                                ))}
                            </div>
                        ))}
                    </div>

                    <button title="Reset filter" className="font-bold py-2 text-accent" onClick={handleReset} tabIndex={expanded ? 0 : -1}>重設</button>
                </div>
            )}
		</div>
	);
}

export function CheckBox({ category, name, checkboxState, setCheckboxState, expanded }) {
    function handleChange(e) {
        setCheckboxState(category, name, e.target.checked);
    }

	return (
		<div className="flex items-center md:w-[7rem] h-[3rem]">
            <label className="form-control w-fit">
                <input type="checkbox" name={category} className="checkbox" checked={checkboxState} onChange={handleChange} tabIndex={expanded ? 0 : -1} />
                <span>{name}</span>
            </label>
        </div>
	);
}