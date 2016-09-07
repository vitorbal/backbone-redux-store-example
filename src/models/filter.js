import Backbone from 'backbone';

const FilterModel = Backbone.Model.extend({});

export const filterModelReducer = (filterModel = new FilterModel(), action) => {
    if (action.type === 'SET_FILTER') {
        filterModel.set({ filterType: action.payload });
    }

    return filterModel;
};

export default FilterModel;
