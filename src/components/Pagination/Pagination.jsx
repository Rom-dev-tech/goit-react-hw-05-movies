import PropTypes from 'prop-types';
import { Button } from '../Button/Button';

export const Pagination = ({ pageDicriment, pageIncriment, page, data }) => {
  return (
    <div
      style={{
        display: 'Flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
      }}
    >
      <Button
        title="Prev page"
        onClick={pageDicriment}
        page={page}
        currentPage={1}
      />

      <span style={{ fontWeight: 700 }}>Current Page: {page}</span>

      <Button
        title="Next page"
        onClick={pageIncriment}
        page={page}
        currentPage={data.total_pages / data.results.length}
      />
    </div>
  );
};

Pagination.propTypes = {
  pageDicriment: PropTypes.func.isRequired,
  pageIncriment: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
};
