import { useSelector } from 'react-redux';
import { useGetShowByIdQuery } from '../api/TvMazeApi';
import { RootState } from '../store';

export const useGetDetailShow = (id: any) => {
    const selectedShow = useSelector((state: RootState) => state.app.selectedShow);
    
    if (!selectedShow) {
        const { data, isLoading, error } = useGetShowByIdQuery(id);

        return {
            data,
            isLoading,
            error
        };
    };

    return {
        selectedShow,
    };
}