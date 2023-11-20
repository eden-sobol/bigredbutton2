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
                </div>

                <div className={style.back} onClick={() => {window.location.href = "/"}}>Back</div>
            </div>
        </>
    )
}