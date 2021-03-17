import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SelectionSection from './SelectionSection';
import { RootState } from '../../store';
import { SearchState } from '../../store/searchTypes';
import { setSearch } from '../../store/actions';



const SortBy: React.FC = () => {

    const search: SearchState = useSelector((state: RootState) => state.search);
    const dispatch = useDispatch();

    const statsOptions = [
        "wins", "wins_pct", 
        "podiums",  "podiums_pct", 
        "entries", "avgPoints", "avgPosition", 
        "pctAhead", 
        "pointsFinish", "pointsFinish_pct",
        "dnfs", "dnfs_pct"
    ];

    const filterStats = (statArr: string[]): string[] => {
        if(search.selections.resultsFor && search.selections.resultsFor === "drivers") {
            return statArr;
        } else {
            return statArr.filter(stat => stat !== "pctAhead");
        }
    };

    const handleSortSelection = (selection: string | null) => {
        if(!selection) {
            const updatedSelection = search.selections;
            delete updatedSelection.sortBy; 
            dispatch( setSearch(updatedSelection) );

        } else {
            dispatch( setSearch({ ...search.selections, sortBy: selection }) );
        }
    };
 
    return (
        <React.Fragment>
            {search.selections.resultsFor
                ? <>
                    <SelectionSection 
                        title={"Sort by"}
                        optionsArr={filterStats(statsOptions)}
                        selected={search.selections.sortBy ? search.selections.sortBy : null}
                        handleSelection={handleSortSelection}
                    />
                </>
                : null
            }
        </React.Fragment>
    );
};

export default SortBy;