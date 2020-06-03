// An HOC to have a global Styling
function Layout(props) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-size: 62.5%;
        }
      `}</style>
    </div>
  );
}

export default Layout;
