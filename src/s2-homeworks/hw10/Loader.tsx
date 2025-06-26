import s from './Loader.module.css'

export const Loader = () => <div className={s.loader}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className={s.loaderSVG} // Вы можете добавить свой класс для стилизации
    >
        <circle cx="50" cy="50" r="45" stroke="gray" strokeWidth="5" fill="none" />
        <circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="5" fill="none"
                strokeDasharray="283"
                strokeDashoffset="282"
                transform="rotate(-90 50 50)">
            <animate attributeName="strokeDashoffset" from="283" to="0" dur="1.5s" repeatCount="indefinite" />
        </circle>
    </svg>
</div>
