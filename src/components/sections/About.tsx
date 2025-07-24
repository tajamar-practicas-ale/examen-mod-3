import React from 'react'

export const About = () => {
    return (
        <div id='about' className="about pt-30 h-dvh z-50 bg-white rounded-b-4xl">
            <div className="about__content lg:px-[8%]">
                <h2 className="sub-title">Sobre mí</h2>
                <p className="text-center text-xl mt-2">Soy un desarrollador full stack con experiencia en React, Node.js y MongoDB. Me apasiona crear aplicaciones web modernas y escalables.</p>
                <div className='flex justify-between mt-12 text-lg w-full'>
                    <section className='about-me w-1/3'>
                        <h3 className='title font-bold mb-3'>Conóceme mejor</h3>
                        <div className='details'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis voluptas aliquam culpa praesentium molestias quibusdam possimus, illo, ratione sapiente maiores quos animi amet quidem placeat. Tempore similique optio corrupti!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis voluptas aliquam culpa praesentium molestias quibusdam possimus, illo, ratione sapiente maiores quos animi amet quidem placeat. Tempore similique optio corrupti!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis voluptas aliquam culpa praesentium molestias quibusdam possimus, illo, ratione sapiente maiores quos animi amet quidem placeat. Tempore similique optio corrupti!</p>
                        </div>
                    </section>
                    <section className='skills w-1/3'>
                        <h3 className="title font-bold mb-3">Habilidades</h3>
                        <div className="flex flex-wrap gap-2">
                            <div className="skill">HTML</div>
                            <div className="skill">CSS</div>
                            <div className="skill">JavaScript</div>
                            <div className="skill">React</div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
