import { css } from "@emotion/css";

const PrimaryButtonLarge = ({
  login,
  propBackgroundColor,
  propDisplay,
  propMinWidth,
}) => {
  return (
    <button
      className={css`
        cursor: pointer;
        border: none;
        padding: var(--padding-mini) var(--padding-41xl);
        background-color: var(--primary-c);
        border-radius: var(--br-205xl-4);
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: var(--gap-mini);
        z-index: 1;
        @media screen and (max-width: 450px) {
          padding-left: var(--padding-xl);
          padding-right: var(--padding-xl);
          box-sizing: border-box;
        }
        background-color: ${propBackgroundColor};
      `}
    >
      <div
        className={css`position: relative;
font-size: var(--bt-01-size);
line-height: 170%;
font-weight: 500;
font-family: var(--paragraph);
color: var(--color-white);
text-align: left;
display: inline-block;
min-width: 123px;
white-space: nowrap;
@media screen and (max-width: 450px) {
font-size: var(--paragraph-size);
line-height: 30px;

}
display: ${propDisplay}
min-width: ${propMinWidth}
`}
      >
        {login}
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-sm-5) 0px 0px;
        `}
      >
        <img
          className={css`
            width: 16px;
            height: 10px;
            position: relative;
          `}
          alt=""
          src="/vector-4.svg"
        />
      </div>
    </button>
  );
};

export default PrimaryButtonLarge;
