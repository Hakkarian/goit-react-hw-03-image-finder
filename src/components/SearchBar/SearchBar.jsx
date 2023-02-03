import { FormCss, IconButtonCss, IconCss, InputCss, SearchBarCss } from "./SearchBar.styled";
import PropTypes from "prop-types";


export const SearchBar = ({onSubmit, onChange}) =>

      <SearchBarCss>
        <FormCss onSubmit={onSubmit}>
          <IconButtonCss>
            <IconCss width={20} />
          </IconButtonCss>

          <InputCss 
            id="txtbox"
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
        name="query"
          />
        </FormCss>
      </SearchBarCss>

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default SearchBar;