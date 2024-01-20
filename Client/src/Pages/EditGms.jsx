import React, { useState } from "react";

const EditGms = () => {
	const [gmList, setGmList] = useState([
		{ id: 0, name: "GM1" },
		{ id: 1, name: "GM2" },
		{ id: 2, name: "GM3" },
	]);

	const handleAddGM = () => {
		const inputElement = document.getElementById("GMNameInput");
		const newName = inputElement.value;

		if (newName.trim() !== "") {
			const newGmList = [...gmList, { id: gmList.length, name: newName }];
			setGmList(newGmList);
			inputElement.value = "";
		}
	};

	const handleDeleteGM = (id) => {
		const updatedGmList = gmList.filter((gm) => gm.id !== id);
		setGmList(updatedGmList);
	};

	const handleEditGM = (id, newName) => {
		const updatedGmList = gmList.map((gm) =>
			gm.id === id ? { ...gm, name: newName } : gm
		);
		setGmList(updatedGmList);
	};

	return (
		<div className="flex flex-col justify-center items-center m-2">
			<h1 className="text-xl text-center">GAMEMASTERS:</h1>
			<div>
				{gmList.map((gm) => (
					<div
						key={gm.id}
						className="flex flex-row justify-between items-center bg-primary p-2 m-2"
					>
						<div className="flex items-center">
							<p>{gm.name}</p>
						</div>
						<div className="flex ml-10">
							<button
								className="bg-secondary rounded border-black p-2 m-2 border-2 flex"
								onClick={() => {
									const newName = prompt("Enter new GM name:");
									if (newName !== null) {
										handleEditGM(gm.id, newName);
									}
								}}
							>
								Edit
							</button>
							<button
								onClick={() => handleDeleteGM(gm.id)}
								className="bg-secondary rounded border-black p-2 m-2 border-2 flex"
							>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-col items-center m-5">
				<input
					id="GMNameInput"
					type="text"
					placeholder="GM Name"
					className="input input-bordered w-full max-w-xs text-center"
				/>
				<button
					onClick={handleAddGM}
					className="bg-secondary rounded border-black p-2 m-2 border-2 flex"
				>
					Add GM
				</button>
			</div>
		</div>
	);
};

export default EditGms;
