/* eslint-disable-next-line */
export interface MainProps {}

export function Main(props: MainProps) {
  return (
    <div className={styles['container']}>
      <style jsx>{`
        div {
          color: pink;
        }
      `}</style>
      <h1>Welcome to Main!</h1>
    </div>
  );
}

export default Main;
