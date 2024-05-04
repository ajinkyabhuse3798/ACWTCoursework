import { css } from "@emotion/css";
import FrameComponent9 from "./FrameComponent9";

const FrameComponent1 = () => {
  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        padding: var(--padding-22xl) var(--padding-94xl) var(--padding-37xl)
          var(--padding-82xl);
        box-sizing: border-box;
        position: relative;
        min-height: 635px;
        max-width: 100%;
        gap: var(--gap-xl);
        @media screen and (max-width: 1350px) {
          flex-wrap: wrap;
          justify-content: center;
        }
        @media screen and (max-width: 800px) {
          padding: var(--padding-8xl) var(--padding-37xl) var(--padding-17xl)
            var(--padding-31xl);
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
          height: calc(100% - 85px);
          width: 100%;
          position: absolute;
          margin: 0 !important;
          top: 0px;
          right: 0px;
          bottom: 85px;
          left: 0px;
          background-color: var(--color-darkorange-300);
        `}
      />
      <FrameComponent9
        downloadOurAppFromGoogleP="Download our app from google play or app store and you don’t have to be worry about your car anymore. "
        propPadding="var(--padding-82xl) 0px 0px"
        propMinHeight="unset"
        propHeight="unset"
        propDisplay="unset"
        propHeight1="unset"
      />
      <img
        className={css`
          width: 484px;
          position: relative;
          max-height: 100%;
          object-fit: contain;
          max-width: 100%;
          z-index: 1;
          @media screen and (max-width: 1350px) {
            flex: 1;
          }
        `}
        loading="lazy"
        alt=""
        src="/image-8@2x.png"
      />
    </div>
  );
};

export default FrameComponent1;
