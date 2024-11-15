
import "./PrimaryButton.css";


// Interfaces
interface IProps {
  className?: string;
  placeholder: string;
  withArrow?: boolean;
  isActionLoading?: boolean;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
function PrimaryButton({
  className,
  placeholder,
  disabled = false,
  // onClick,
}: IProps) {
  return (
    <div
      
      className={`primary-button-wrapper ${className}`}
    >
          <button disabled={disabled} onClick={() => window.location.href = 'https://forms.office.com/Pages/ResponsePage.aspx?id=AjKOAc5sBUWv1KvSB9qmJr6jcxOMICJGsuwWS2eXblVUMEhWQTZVVUI0VFE2RFNXMU9CWElCM0VaRi4u&embed=true'}>
        {placeholder}
      </button>
    </div>
  );
}

export default PrimaryButton;
