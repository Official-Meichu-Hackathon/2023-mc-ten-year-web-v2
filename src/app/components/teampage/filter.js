
import { useState } from "react";
import { SearchBar, Post } from "./gadgets";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faAngleDown } from "@fortawesome/free-solid-svg-icons";



export default function Filter({ checkBoxNames }) {
	const [s2021, set2021] = useState(false);
	const [s2022, set2022] = useState(false);
	const [s2023, set2023] = useState(false);
	const [s2024, set2024] = useState(false);
	const [toggleViewMode, setToggleViewMode] = useState(false);
	const [creatorGroup, setCreatorGroup] = useState(false);
	const [awardworks, setAwardworks] = useState(false);
	const [groupGroup, setGroupGroup] = useState(false);
	const [hackerGroup, setHackerGroup] = useState(false);
	const [communicationGroup, setCommunicationGroup] = useState(false);
	const [hackerCreatorGroup, setHackerCreatorGroup] = useState(false);
	const checkBoxes = [
		[
			{
				setState: set2021,
				state: s2021,
			},
			{
				setState: set2022,
				state: s2022,
			},
			{
				setState: set2023,
				state: s2023,
			},
			{
				setState: set2024,
				state: s2024,
			},
		],
		[
			{
				setState: setHackerGroup,
				state: hackerGroup,
			},
			{
				setState: setCreatorGroup,
				state: creatorGroup,
			},
			{
				setState: setCommunicationGroup,
				state: communicationGroup,
			},
			{
				setState: setHackerCreatorGroup,
				state: hackerCreatorGroup,
			},
			{
				setState: setGroupGroup,
				state: groupGroup,
			},
		],
		[
			{
				setState: setAwardworks,
				state: awardworks,
			},
		],
	];

	const handleReset = () => {
        set2021(false);
        set2022(false);
        set2023(false);
        set2024(false);
		setCreatorGroup(false);
		setAwardworks(false);
		setCommunicationGroup(false);
		setGroupGroup(false);
		setHackerCreatorGroup(false);
		setHackerGroup(false);
	};

	return (
		<div className="grid gap-4">
			<div className="flex items-center justify-between gap-2">
                <button className="flex items-center justify-center gap-2 font-bold mt-3 mb-3"
                        onClick={() => setToggleViewMode(!toggleViewMode)}>
                    <FontAwesomeIcon icon={faFilter} />
                    <span className="whitespace-nowrap">篩選</span>
                    <FontAwesomeIcon icon={faAngleDown} className={`${toggleViewMode ? "rotate-180" : ""} transition-transform`} />
                </button>
                <div className="flex items-center gap-8">
                    <SearchBar />
                    <Post />
                </div>
            </div>

            {checkBoxNames && toggleViewMode && (
			    <div>
                    <div className="flex place-items-start gap-x-4 md:flex-col">
                        {checkBoxNames.map((group, groupIndex) => (
                            <div key={`group-${groupIndex}`} className="grid md:grid-flow-col">
                                <span className="flex items-center w-18 mr-8 font-bold">
                                    {group.name}
                                </span>
                                {group.data.map((item, index) => {
                                    return (
                                        <CheckBox key={`group-${groupIndex}-${index}`} category={group.name} name={item}
                                                      checkboxState={checkBoxes[groupIndex][index].state}
                                                      setCheckboxState={checkBoxes[groupIndex][index].setState}/>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                    <button className="font-bold py-2 text-accent" onClick={handleReset}>重設</button>
                </div>
            )}
		</div>
	);
}

export function CheckBox({ category, name, checkboxState, setCheckboxState }) {
    function handleChange(e) {
        setCheckboxState(e.target.checked);
    }

	return (
		<div className="flex items-center w-[7.6rem] h-[3rem]">
            <label className="form-control w-fit">
                <input type="checkbox" name={category} className="checkbox" checked={checkboxState} onChange={handleChange} />
                <span className="">{name}</span>
            </label>
        </div>
	);
}