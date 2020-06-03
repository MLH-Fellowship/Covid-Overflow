// An HOC to have a global Styling
function Layout(props) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
        html,
        body {
          margin: 0;
          padding: 0;
          font-size: 62.5%;
          font-family: 'Righteous', cursive;
        }
      `}</style>
    </div>
  );
}

export default Layout;
