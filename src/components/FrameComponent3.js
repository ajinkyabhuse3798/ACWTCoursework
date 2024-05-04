import { css } from "@emotion/css";
import PrimaryButtonLarge from "./PrimaryButtonLarge";

const FrameComponent3 = () => {
  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        padding: 0px var(--padding-xl) var(--padding-129xl);
        box-sizing: border-box;
        max-width: 100%;
        text-align: center;
        font-size: var(--special-text-01-size);
        color: var(--color-white);
        font-family: var(--paragraph);
      `}
    >
      <div
        className={css`
          width: 812px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          gap: var(--gap-mid-5);
          max-width: 100%;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            padding: 0px var(--padding-3xl) 0px var(--padding-xl);
          `}
        >
          <h1
            className={css`
              margin: 0;
              position: relative;
              font-size: inherit;
              line-height: 130%;
              font-weight: 700;
              font-family: inherit;
              z-index: 1;
              @media screen and (max-width: 800px) {
                font-size: var(--font-size-13xl);
                line-height: 42px;
              }
              @media screen and (max-width: 450px) {
                font-size: var(--heading-05-size);
                line-height: 31px;
              }
            `}
          >
            Ready to get started?
          </h1>
        </div>
        <div
          className={css`
            align-self: stretch;
            position: relative;
            font-size: var(--heading-05-size);
            line-height: 34px;
            font-weight: 600;
            color: var(--color-whitesmoke);
            z-index: 1;
            @media screen and (max-width: 450px) {
              font-size: var(--font-size-lgi);
              line-height: 27px;
            }
          `}
        >
          Join thousands of satisfied customers using Check My Car
        </div>
        <div
          className={css`
            width: 790px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            padding: 0px var(--padding-xl);
            box-sizing: border-box;
            max-width: 100%;
          `}
        >
          <PrimaryButtonLarge
            login="Book a Demo"
            propBackgroundColor="#ff8b00"
            propDisplay="unset"
            propMinWidth="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
