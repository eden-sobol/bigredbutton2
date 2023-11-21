import style from "@/styles/css/settings.module.css";

export default function Settings() {
    return (
        <>
            <title>Settings</title>

            <div className={style.container}>
                <div className={style.main}>
                    <div className={style.setting}>
                        <p>Setting 1</p>
                        <div className={style.button}>
                            button
                        </div>
                    </div>
                    <div className={style.setting}>
                        <p>Setting 2</p>
                        <div className={style.button}>
                            button
                        </div>
                    </div>
                    <div className={style.setting}>
                        <p>Setting 3</p>
                        <div className={style.button}>
                            button
                        </div>
                    </div>
                    <div className={style.setting}>
                        <p>Setting 4</p>
                        <div className={style.button}>
                            button
                        </div>
                    </div>
                    <div className={style.setting}>
                        <p>Setting 5</p>
                        <div className={style.button}>
                            button
                        </div>
                    </div>
                    <div className={style.setting}>
                        <p>Setting 6</p>
                        <div className={style.button}>
                            button
                        </div>
                    </div>
                    <div className={style.setting}>
                        <p>Setting 7</p>
                        <div className={style.button}>
                            button
                        </div>
                    </div>
                </div>

                <div className={style.back} onClick={() => {window.location.href = "/"}}>Back</div>
            </div>
        </>
    )
}