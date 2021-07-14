export const main = () => Config.Css.css`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
`;

export const header = () => Config.Css.css`
  font-size: 16px;
  color: #005da7;
  font-family: ClearSans-Medium, ClearSans, sans-serif;
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 48px;
  cursor: pointer;
  line-height: 25px;
`;

export const content = () => Config.Css.css`
  height: 100px;
  width: 100%;
  color: rgba(0, 0, 0, 0.87);
  overflow: hidden;
  padding: 0 16px;
  cursor: pointer;
`;

export const text = () => Config.Css.css`
  font-size: 16px;
  line-height: 21px;
  max-height: 84px;
  overflow: hidden;
`;
