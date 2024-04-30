import { css } from "@emotion/css";

const FrameComponent9 = ({
  downloadOurAppFromGoogleP,
  propPadding,
  propMinHeight,
  propHeight,
  propDisplay,
  propHeight1,
}) => {
  return (
    <div
      className={css`width: 500.4px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: 0px 0px var(--padding-85xl);
box-sizing: border-box;
min-width: 500.3999999999997px;
min-height: 370px;
max-width: 100%;
text-align: left;
font-size: var(--special-text-01-size);
color: var(--primary-c);
font-family: var(--paragraph);
@media screen and (max-width: 1350px) {
flex: 1;

}
@media screen and (max-width: 800px) {
min-width: 100%;

}
@media screen and (max-width: 450px) {
padding-bottom: var(--padding-49xl);
box-sizing: border-box;

}
padding: ${propPadding}
min-height: ${propMinHeight}
`}
    >
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-11xl);
          max-width: 100%;
        `}
      >
        <div
          className={css`
            width: 474px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-xs);
            max-width: 100%;
          `}
        >
          <h1
            className={css`margin: 0;
align-self: stretch;
height: 52px;
position: relative;
font-size: inherit;
line-height: 130%;
font-weight: 700;
font-family: inherit;
display: inline-block;
z-index: 1;
@media screen and (max-width: 800px) {
font-size: var(--font-size-13xl);
line-height: 42px;

}
@media screen and (max-width: 450px) {
font-size: var(--heading-05-size);
line-height: 31px;

}
height: ${propHeight}
display: ${propDisplay}
`}
          >
            Put us in your pocket
          </h1>
          <div
            className={css`
              width: 447px;
              height: 84px;
              position: relative;
              font-size: var(--heading-06-size);
              line-height: 140%;
              font-weight: 500;
              color: var(--paragraph-1);
              display: inline-block;
              max-width: 100%;
              z-index: 1;
              @media screen and (max-width: 450px) {
                font-size: var(--font-size-base);
                line-height: 22px;
              }
              height: ${propHeight1};
            `}
          >
            {downloadOurAppFromGoogleP}
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px 0px 0px var(--padding-12xs);
            box-sizing: border-box;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-xl-9);
              max-width: 100%;
              @media screen and (max-width: 800px) {
                flex-wrap: wrap;
              }
            `}
          >
            <img
              className={css`
                align-self: stretch;
                flex: 1;
                position: relative;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
                min-width: 157px;
                min-height: 88px;
                z-index: 1;
              `}
              loading="lazy"
              alt=""
              src="/app-store-black.svg"
            />
            <img
              className={css`
                align-self: stretch;
                flex: 1;
                position: relative;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
                min-width: 153px;
                min-height: 88px;
                z-index: 1;
              `}
              loading="lazy"
              alt=""
              src="/google-play-black.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
