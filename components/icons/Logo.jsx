const Logo = ({ className, ...props }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
    >
        <path d="M0 7.8h6.3V24H0z"/>
        <path d="M0 17.7h16.2V24H0z"/>
        <path d="M0 12.75h11.25V24H0zM14.98 9.6h6.3v6.3h-6.3zM8.85 1.5h6.3v6.3h-6.3zM18.56 0H24v5.44h-5.44z"/>
    </svg>
);

export default Logo;