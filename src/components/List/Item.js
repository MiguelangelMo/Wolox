import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { keywordSearch } from '../../actions/authActions';
import Image from '../../img/image.jpg';

const Item = ({ search, orders }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.item);
    const loading = () => {
        return (
            <span>Cargando...</span>
        );
    };
    const searchMini = search.toLowerCase();
    useEffect(() => {
        if (orders === "0") {
            dispatch(keywordSearch(searchMini, 0));
        }
        if (orders === "1") {
            dispatch(keywordSearch(searchMini, 1));
        }
        if (orders === "2") {
            dispatch(keywordSearch(searchMini, 2));
        }
    }, [searchMini, orders]);
    return (
        <div className="row container-galery flex-start-y-spacex">
            <ul>
                <h4>Tecnologías</h4>
                <li className="table-column label-1">
                    {items
                        ? items.map((lists) => <span key={lists.tech}>{lists.tech}</span>)
                        : loading()}
                </li>
            </ul>
            <ul>
                <h4>Lenguajes</h4>
                <li className="table-column label-2">
                    {items
                        ? items.map((lists) => <span key={lists.tech}>{lists.language}</span>)
                        : loading()}
                </li>
            </ul>
            <ul>
                <h4>Tipos</h4>
                <li className="table-column label-3">
                    {items
                        ? items.map((lists) => <span key={lists.tech}>{lists.type}</span>)
                        : loading()}
                </li>
            </ul>
            <ul>
                <h4>Licencias</h4>
                <li className="table-column label-4">
                    {items
                        ? items.map((lists) => <span key={lists.tech}>{lists.license}</span>)
                        : loading()}
                </li>
            </ul>
            <ul>
                <h4>Autores</h4>
                <li className="table-column label-5">
                    {items
                        ? items.map((lists) => <span key={lists.tech}>{lists.author}</span>)
                        : loading()}
                </li>
            </ul>
            <ul>
                <h4>Año</h4>
                <li className="table-column label-6">
                    {items
                        ? items.map((lists) => <span key={lists.tech}>{lists.year}</span>)
                        : loading()}
                </li>
            </ul>
            <ul className="list-img">
                <h4>Imagen</h4>
                <li className="table-column label-7">
                    {items
                        ? items.map(
                            (lists) => (
                                <a href={lists.logo} key={lists.tech}>
                                    <img src={Image} alt={lists.tech} />
                                </a>
                            ),
                        )
                        : loading()}
                </li>
            </ul>
            <cite>
                <span>
                    Total items:
                    {items.length}
                </span>
            </cite>
        </div>
    );
};

Item.propTypes = {
    search: PropTypes.string.isRequired,
    orders: PropTypes.string.isRequired,
};

export default Item;
