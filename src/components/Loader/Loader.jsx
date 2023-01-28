import { CenterCss, LoaderCss } from "components/App/App.styled";
import { MutatingDots } from "react-loader-spinner"
const Loader = () => (
  <LoaderCss>
    <MutatingDots
      height="100"
      width="100"
      color="blue"
      secondaryColor="blue"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </LoaderCss>
);

export default Loader;