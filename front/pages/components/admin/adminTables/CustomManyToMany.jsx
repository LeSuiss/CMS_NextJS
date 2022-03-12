/* eslint-disable react/react-in-jsx-scope */
import { useListContext } from 'react-admin';
const CustomManyToMany = ({ fieldName, joinTableName, propsList }) => {
  // console.log('is in custommm')
  const {
    // fetched data
    data, // an id-based dictionary of the list data, e.g. { 123: { id: 123, title: 'hello world' }, 456: { ... } }
    ids, // an array listing the ids of the records in the list, e.g [123, 456, ...]
    total, // the total number of results for the current filters, excluding pagination. Useful to build the pagination controls. e.g. 23
    loaded, // boolean that is false until the data is available
    loading, // boolean that is true on mount, and false once the data was fetched
    // pagination
    page, // the current page. Starts at 1
    setPage, // a callback to change the current page, e.g. setPage(3)
    perPage, // the number of results per page. Defaults to 10
    setPerPage, // a callback to change the number of results per page, e.g. setPerPage(25)
    // sorting
    currentSort, // a sort object { field, order }, e.g. { field: 'date', order: 'DESC' }
    setSort, // a callback to change the sort, e.g. setSort('name', 'ASC')
    // filtering
    filterValues, // a dictionary of filter values, e.g. { title: 'lorem', nationality: 'fr' }
    setFilters, // a callback to update the filters, e.g. setFilters(filters, displayedFilters)
    displayedFilters, // a dictionary of the displayed filters, e.g. { title: true, nationality: true }
    showFilter, // a callback to show one of the filters, e.g. showFilter('title', defaultValue)
    hideFilter, // a callback to hide one of the filters, e.g. hidefilter('title')
    // row selection
    selectedIds, // an array listing the ids of the selected rows, e.g. [123, 456]
    onSelect, // callback to change the list of selected rows, e.g onSelect([456, 789])
    onToggleItem, // callback to toggle the selection of a given record based on its id, e.g. onToggleItem(456)
    onUnselectItems, // callback to clear the selection, e.g. onUnselectItems();
    // misc
    basePath, // deduced from the location, useful for action buttons
    defaultTitle, // the translated title based on the resource, e.g. 'Posts'
    resource, // the resource name, deduced from the location. e.g. 'posts'
    refetch, // a callback to refresh the list data
  } = useListContext();
  return (
    <div>
      {fieldName}, {joinTableName}
    </div>
  );
};

export default CustomManyToMany;
