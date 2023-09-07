const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

/**
 * 
 * @returns filter object
 */
const getFilters = () => filters
/**
 * 
 * @param {object} updates - filters criteria
 */
const setFilters = (updates) =>{
    if(typeof updates.searchText === "string"){
        filters.searchText = updates.searchText;
    }
    if(typeof updates.sortBy === "string"){
        filters.sortBy = updates.sortBy;
    }

}

export {getFilters, setFilters }