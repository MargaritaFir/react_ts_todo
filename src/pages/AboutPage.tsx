import React from 'react';
import { useHistory } from 'react-router-dom'



export const AboutPage: React.FC = () => {

    const history = useHistory();

    return(
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique quod molestias ducimus dolorem ad explicabo voluptatum voluptatem fugiat facere,
                ipsam possimus quia perspiciatis sed quas reprehenderit dolore ratione sequi exercitationem?</p>
            <button className='btn' onClick={() => history.push('/')} >Обратно к списку дел</button>
        </>
    )
}