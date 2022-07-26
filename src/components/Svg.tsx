const SvgComponent = (props) => (
  <svg
    width={48}
    height={1}
    xmlns="http://www.w3.org/2000/svg"
    color="red"
    {...props}
  >
    <title>{"Rectangle 5"}</title>
    <path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
  </svg>
);

export default SvgComponent;
