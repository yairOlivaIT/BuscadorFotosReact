import React  from 'react';
import Imagenes from './Imagenes';
import PropTypes from 'prop-types';

const ListadoImagenes = ({imagenes}) => {
    return (
        <div className="col-12 p-5 row">
            {imagenes.map(imagen => (
                <Imagenes
                    key = {imagen.id}
                    imagen = {imagen}
                />
            ))}
        </div>
    );
}

ListadoImagenes.propTypes = {
    imagenes : PropTypes.array.isRequired
}
export default ListadoImagenes;