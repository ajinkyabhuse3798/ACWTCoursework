import { css } from "@emotion/css";
import FrameComponent9 from "./FrameComponent9";

const FrameComponent8 = () => {
  return (
    <section
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
        padding: var(--padding-19xl) var(--padding-85xl) var(--padding-19xl)
          var(--padding-82xl);
        box-sizing: border-box;
        position: relative;
        gap: var(--gap-9xl-6);
        max-width: 100%;
        text-align: left;
        font-size: var(--special-text-01-size);
        color: var(--primary-c);
        font-family: var(--paragraph);
        @media screen and (max-width: 1350px) {
          flex-wrap: wrap;
        }
        @media screen and (max-width: 800px) {
          padding: var(--padding-6xl) var(--padding-33xl) var(--padding-6xl)
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
          height: 100%;
          width: 100%;
          position: absolute;
          margin: 0 !important;
          top: 0px;
          right: 5px;
          bottom: 0px;
          left: 0px;
          background-color: var(--color-darkorange-300);
        `}
      />
      <FrameComponent9 downloadOurAppFromGoogleP="Download our app from google play or app store and you don’t have to be worry about your food anymore. " />
      <img
        className={css`
          height: 474px;
          flex: 1;
          position: relative;
          border-radius: 28.67px;
          max-width: 100%;
          overflow: hidden;
          object-fit: cover;
          min-width: 462px;
          z-index: 1;
          @media screen and (max-width: 800px) {
            min-width: 100%;
          }
        `}
        loading="lazy"
        alt=""
        src="/sushibarmockup-copy-2@2x.png"
      />
    </section>
  );
};

export default FrameComponent8;
