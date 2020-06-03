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
        a,
        a:link,
        a:visited {
          color: black;
          text-decoration: none;
        }

        @media only screen and (max-width: 1250px) {
          html,
          body {
            font-size: 60.5%;
          }
        }
        @media only screen and (max-width: 1000px) {
          html,
          body {
            font-size: 58.5%;
          }
        }
        @media only screen and (max-width: 880px) {
          html,
          body {
            font-size: 55.5%;
          }
        }
      `}</style>
    </div>
  );
}

export default Layout;
