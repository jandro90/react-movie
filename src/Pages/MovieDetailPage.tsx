import { useNavigate, useParams } from "react-router-dom";
import { ErrorMsg } from "../components/ErrorMsg";
import { Loader } from "../components/Loader";
import { useGetDetailShow } from "../hooks/useGetDetailShow";
import { useShow } from "../hooks/useShow";

const MovieDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { selectedShow, data, isLoading, error } = useGetDetailShow(id);
    const { getGenres, getImg, getName, getLang, getDays, getScore } = useShow();

    if (error) return <ErrorMsg />;
    if (isLoading) return <Loader />;

    if (selectedShow || data) {
        return (
            <div className="m-2">
                <h3 className="text-center"> Show Detail</h3>
                <hr />
                <div className="d-flex justify-content-center m-2">
                    <div className="card" style={{ width: "18rem" }}>
                        <img
                            className="card-img-top"
                            src={getImg(
                                selectedShow?.show?.image?.medium ||
                                    data.image?.medium
                            )}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {getName(
                                    selectedShow?.show?.name || data?.name
                                )}
                            </h5>
                            <p
                                className="card-text"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        selectedShow?.show?.summary ||
                                        data?.summary,
                                }}
                            />
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Genres: </b>
                                {getGenres(
                                    selectedShow?.show?.genres || data?.genres
                                )}
                            </li>
                            <li className="list-group-item">
                                <b>Languague:</b>{" "}
                                {getLang(
                                    selectedShow?.show?.language ||
                                        data?.language
                                )}
                            </li>
                            <li className="list-group-item">
                                <b>Schedule: </b>
                                {getDays(
                                    selectedShow?.show?.schedule?.days ||
                                        data?.schedule?.days
                                )}
                            </li>
                            <li className="list-group-item">
                                {(selectedShow?.score || data?.score) && (
                                    <>
                                        <b>Score: </b>{getScore(selectedShow?.score || data?.score)}
                                    </>
                                )}
                            </li>
                        </ul>
                        <div className="card-body">
                          <button className="btn btn-primary" onClick={() => navigate(-1)}>Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default MovieDetailPage;
