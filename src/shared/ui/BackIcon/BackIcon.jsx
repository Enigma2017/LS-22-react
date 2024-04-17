export const BackIcon = ({ goBack }) => {
    const handleGoBack = () => {
        goBack();
    };

    return (
        <span className="icon-chevron-left product-link__icon" onClick={handleGoBack}></span>
    );
};
