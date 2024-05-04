import { css } from "@emotion/css";

const FrameComponent = () => {
  return (
    <div
      className={css`
        width: 1428px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        padding: 0px var(--padding-xl);
        box-sizing: border-box;
        max-width: 100%;
        text-align: left;
        font-size: var(--font-size-23xl-5);
        color: var(--color-white);
        font-family: var(--heading-01);
      `}
    >
      <div
        className={css`
          width: 1224px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-55xl);
          max-width: 100%;
          @media screen and (max-width: 800px) {
            gap: var(--gap-18xl);
          }
          @media screen and (max-width: 450px) {
            gap: var(--gap-lg);
          }
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
            max-width: 100%;
            gap: var(--gap-xl);
            @media screen and (max-width: 1125px) {
              flex-wrap: wrap;
            }
          `}
        >
          <div
            className={css`
              width: 485px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-3xs);
              min-width: 485px;
              max-width: 100%;
              @media screen and (max-width: 1125px) {
                flex: 1;
              }
              @media screen and (max-width: 800px) {
                min-width: 100%;
              }
            `}
          >
            <div
              className={css`
                width: 325px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px var(--padding-6xs) 0px 0px;
                box-sizing: border-box;
                max-width: 100%;
              `}
            >
              <b
                className={css`
                  flex: 1;
                  position: relative;
                  line-height: 70px;
                  display: inline-block;
                  flex-shrink: 0;
                  debug_commit: 1de1738;
                  max-width: 100%;
                  z-index: 1;
                  @media screen and (max-width: 800px) {
                    font-size: var(--font-size-15xl);
                    line-height: 54px;
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-6xl);
                    line-height: 41px;
                  }
                `}
              >
                Check My Car
              </b>
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: var(--padding-11xs-6) 0px 0px;
                  margin-left: -21px;
                `}
              >
                <img
                  className={css`
                    width: 13.5px;
                    height: 25.9px;
                    position: relative;
                    flex-shrink: 0;
                    debug_commit: 1de1738;
                    z-index: 2;
                  `}
                  alt=""
                  src="/vector-6.svg"
                />
              </div>
            </div>
            <div
              className={css`
                align-self: stretch;
                position: relative;
                font-size: var(--paragraph-size);
                line-height: 160%;
                font-family: var(--paragraph);
                color: var(--color-gainsboro);
                z-index: 1;
              `}
            >
              Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor
              convallis. Bibendum sapien suspendisse ipsum urna malesuada elit.
              Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.
            </div>
          </div>
          <div
            className={css`
              width: 585px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-end;
              padding: 0px 0px var(--padding-7xs);
              box-sizing: border-box;
              min-width: 585px;
              max-width: 100%;
              font-size: var(--heading-06-size);
              font-family: var(--paragraph);
              @media screen and (max-width: 1125px) {
                flex: 1;
              }
              @media screen and (max-width: 800px) {
                min-width: 100%;
              }
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                gap: var(--gap-10xs);
                @media screen and (max-width: 800px) {
                  flex-wrap: wrap;
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
                  padding: 0px var(--padding-35xl) 0px 0px;
                  box-sizing: border-box;
                  gap: var(--gap-16xl);
                  min-width: 172px;
                  @media screen and (max-width: 450px) {
                    gap: var(--gap-mid);
                    padding-right: var(--padding-xl);
                    box-sizing: border-box;
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    font-weight: 600;
                    display: inline-block;
                    min-width: 110px;
                    z-index: 1;
                    @media screen and (max-width: 450px) {
                      font-size: var(--font-size-base);
                    }
                  `}
                >
                  Quick links
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: var(--gap-4xs-5);
                    color: var(--color-gainsboro);
                  `}
                >
                  <div
                    className={css`
                      width: 184px;
                      position: relative;
                      display: inline-block;
                      z-index: 1;
                      @media screen and (max-width: 450px) {
                        font-size: var(--font-size-base);
                      }
                    `}
                  >
                    Lorem Ipsum
                  </div>
                  <div
                    className={css`
                      width: 184px;
                      position: relative;
                      display: inline-block;
                      z-index: 1;
                      @media screen and (max-width: 450px) {
                        font-size: var(--font-size-base);
                      }
                    `}
                  >
                    Lorem Ipsum
                  </div>
                  <div
                    className={css`
                      align-self: stretch;
                      position: relative;
                      z-index: 1;
                      @media screen and (max-width: 450px) {
                        font-size: var(--font-size-base);
                      }
                    `}
                  >
                    Lorem Ipsum
                  </div>
                </div>
              </div>
              <div
                className={css`
                  width: 210px;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-16xl);
                `}
              >
                <div
                  className={css`
                    position: relative;
                    font-weight: 600;
                    display: inline-block;
                    min-width: 62px;
                    z-index: 1;
                    @media screen and (max-width: 450px) {
                      font-size: var(--font-size-base);
                    }
                  `}
                >
                  About
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: var(--gap-4xs-5);
                    color: var(--color-gainsboro);
                  `}
                >
                  <div
                    className={css`
                      width: 158px;
                      position: relative;
                      display: inline-block;
                      z-index: 1;
                      @media screen and (max-width: 450px) {
                        font-size: var(--font-size-base);
                      }
                    `}
                  >
                    About us`
                  </div>
                  <div
                    className={css`
                      width: 158px;
                      position: relative;
                      display: inline-block;
                      z-index: 1;
                      @media screen and (max-width: 450px) {
                        font-size: var(--font-size-base);
                      }
                    `}
                  >
                    Minssion
                  </div>
                  <div
                    className={css`
                      align-self: stretch;
                      position: relative;
                      z-index: 1;
                      @media screen and (max-width: 450px) {
                        font-size: var(--font-size-base);
                      }
                    `}
                  >
                    Contact
                  </div>
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-16xl);
                `}
              >
                <div
                  className={css`
                    position: relative;
                    font-weight: 600;
                    display: inline-block;
                    min-width: 62px;
                    z-index: 1;
                    @media screen and (max-width: 450px) {
                      font-size: var(--font-size-base);
                    }
                  `}
                >
                  Social
                </div>
                <div
                  className={css`
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    gap: var(--gap-4xs);
                    color: var(--color-gainsboro);
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      display: inline-block;
                      min-width: 98px;
                      z-index: 1;
                      @media screen and (max-width: 450px) {
                        font-size: var(--font-size-base);
                      }
                    `}
                  >
                    Facebook
                  </div>
                  <div
                    className={css`
                      width: 98px;
                      position: relative;
                      display: inline-block;
                      z-index: 1;
                      @media screen and (max-width: 450px) {
                        font-size: var(--font-size-base);
                      }
                    `}
                  >
                    Twitter
                  </div>
                  <div
                    className={css`
                      position: relative;
                      display: inline-block;
                      min-width: 105px;
                      z-index: 1;
                      @media screen and (max-width: 450px) {
                        font-size: var(--font-size-base);
                      }
                    `}
                  >
                    Instagram
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            width: 1178px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            padding: 0px var(--padding-xl);
            box-sizing: border-box;
            max-width: 100%;
            font-size: var(--font-size-base);
            color: var(--color-gainsboro);
            font-family: var(--paragraph);
          `}
        >
          <div
            className={css`
              position: relative;
              z-index: 1;
            `}
          >
            © 2024 copyrights AK
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
