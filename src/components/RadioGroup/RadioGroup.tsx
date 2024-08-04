type Props = {
  name: string;
  value: number;
  amount: number;
  onClick: (name: string, value: number) => void;
  className: Record<string, string>;
  appearance?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const RadioGroup = (props: Props) => {
  switch (props.appearance) {
    case "circle":
      return <CircleRadioButton {...props} />;
    default:
      return (
        <fieldset className={props.className} style={props.style}>
          {Array.apply(null, Array(props.amount)).map((_, i) => (
            <input type="radio" checked={props.value === i} onClick={() => props.onClick(props.name, i)} />
          ))}
        </fieldset>
      );
  }
};

const CircleRadioButton = (props: Props) => {
  return (
    <div className={`absolute ${props.className.container}`} style={props.style}>
      {Array.apply(null, Array(props.amount)).map((_, i) => (
        <button className={props.className.button} onClick={() => props.onClick(props.name, i)}>
          {props.value === i && (
            <svg
              className="absolute"
              width="78"
              height="38"
              viewBox="0 0 118 78"
              fill="none"
              stroke={"#42454A"}
              strokeWidth="1.25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6_2278)">
                <path
                  d="M64.9868 0.221204C53.1347 -1.06539 41.5668 3.4712 31.8807 9.9377C22.3368 16.3171 14.045 24.5526 7.62823 34.0279C4.37245 38.8392 1.50249 44.1197 0.433028 49.8691C-0.561982 55.1898 0.0539761 60.9124 2.99162 65.5563C5.92927 70.2001 10.5456 72.914 15.3988 74.7434C21.1116 76.9011 27.2441 77.8593 33.3428 77.9867C45.3844 78.2346 57.5412 75.5743 68.8518 71.6341C80.1624 67.6939 90.3426 62.3264 99.7783 55.4846C108.456 49.199 117.127 40.8228 117.925 29.5717C118.291 24.4186 116.897 19.2253 113.323 15.3588C109.749 11.4923 104.902 9.44852 100.015 8.06141C87.9397 4.63718 74.9166 4.80471 62.6042 6.7145C50.2918 8.6243 37.3228 12.7052 25.112 17.0609C22.154 18.113 19.2096 19.1985 16.2652 20.2774C15.8929 20.4114 15.2228 20.8671 15.568 21.316C15.9132 21.765 16.8879 21.4903 17.294 21.3429C28.8619 17.1212 40.4771 12.9063 52.4916 10.0985C64.5062 7.29079 76.6155 5.98409 88.6978 7.57223C98.4448 8.85213 110.832 11.881 114.338 22.2944C115.942 27.0588 115.475 32.3191 113.681 36.963C111.786 41.8748 108.314 46.0697 104.449 49.6078C100.584 53.1459 95.9539 56.4227 91.3512 59.2975C86.7484 62.1722 81.7395 64.8392 76.6562 67.0774C66.4218 71.5872 55.4631 74.73 44.3217 76.0032C38.4058 76.68 32.3816 76.7604 26.4928 75.8155C21.1455 74.9578 15.7237 73.3362 11.1886 70.314C6.78214 67.3856 3.81064 63.0568 2.89686 57.8635C1.98308 52.6702 3.15407 47.0145 5.381 42.0825C7.65531 37.0367 10.9246 32.3795 14.4038 28.0774C17.8829 23.7753 21.7208 19.882 25.9242 16.3372C34.2633 9.2944 44.3014 3.14285 55.3413 1.67533C58.0353 1.31347 60.7766 1.25316 63.4774 1.54801C64.0662 1.60832 64.777 1.5145 65.2237 1.08564C65.5554 0.763987 65.5486 0.281513 64.9868 0.221204Z"
                  fill={"#42454A"}
                />
              </g>
              <defs>
                <clipPath id="clip0_6_2278">
                  <rect width="118" height="78" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </button>
      ))}
    </div>
  );
};

export default RadioGroup;
