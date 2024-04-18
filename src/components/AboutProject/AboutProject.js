import './AboutProject.css'
const AboutProject = () => {
    return (
        <section className="about-project" id="about-project">
            <h2 className="about-project__title">О проекте</h2>
            <div className='about-project__container'>
                <div className='about-project__description'>
                    <h3 className='about-project__description-title'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__description-paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__description'>
                    <h3 className='about-project__description-title'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__description-paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='about-project__container'>
                <div className='about-project__stage'>
                    <h4 className='about-project__stage-title about-project__stage-title_type_green'>1 неделя</h4>
                    <p className='about-project__stage-description'>Back-end</p>
                </div>
                <div className='about-project__stage'>
                    <h4 className='about-project__stage-title'>4 недели</h4>
                    <p className='about-project__stage-description'>Front-end</p>
                </div>
            </div>
        </section>
    )
}
export default AboutProject;