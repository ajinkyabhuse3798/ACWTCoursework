import { css } from "@emotion/css";

const FrameComponent11 = ({
  whatDeINeedToApplyForTheA,
  propHeight,
  propWidth,
  propDisplay,
}) => {
  return (
    <div
      className={css`
        align-self: stretch;
        border-radius: var(--br-3xs);
        border: 1px solid var(--color-gray-300);
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        padding: var(--padding-2xl) var(--padding-xs) var(--padding-2xl)
          var(--padding-11xl);
        max-width: 100%;
        gap: var(--gap-xl);
        text-align: left;
        font-size: var(--paragraph-size);
        color: var(--color-black);
        font-family: var(--paragraph);
      `}
    >
      <div
        className={css`
          height: 82px;
          width: 595px;
          position: relative;
          border-radius: var(--br-3xs);
          border: 1px solid var(--color-gray-300);
          box-sizing: border-box;
          display: none;
          max-width: 100%;
        `}
      />
      <div
        className={css`height: 36px;
width: 370px;
position: relative;
line-height: 200%;
font-weight: 500;
display: inline-block;
max-width: calc(100% - 45px);
z-index: 1;
height: ${propHeight}
width: ${propWidth}
display: ${propDisplay}
`}
      >
        {whatDeINeedToApplyForTheA}
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-7xs) 0px 0px;
        `}
      >
        <img
          className={css`
            width: 25px;
            height: 25px;
            position: relative;
            z-index: 1;
          `}
          loading="lazy"
          alt=""
          src="/-icon-plus.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent11;
