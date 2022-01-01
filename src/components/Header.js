import React from "react";

const Header = (props) => (
  <React.Fragment>
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">
        {/* <span>Fresh Seafood market</span> */}
        <span>{props.tagline}</span>
      </h3>
    </header>
  </React.Fragment>
);

// class Header extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <header className="top">
//           <h1>
//             Catch
//             <span className="ofThe">
//               <span className="of">of</span>
//               <span className="the">the</span>
//             </span>
//             Day
//           </h1>
//           <h3 className="tagline">
//             {/* <span>Fresh Seafood market</span> */}
//             <span>{this.props.tagline}</span>
//           </h3>
//         </header>
//       </React.Fragment>
//     );
//   }
// }

export default Header;
