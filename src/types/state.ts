export interface State {
  render: () => Promise<any>;
  css: string;
  html: string;
  name: string;
  identifier: string;
}
