import { css } from "@emotion/css";
import PrimaryButtonLarge from "./PrimaryButtonLarge";

const FrameComponent5 = () => {
  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: var(--padding-119xl) var(--padding-75xl) var(--padding-6xl);
        box-sizing: border-box;
        position: relative;
        gap: var(--gap-33xl);
        min-height: 689px;
        max-width: 100%;
        text-align: left;
        font-size: var(--special-text-01-size);
        color: var(--primary-c);
        font-family: var(--heading-01);
        @media screen and (max-width: 800px) {
          gap: var(--gap-7xl);
          padding: var(--padding-71xl) var(--padding-28xl) var(--padding-xl);
          box-sizing: border-box;
        }
        @media screen and (max-width: 450px) {
          padding-left: var(--padding-xl);
          padding-right: var(--padding-xl);
          box-sizing: border-box;
        }
      `}
    >
      <div
        className={css`
          width: 1440px;
          height: calc(100% - 89px);
          position: absolute;
          margin: 0 !important;
          top: 0px;
          right: -6px;
          bottom: 89px;
          background-color: var(--color-darkorange-200);
        `}
      />
      <div
        className={css`
          width: 567px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-smi);
          max-width: 100%;
        `}
      >
        <div
          className={css`
            width: 529px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-12xs);
            box-sizing: border-box;
            max-width: 100%;
          `}
        >
          <h1
            className={css`
              margin: 0;
              flex: 1;
              position: relative;
              font-size: inherit;
              line-height: 130%;
              font-weight: 700;
              font-family: inherit;
              display: inline-block;
              max-width: 100%;
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
            Send critical reminders and notifications to the right people at the
            right time
          </h1>
        </div>
        <div
          className={css`
            align-self: stretch;
            position: relative;
            font-size: var(--paragraph-size);
            line-height: 160%;
            font-family: var(--paragraph);
            color: var(--paragraph-1);
            z-index: 1;
          `}
        >
          Automatically generate preventive maintenance (PM) schedules based on
          manufacturer recommendations
        </div>
      </div>
      <PrimaryButtonLarge login="Learn More" />
    </div>
  );
};

export default FrameComponent5;
