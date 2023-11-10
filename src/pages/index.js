import style from "@/styles/css/index.module.css";

import { useState, useEffect, useRef } from "react";

export default function Index() {
	let [blocked, setBlocked] = useState(false);
	let [keydown, setKey] = useState(false);
	let [pressed, setPressed] = useState(false);
	let button = useRef();

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
			setKey(true);
			setPressed(true);

			window.addEventListener("keyup", function () {
				setKey(false);
				setPressed(false);
			});
		}
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
				<div className={style.settings}>
					<p>Settings</p>
				</div>
				<div className={style.count}>
					<p>0</p>
				</div>
				<div ref={button} onClick={handler} className={`${style.button} ${pressed ? style.press: null
				}`}>
					<p>button</p>
				</div>
			</div>
		</>
	);
}
