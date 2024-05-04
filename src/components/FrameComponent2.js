import { css } from "@emotion/css";
import FrameComponent11 from "./FrameComponent11";

const FrameComponent2 = () => {
  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        padding: 0px var(--padding-2xl) var(--padding-78xl) var(--padding-xl);
        box-sizing: border-box;
        max-width: 100%;
        @media screen and (max-width: 1125px) {
          padding-bottom: var(--padding-44xl);
          box-sizing: border-box;
        }
        @media screen and (max-width: 450px) {
          padding-bottom: var(--padding-22xl);
          box-sizing: border-box;
        }
      `}
    >
      <form
        className={css`
          margin: 0;
          width: 1237px;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          gap: var(--gap-17xl);
          max-width: 100%;
          @media screen and (max-width: 800px) {
            gap: var(--gap-lg);
          }
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            padding: 0px var(--padding-xl) 0px var(--padding-2xl);
            box-sizing: border-box;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              width: 562px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-13xl);
              max-width: 100%;
              @media screen and (max-width: 800px) {
                gap: var(--gap-base);
              }
            `}
          >
            <h1
              className={css`
                margin: 0;
                position: relative;
                font-size: var(--special-text-01-size);
                line-height: 160%;
                font-weight: 600;
                font-family: var(--paragraph);
                color: var(--balck-basic);
                text-align: left;
                @media screen and (max-width: 800px) {
                  font-size: var(--font-size-13xl);
                  line-height: 51px;
                }
                @media screen and (max-width: 450px) {
                  font-size: var(--heading-05-size);
                  line-height: 38px;
                }
              `}
            >
              Frequently asked questions
            </h1>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px var(--padding-21xl) 0px var(--padding-20xl);
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
                  gap: var(--gap-mid);
                  max-width: 100%;
                  @media screen and (max-width: 800px) {
                    flex-wrap: wrap;
                  }
                `}
              >
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
                    &:hover {
                      background-color: var(--color-olivedrab-200);
                    }
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      font-size: var(--bt-01-size);
                      line-height: 170%;
                      font-weight: 500;
                      font-family: var(--paragraph);
                      color: var(--color-white);
                      text-align: left;
                      display: inline-block;
                      min-width: 88px;
                      @media screen and (max-width: 450px) {
                        font-size: var(--paragraph-size);
                        line-height: 30px;
                      }
                    `}
                  >
                    General
                  </div>
                </button>
                <button
                  className={css`
                    cursor: pointer;
                    border: 1px solid var(--primary-c);
                    padding: var(--padding-smi) var(--padding-40xl);
                    background-color: transparent;
                    flex: 1;
                    border-radius: var(--br-205xl-4);
                    box-sizing: border-box;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    min-width: 138px;
                    white-space: nowrap;
                    &:hover {
                      background-color: var(--color-olivedrab-300);
                      border: 1px solid var(--color-olivedrab-200);
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
                      position: relative;
                      font-size: var(--bt-01-size);
                      line-height: 170%;
                      font-weight: 500;
                      font-family: var(--paragraph);
                      color: var(--primary-c);
                      text-align: left;
                    `}
                  >
                    For business
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            gap: var(--gap-28xl);
            max-width: 100%;
            @media screen and (max-width: 1125px) {
              flex-wrap: wrap;
            }
            @media screen and (max-width: 800px) {
              gap: var(--gap-4xl);
            }
          `}
        >
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-11xl);
              min-width: 387px;
              max-width: 100%;
              @media screen and (max-width: 800px) {
                min-width: 100%;
              }
            `}
          >
            <FrameComponent11
              whatDeINeedToApplyForTheA="What de I need to apply for the account?"
              propHeight="unset"
              propWidth="unset"
              propDisplay="unset"
            />
            <div
              className={css`
                align-self: stretch;
                border-radius: var(--br-3xs);
                border: 1px solid var(--color-gray-300);
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-5xl) var(--padding-3xs)
                  var(--padding-73xl) var(--padding-11xl);
                gap: var(--gap-10xl);
                max-width: 100%;
                @media screen and (max-width: 450px) {
                  padding-top: var(--padding-xl);
                  padding-bottom: var(--padding-41xl);
                  box-sizing: border-box;
                }
              `}
            >
              <div
                className={css`
                  width: 595px;
                  height: 388px;
                  position: relative;
                  border-radius: var(--br-3xs);
                  border: 1px solid var(--color-gray-300);
                  box-sizing: border-box;
                  display: none;
                  max-width: 100%;
                `}
              />
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: space-between;
                  gap: var(--gap-xl);
                `}
              >
                <div
                  className={css`
                    position: relative;
                    font-size: var(--paragraph-size);
                    line-height: 200%;
                    font-weight: 500;
                    font-family: var(--paragraph);
                    color: var(--color-black);
                    text-align: left;
                    z-index: 1;
                  `}
                >
                  How the subscription process works?
                </div>
                <div
                  className={css`
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: var(--padding-10xs) 0px 0px;
                  `}
                >
                  <img
                    className={css`
                      width: 25px;
                      height: 25px;
                      position: relative;
                      z-index: 1;
                    `}
                    alt=""
                    src="/-icon-plus-1.svg"
                  />
                </div>
              </div>
              <div
                className={css`
                  width: 541px;
                  position: relative;
                  font-size: var(--paragraph-size);
                  line-height: 160%;
                  font-family: var(--paragraph);
                  color: var(--paragraph1);
                  text-align: left;
                  display: inline-block;
                  max-width: 100%;
                  z-index: 1;
                `}
              >
                <p
                  className={css`
                    margin: 0;
                  `}
                >{`Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est. `}</p>
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  &nbsp;
                </p>
                <p
                  className={css`
                    margin: 0;
                  `}
                >
                  Dui et est dignissim amet dis nulla vulputate. Id aenean
                  senectus fames lobortis dolor turpis eget lacinia et.
                </p>
              </div>
            </div>
            <FrameComponent11
              whatDeINeedToApplyForTheA="What de I need to apply for the account?"
              propHeight="unset"
              propWidth="unset"
              propDisplay="unset"
            />
          </div>
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-11xl);
              min-width: 387px;
              max-width: 100%;
              @media screen and (max-width: 800px) {
                min-width: 100%;
              }
            `}
          >
            <FrameComponent11
              whatDeINeedToApplyForTheA="What de I need to apply for the account?"
              propHeight="unset"
              propWidth="unset"
              propDisplay="unset"
            />
            <FrameComponent11
              whatDeINeedToApplyForTheA="What de I need to apply for the account?"
              propHeight="unset"
              propWidth="unset"
              propDisplay="unset"
            />
            <FrameComponent11
              whatDeINeedToApplyForTheA="Is support available 24 hours?"
              propHeight="unset"
              propWidth="unset"
              propDisplay="unset"
            />
            <FrameComponent11
              whatDeINeedToApplyForTheA="Is there any hidden fee included?"
              propHeight="unset"
              propWidth="unset"
              propDisplay="unset"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FrameComponent2;
