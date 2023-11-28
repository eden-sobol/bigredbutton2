import style from "@/styles/css/index.module.css";

import { useState, useEffect, useRef } from "react";

export default function Index() {
	let [blocked, setBlocked] = useState(false);
	let [pressed, setPressed] = useState(false);

	let [savedCount, setSaved] = useState(0);

	let button = useRef();
	let countElement = useRef();

	useEffect(() => {
		console.log("load");

		setSaved(localStorage.setItem("count", "1"));

		key();

		countElement.innerHTML = localStorage.setItem("count", "1");
	}, []);

	function key() {
		window.addEventListener("keydown", (e) => {
			if (e.key != "F5" && e.key != "F10" && e.key != "F11" && e.key != "F12") {
				setPressed(true);
			}
		});
		window.addEventListener("keyup", (e) => {
			if (e.key != "F5" && e.key != "F10" && e.key != "F11" && e.key != "F12") {
				setPressed(false);
				counter();
			}
		});
	}

	function counter() {
		countElement.current.innerHTML = parseFloat(countElement.current.innerHTML) + 1;
	}

	return (
		<>
			<title>Big Button</title>
            
			<div className={style.container}>
				<div className={style.settings} onClick={() => {window.location.href = "/settings"}}>
					<p>Settings</p>
				</div>
				<div className={style.count}>
					<p ref={countElement}>
						{savedCount}
					</p>
				</div>

				<div className={style.save}>
					<p>Save</p>
				</div>
				<div className={style.clear}>
					<p>Clear</p>
				</div>

				<div ref={button} onClick={counter} className={`${style.button} ${pressed ? style.press: null
				}`}>
					<p>button</p>
				</div>
			</div>
		</>
	);
}
