import { ClipLoader } from "react-spinners";
import "./Spinner.css";
type Props = {
  isLoading?: boolean;
};

export const Spinner = ({ isLoading = true }: Props) => {
  return (
    <div id="loading-spinner">
      <ClipLoader
        color="white"
        loading={isLoading}
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
