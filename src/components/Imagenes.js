import React from 'react';
import styles from './Imagenes.module.css';
import PropTypes from 'prop-types';

const Imagenes = ({imagen}) => {

    //extraer las variables
    const {tags , previewURL , largeImageURL , likes , views} = imagen;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className={`${styles.imagen} card-img-top`} />

                <div className="card-body">
                    <p className="card-text">{likes} Me Gusta</p>
                    <p className="card-text">{views} Vistas</p>
                </div>
                <div className="card-footer">
                    <a
                        href={largeImageURL}
                        target="_blank" //siempre que usamos blank tenemos que tener un rel
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-block"
                    >Ver Imagen</a>
                </div>
            </div>
        </div>
     );
}
 
Imagenes.propTypes = {
    imagen : PropTypes.object.isRequired
}
export default Imagenes;