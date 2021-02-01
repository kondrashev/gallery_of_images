export const PICTURES_FETCH_DATA_SUCCESS = 'PICTURES_FETCH_DATA_SUCCESS';

export const picturesFetchDataSuccess = (pictures) => {
    return {
        type: PICTURES_FETCH_DATA_SUCCESS,
        pictures
    }
}
export const picturesFetchData = (url) => {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    return response.ok;
                }
            })
            .then(pictures => {
                dispatch(picturesFetchDataSuccess(pictures));
            })
    }
}