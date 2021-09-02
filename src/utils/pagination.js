import { useHistory, useLocation } from 'react-router-dom';

const DEFAULT_PAGE = 1;
const DEFAULT_OFFSET = 10;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const usePagination = () => {
  const location = useLocation();
  const history = useHistory();
  const params = useQuery();

  const page = params.get('page') || DEFAULT_PAGE;
  const limit = params.get('limit') || DEFAULT_OFFSET;

  const goToPage = p => {
    history.push({
      pathname: location.pathname,
      search: `?page=${p}&limit=${limit}`,
    });
  };

  const nextPage = () => {
    history.push({
      pathname: location.pathname,
      search: `?page=${Number(page) + 1}&limit=${limit}`,
    });
  };
  const previousPage = () => {
    history.push({
      pathname: location.pathname,
      search: `?page=${Number(page) - 1}&limit=${limit}`,
    });
  };

  const setPageLimit = pageSize => {
    history.push({
      pathname: location.pathname,
      search: `?page=${Number(page)}&limit=${pageSize}`,
    });
  };

  const canNextPage = true;
  const canPreviousPage = Number(page) > 1;

  return {
    goToPage,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    page,
    limit,
    setPageLimit,
  };
};

export default usePagination;
