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
    <path d="M0 12.728H11.272V24H0Z" />
    <path d="M0 17.667h16.214V24H0z" />
    <path d="M0 7.779h6.302V24H0z" />
    <path d="M14.507 9.867H20.835V16.195H14.507Z" />
    <path d="M17.672 0H24V6.328H17.672Z" />
    <path d="M7.445 1.022H13.773V7.35H7.445Z" />
    </svg>
);

export default Logo;