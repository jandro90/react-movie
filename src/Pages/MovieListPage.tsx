import { useGetShowsByNameQuery } from "../api/TvMazeApi";
import { useShow } from "../hooks/useShow";
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedShow, setSearch, setSelectedShow } from "../slices/AppSlice";
import { useNavigate } from 'react-router-dom';
import { Loader } from "../components/Loader";
import { Search } from "../components/Search";
import { RootState } from "../store";
import { useEffect } from "react";
import { useRefresh } from '../hooks/useRefresh';

const MovieListPage = () => {   
    // Hooks 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchStoreValue = useSelector((state: RootState) => state.app.search);

    const { data, error, isLoading, refetch  } = useGetShowsByNameQuery(searchStoreValue, {skip: searchStoreValue === ''});
    const { getImg, getGenres, getName } = useShow();
    const { refreshDataWithAnimation } = useRefresh(); 

    // Component Functions
    const goToDetails = (element: any) => {
        dispatch(setSelectedShow(element));
        navigate(`/app/detail/${element?.show?.id}`);
    }

    const setSearchOnState = (searchValue: string) => dispatch(setSearch(searchValue));

    // LifeCyles
    useEffect(() => {
      dispatch(removeSelectedShow());
    }, [])
    

    // Views
    if (error) {
        return <p> Impossible Load Data, please refresh the page.</p>
    }
    else if (isLoading) {
        return <Loader />
    } else {
        return (
            <div className="container">
                <Search setSearchOnState={setSearchOnState} />
                <div className="d-flex justify-content-center m-2 flex-wrap">
                    {data?.map((element: any) => (
                        <div
                            className="card m-2"
                            key={element?.show?.id}
                            style={{ width: "18rem" }}
                        >
                            <img
                                src={getImg(element?.show?.image?.medium)}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    {getName(element?.show?.name)}
                                </h5>
                                <p className="card-text">
                                    <i className="fa-solid fa-user"></i>{" "}
                                    <b>Genres:</b>{" "}
                                    {getGenres(element?.show?.genres)}{" "}
                                </p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => goToDetails(element)}
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center m-2">
                    <button className="btn btn-outline-primary m-2" onClick={() => refreshDataWithAnimation(refetch)}>
                        <i className="fa fa-refresh" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        );
    }
};

export default MovieListPage;
