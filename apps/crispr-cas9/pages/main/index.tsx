/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  console.log('props');
  return (
    <div className="container">
      <h1>Welcome to Main!</h1>
    </div>
  );
}

export default Main;
