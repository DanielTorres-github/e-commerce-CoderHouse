import React from 'react';

function SliderPromo(props) {
    return (
        <>
            <div class="carousel">
                <button id="retroceder">Retroceder</button>
                <div id="imagen"></div>
                <button id="avanzar">Avanzar</button>
            </div>
            <div class="controles">
                <button id="play">Play</button>
                <button id="stop" disabled>Stop</button>
            </div>
        </>
    );
}

export default SliderPromo;