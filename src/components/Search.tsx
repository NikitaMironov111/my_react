import React, { SetStateAction, Dispatch, ChangeEvent } from 'react';

const Search = ({
  setSearch,
}: {
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        Search
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearch(event.target.value)
        }
      />
    </div>
  );
};

export default Search;
