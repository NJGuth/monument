const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity="0.12"
      d="M13.5798 13.7896C13.0765 13.9267 12.5468 13.9998 12 13.9998C9.46679 13.9998 7.30024 12.4299 6.42018 10.21C3.87293 10.9034 2 13.2329 2 15.9998C2 19.3135 4.68629 21.9998 8 21.9998C11.3137 21.9998 14 19.3135 14 15.9998C14 15.2193 13.851 14.4736 13.5798 13.7896Z"
      fill="currentColor"
    />
    <path
      d="M12 20.4722C13.0615 21.4223 14.4633 22 16 22C19.3137 22 22 19.3137 22 16C22 13.2331 20.1271 10.9036 17.5798 10.2102M6.42018 10.2102C3.87293 10.9036 2 13.2331 2 16C2 19.3137 4.68629 22 8 22C11.3137 22 14 19.3137 14 16C14 15.2195 13.851 14.4738 13.5798 13.7898M18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default LogoIcon;
