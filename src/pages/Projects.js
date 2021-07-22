import React from 'react';
import Navigation from '../Components/Navigation';
import ButtonsBottom from '../Components/ButtonsBottom';
import Logo from '../Components/Logo';
import Project from '../Components/Project';
import Mouse from '../Components/Mouse';

export const Project1 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={0} />
                <ButtonsBottom left={'/'} right={'project-2'} />
            </div>
        </main>
    )
}
export const Project2 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={1} />
                <ButtonsBottom left={'project-1'} right={'project-3'} />
            </div>
        </main>
    )
}
export const Project3 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber={2} />
                <ButtonsBottom left={'project-2'} right={'contact'} />
            </div>
        </main>
    )
}


