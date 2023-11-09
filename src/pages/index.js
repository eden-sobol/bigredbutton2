import style from "@/styles/css/index.module.css";

import { useState, useEffect } from "react";

export default function Index() {
	let [blocked, setBlocked] = useState(false);
	let [keydown, setKey] = useState(false);

	useEffect(() => {
		const keyDownHandler = (event) => {
			handler(event);
		};

		document.addEventListener("keydown", keyDownHandler);

		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	}, []);

	function press() {
		if (!keydown) {
			keydown = true;
			document.querySelector(".bigredbutton").click();
			document.querySelector(".bigredbutton").classList.add("enter");
		}
		window.addEventListener("keyup", function () {
			setKey(true);
		});
	}
	function handler(e) {
		console.log("click" + e.key);
		if (!blocked) {
			if (e.key == "Enter") {
				press();
			}
		}
	}

	return (
		<>
			<div className={style.container}>
				<div onClick={handler} className={style.button}>
					<p>button</p>
				</div>
			</div>
		</>
	);
}
